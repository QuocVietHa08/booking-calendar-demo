import { create } from 'zustand';
import { createTaskSlice, TaskSlice } from './useTask';
import { createHeaderSlice, HeaderSlice} from './useHeader';


const useAppStore = create<TaskSlice & HeaderSlice>()((...a) => ({
  ...createTaskSlice(...a),
  ...createHeaderSlice(...a)
}))

export {
  useAppStore,
}