import { useState, useEffect } from "react";

const UseEffect3 = () => {
    const[timer, setTimer] = useState(0);
    const [status, setStatus] = useState(false);

    useEffect(() => {
        let interval = null;
        if (status) {
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer + 1);
            }, 1000);
        } else if (!status && timer !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    },[status])

    return (
        <div>
            <h1>Timer: {timer}</h1>
            <button onClick={() => setStatus(!status)}>{status ? "Pause" : "Start"}</button>
            <button onClick={() => setTimer(0)}>Reset</button>
        </div>
    )
}

export default UseEffect3;