import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

interface IInitialize {
  tasks: ITask[];
  filter: "All" | "High" | "Medium" | "Low";
}

const initialState: IInitialize = {
  tasks: [
    {
      id: "9027q59793485796734",
      title: "Front-end developer",
      description: "Need a middle range front end developer.",
      priority: "High",
      isCompleted: false,
      dueDate: "12 july 2025",
    },
  ],
  filter: "All",
};

type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority">;

const createTask = (taskData: DraftTask): ITask => {
  return { id: nanoid(), isCompleted: false, ...taskData };
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<DraftTask>) => {
      const taskData = createTask(action.payload);
      state.tasks.push(taskData);
    },
    toggleCompletedState: (state, action: PayloadAction<string>) => {
      // console.log(action);

      state.tasks.forEach((task) =>
        task.id === action.payload
          ? (task.isCompleted = !task.isCompleted)
          : task
      );
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    updateFilter: (
      state,
      action: PayloadAction<"All" | "High" | "Low" | "Medium">
    ) => {
      state.filter = action.payload;
    },
  },
});

export const { addTask, toggleCompletedState, deleteTask, updateFilter } =
  taskSlice.actions;

export const selectTasks = (state: RootState) => {
  const filter = state.todo.filter;

  if (filter === "Low") {
    return state.todo.tasks.filter((task) => task.priority === "Low");
  } else if (filter === "Medium") {
    return state.todo.tasks.filter((task) => task.priority === "Medium");
  } else if (filter === "High") {
    return state.todo.tasks.filter((task) => task.priority === "High");
  } else {
    return state.todo.tasks;
  }
};

export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export default taskSlice.reducer;
