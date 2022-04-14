import { createStore } from "redux";

const init = { counter: 0, showCounter: true }

const counterReducer = (state = init, action) => {
    if (action.type === 'INCREMENT') {
        return {
            counter: action.value ? state.counter + action.value : state.counter + 1,
            showCounter: state.showCounter
        }
    }
    if (action.type === 'DECREMENT') {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        }
    }

    if (action.type === 'TOGGLE') {
        return {
            counter: state.counter,
            showCounter: !state.showCounter
        }
    }

    return state;
}

const store = createStore(counterReducer);

export default store;