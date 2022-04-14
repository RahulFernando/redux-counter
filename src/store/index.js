import { createSlice, configureStore, combineReducers } from '@reduxjs/toolkit';

const counterInit = { counter: 0, showCounter: true };
const authInit = { isLogged: false };

const authSlice = createSlice({
  name: 'auth',
  initialState: authInit,
  reducers: {
    login(state) {
      return {
        ...state,
        isLogged: !state.isLogged,
      };
    },
  },
});

const counterSlice = createSlice({
  name: 'counter',
  initialState: counterInit,
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

const { actions: counterActions } = counterSlice;
const { actions: authActions } = authSlice;
export const { increment, decrement, toggler } = counterActions;
export const { login } = authActions;

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

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  counter: counterSlice.reducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
