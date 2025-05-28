import { useState } from "react";
import "./counter.css";

const Counter = () => {
    const [counter, setCounter] = useState<number>(0);

    function increment() {
        setCounter(counter + 1);
    }

    function decrement() {
        // setCounter(counter - 1);
        setCounter( (prev) => prev-1) //similar but we can get prev value
    }
    return (
        <div>
            <button onClick= {() => {setCounter(counter+1)}}> Increment </button>
            <button onClick={decrement}> Decrement </button>
            <div> Counter: {counter}</div>
        </div>
    );
};

export default Counter;
