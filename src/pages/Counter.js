import React, {useState} from "react";

function Counter() {
    const [num, setNum] = useState(0);
    //num, setFunction = useState(초기값)
    
    const increase = () => {
        setNum(num+1);
    }

    const decrease = () => {
        setNum(num-1);
    }

    return (
        <div>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
            <p>{num}</p>
        </div>
    )
}

export default Counter;