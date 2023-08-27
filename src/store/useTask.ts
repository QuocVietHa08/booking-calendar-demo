import { StateCreator } from "zustand";

export interface TaskSlice {
  tasks: number;
  addTask: () => void;
}

export const createTaskSlice: StateCreator<TaskSlice> = (set) => ({
  tasks: 0,
  addTask: () => set((state) => ({ tasks: state.tasks + 1 })),
});
