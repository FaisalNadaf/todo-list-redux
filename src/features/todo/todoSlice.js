import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: "abc", task: "sample-task", isDone: false }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addtodo: (state, action) => {
      let newtodo = {
        id: nanoid(),
        task: action.payload,
        isDone: false,
      };
      state.todos.push(newtodo);
    },
    destroytodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    markastodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id !== action.payload) {
          todo.isDone = true;
        }
      });
    },
  },
});

export const { addtodo, destroytodo,markastodo } = todoSlice.actions;
export default todoSlice.reducer;