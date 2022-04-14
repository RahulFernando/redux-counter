import { createSlice, configureStore } from '@reduxjs/toolkit';

const init = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState: init,
  reducers: {
    increment(state, action) {
      return {
        counter: action.payload
          ? state.counter + action.payload
          : state.counter + 1,
        showCounter: state.showCounter,
      };
    },
    decrement(state) {
      return {
        counter: state.counter - 1,
        showCounter: state.showCounter,
      };
    },
    toggler(state) {
      return {
        counter: state.counter,
        showCounter: !state.showCounter,
      };
    },
  },
});

const { actions } = counterSlice;
export const { increment, decrement, toggler } = actions;

// const counterReducer = (state = init, action) => {
//   if (action.type === 'INCREMENT') {
//     return {
//       counter: action.value ? state.counter + action.value : state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === 'DECREMENT') {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === 'TOGGLE') {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter,
//     };
//   }

//   return state;
// };

const store = configureStore({ reducer: counterSlice.reducer });

export default store;
