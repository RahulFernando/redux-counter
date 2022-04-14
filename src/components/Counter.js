import { Component } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter);

  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: 'INCREMENT' });
  }

  const incrementByFiveHandler = () => {
    dispatch({ type: 'INCREMENT', value: 5 });
  }

  const decrementHandler = () => {
    dispatch({ type: 'DECREMENT' });
  }

  const toggleCounterHandler = () => {
    dispatch({ type: 'TOGGLE' })
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={incrementByFiveHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

// class Counter extends Component {
//   incrementHandler = () => {
//     this.props.increment();
//   }

//   decrementHandler = () => {
//     this.props.decrement();
//   }

//   toggleCounterHandler = () => {};
  
//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapsStateToProps = state => {
//   return {
//     counter: state.counter
//   };
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({ type: 'INCREMENT' }),
//     decrement: () => dispatch({ type: 'DECREMENT' })
//   }
// }

export default Counter;
