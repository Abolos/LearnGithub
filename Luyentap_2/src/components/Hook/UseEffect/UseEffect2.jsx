import { useState, useEffect } from "react";

const UseEffect2 = () => {
    const [count, setCount] = useState(0);
    const [Calculator, setCalculator] = useState(0);

    useEffect(()=>{
        const newCalculator = count * 2;
        setCalculator(newCalculator);

        return () =>{
            clearInterval(setCalculator);
        }
        
    },[count])

    return (
        <div>
            <h1>Count: {count}</h1>
            <h1>Calculator: {Calculator}</h1>
            <button onClick={()=> setCount(count + 1)}>Increase</button>
        </div>
    )
}

export default UseEffect2;