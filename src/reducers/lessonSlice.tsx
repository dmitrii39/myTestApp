import {createSlice} from '@reduxjs/toolkit';
export const initialState = {subject: 'math1', task: 'Стр 4, упр. 24'};
const lessonSlice = createSlice({
  name: 'lessons',
  initialState,
  reducers: {
    addSubject: (state, action) => {
      state.subject = action.payload;
    },
    addTask: (state, action) => {
      state.task = action.payload;
    },
  },
});
// addLesson(state, action) {
//   const {subject} = action.payload;
//   state.push({subject});
//   console.log('LESSON', action.payload);
// },
// addTask(state, action) {
//   const {task} = action.payload;
//   state.push({task});
//   console.log('TASK', action.payload);
// },

//     removeLesson(state, action) {
//       const lesson = state.find(lesson => lesson.id === action.payload);
//       if (lesson) {
//         // console.log('LESSON');
//       }
//     },
//   },
// });

export const {addSubject, addTask} = lessonSlice.actions;

export default lessonSlice.reducer;
