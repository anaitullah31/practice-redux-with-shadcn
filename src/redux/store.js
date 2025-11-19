import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./features/task/taskSlice";
import todoReducer from "./features/todo/todoSlice"

export const store = configureStore({
    reducer: {
        tasks: taskReducer,
        todos: todoReducer
    }
})