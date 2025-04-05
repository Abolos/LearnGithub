import { useCallback, useState } from "react";
import TodoCallBack1 from "./TodoCallBack1";
const UseCallBack1 = () => {
    const [count, setCount] = useState(0);
    const [todoCallBack, setTodoCallBack] = useState([]);

    const handleIncrement = () => {
        setCount((c) => c + 1);
    };
    
   
    // const handleTodo = () => {
    //     setTodoCallBack((todoCallBack)=> [...todoCallBack, "Hello"])
    // }

   const handleTodo = useCallback(()=>{
     setTodoCallBack((todoCallBack)=> [...todoCallBack, "Hello"])
   }, [todoCallBack])

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handleIncrement}>Increment</button>

            <hr></hr>
            <TodoCallBack1 todoCallBack={todoCallBack} handleTodo={handleTodo} />
        </div>
    )

}

export default UseCallBack1;