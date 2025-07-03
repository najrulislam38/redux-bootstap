import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface IInitialize {
  tasks: ITask[];
  filter: "All" | "High" | "Medium" | "Low";
}

const initialState: IInitialize = {
  tasks: [
    {
      id: "0813409054723",
      title: "Initialize frontend",
      description: "Create Home page and routing",
      dueDate: "2025-07-03",
      isCompleted: false,
      priority: "High",
    },
    {
      id: "08134090547234",
      title: "Git init",
      description: "Create a repository",
      dueDate: "2025-07-03",
      isCompleted: false,
      priority: "Low",
    },
  ],
  filter: "All",
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};

export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export default taskSlice.reducer;
