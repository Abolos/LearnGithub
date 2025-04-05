import { memo } from "react";

const TodoCallBack1 = ({todoCallBack, handleTodo}) => {
     return (
        <div>
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
        </div>
     )
}

export default memo(TodoCallBack1);