import { StateCreator } from "zustand";

export interface HeaderSlice {
  mode: 'light' | 'dark';
  toggleMode: () => void;
}

export const createHeaderSlice: StateCreator<HeaderSlice> = (set) => ({
  mode: 'light',
  toggleMode: () => set((state) => ({
    mode: state.mode === 'light' ? 'dark' : 'light'
  }))
});
