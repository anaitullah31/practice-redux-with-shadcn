import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  task: [
    {
      id: "01",
      title: "Initialize frontend",
      description: "Create home page and routing",
      dueDate: "2025-11-10",
      isCompleted: false,
      priority: "High",
    },
  ],
};

const taskSlice = createSlice({
  name: "task",
  initialState: initialState,
  reducers: {},
});

const taskReducer = taskSlice.reducer;

export default taskReducer;
