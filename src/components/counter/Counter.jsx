  
import { useDispatch, useSelector } from "react-redux";
import "./Counter.css";  
import { decCounter, incCounter, resetCounter } from "../../store/counterReducer";

const Counter = () => { 
  const count = useSelector((state)=>state.counter.count) ;
  const dispatch = useDispatch();
  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1 className="counter-counter">counter: {count}</h1>
      <div>
        <button className="counter-button positive"  onClick={() => dispatch(incCounter())}   >increase</button>
        <button className="counter-button zero"  onClick={() => dispatch(resetCounter())}  >reset</button>
        <button className="counter-button negative" onClick={() => dispatch(decCounter())}  >decrease</button>
      </div>
    </div>
  );
};

export default Counter;
