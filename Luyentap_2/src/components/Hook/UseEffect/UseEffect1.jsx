import { useEffect, useState } from "react";

const UseEffect1 = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(()=> {
            setCount((count) => count + 1);
        }, 1000);
    },[])


    return (
        <div>
            <h1>Count: {count}</h1>
        </div>
    )
}

export default UseEffect1;