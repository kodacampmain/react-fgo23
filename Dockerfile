# Step 1: Build the app
FROM node:22-slim AS builder

# Set working directory inside the container
WORKDIR /app

# Copy package.json and lock file first to leverage Docker cache
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the entire project
COPY . .

ARG VITE_HOST
ENV VITE_HOST=$VITE_HOST

# Build the React app
RUN npm run build

# Step 2 (no NGINX): use alpine to store the build file
FROM alpine:3.21.3

WORKDIR /dist

COPY --from=builder /app/dist .

# keep the container running
# RUN apk add --no-cache bash
CMD [ "sleep", "infinity" ]

# Step 2: Serve the built files using Nginx
# FROM nginx:1.28.0-alpine

# Remove default Nginx static files
# RUN rm -rf /usr/share/nginx/html/*

# Copy the built app from the previous stage
# COPY --from=builder /app/dist /usr/share/nginx/html
# COPY --from=builder /app/nginx/default.conf /etc/nginx/conf.d/

# Expose port 80 to make it accessible
# EXPOSE 80
# EXPOSE 443

# Start Nginx
# CMD ["nginx", "-g", "daemon off;"]
