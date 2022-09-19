import {configureStore} from '@reduxjs/toolkit';
import lessonSlice from './lessonSlice';
export const store = configureStore({
  reducer: {
    lessons: lessonSlice,
  },
});