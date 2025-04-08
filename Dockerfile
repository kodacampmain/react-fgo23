# Step 1: Build the app
FROM node:20-alpine AS builder

# Set working directory inside the container
WORKDIR /app

# Copy package.json and lock file first to leverage Docker cache
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the entire project
COPY . .

# Build the React app
RUN npm run build

# Step 2: Serve the built files using Nginx
FROM nginx:1.27.4-alpine

# Remove default Nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy the built app from the previous stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 to make it accessible
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
