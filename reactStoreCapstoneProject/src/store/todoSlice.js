import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [
    { id: "1", content: "Content1", completed: true },
    { id: "2", content: "Content2", completed: false },
    { id: "3", content: "Content3", completed: false },
  ],

  // Add Todo
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: action.payload.id,
        content: action.payload.content,
        completed: false,
      };
      state.push(newTodo);
    },

    // Delete Todo
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },

    // Edit Todo (would deal with PUT rather than PATCH requests in a real site)
    editTodo: (state, action) => {
      state.forEach((todo) => {
        if (todo.id === action.payload.id) {
          todo.content = action.payload.content;
        }
      });
    },

    // Completed Toggle Todo
    toggleComplete: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
  },
});

export const { addTodo, deleteTodo, editTodo, toggleComplete } =
  todoSlice.actions;

export default todoSlice.reducer;
