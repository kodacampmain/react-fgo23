import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      // karena menggunakan immer, bisa langsung manipulasi state
      //   let error = 0;
      //   ["title", "body"].forEach((key) => {
      //     if (!Object.prototype.hasOwnProperty.call(action.payload, key)) error++;
      //   });
      //   if (error) return;
      state.push(action.payload);
    },
    editTodo: (state, { payload }) => {
      // const newTodo = state.map((todo, idx) => {
      //   if (idx === payload.idx) {
      //     return payload.data;
      //   }
      //   return todo;
      // });
      // return newTodo;
      state[payload.idx] = payload.data;
    },
    deleteTodo: (state, { payload }) => {
      // const newTodo = state.filter((_, idx) => {
      //   if (idx === payload.idx) return true;
      //   return false;
      // });
      // return newTodo;
      state.splice(payload.idx, 1);
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase("todoxxxaddTodoxxx", (state, { payload }) => {})
  //     .addCase()
  //     .addCase();
  // },
});

// const AddTodoActionCreator = function (payload) {
//   return {
//     type: "todo:addTodo",
//     payload,
//   };
// };

// const reducer = function (state, action) {
//   const newState = { ...state };
//   switch (action.type) {
//     case "todo:addTodo":
//       // logika menambah todo kedalam state
//       Object.assign(newState, {
//         todo: [...state.todo, action.payload],
//       });
//       return newState;

//     default:
//       return newState;
//   }
// };

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
