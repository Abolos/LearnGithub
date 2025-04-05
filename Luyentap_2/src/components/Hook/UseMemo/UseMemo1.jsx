import { useState, useMemo } from "react";
const UseMemo1 = () => {
    const [count, setCount] = useState(0);
    const [todoCallBack, setTodoCallBack] = useState([]);

    const handleIncrement = () => {
        setCount((c) => c + 1);
    };
    
   
    const handleTodo = () => {
        setTodoCallBack((todoCallBack)=> [...todoCallBack, "Hello"])
    }

    const expensiveCount = (num) => {
        for (let i = 0; i < 100; i++) {
            for(let y =0 ; y <10000000; y++){
                num += 1;
            }
        }
        return num;
    }

    // const expensive = expensiveCount(count);

    const expensive = useMemo(() => expensiveCount(count), [count])

  

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handleIncrement}>Increment</button>

            <hr></hr>
            <h1>My List</h1>
            <button onClick={handleTodo}>Click me</button>
            <ul>
                {todoCallBack.map((item)=> {
                    return (
                        <li key={item.id}> 
                            <p>{item}</p>
                        </li>
                    )
                })}
            </ul>

            <h1>Gia tri cua expensive la : {expensive}</h1>
        </div>
    )

}

export default UseMemo1;