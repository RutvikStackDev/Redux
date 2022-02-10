import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../Store/store";

const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter);
  // console.log("Counter :", counter);
  const visible = useSelector((state) => state.visible);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(3));
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.visibility());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {visible && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}> + </button>
        <button onClick={increaseHandler}> Increase by 3 </button>
        <button onClick={decrementHandler}> - </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Visibility</button>
    </main>
  );
};

export default Counter;
