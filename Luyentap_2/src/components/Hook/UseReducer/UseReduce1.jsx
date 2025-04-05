import { useReducer } from "react";

const initialTodos = [
    {
        id:1,
        title: "Abolo",
        completed: false,
    },
    {
        id:2,
        title: "GhaiA",
        completed: false,
    }
];

const reducer = (state, action) => {
    switch (action.type){
        case 'COMPLETE':
            return state.map((todo)=> {
                if (todo.id === action.id){
                    return {...todo, completed: !todo.completed}
                }else {
                    return todo
                }
            });
        default :
            return state
    }
};

const UseReducer1 = () => {
    const [todos, dispatch] = useReducer(reducer, initialTodos);
    const handleComplete = (todo) => {
         dispatch({type: 'COMPLETE', id: todo.id})
    }

    return (
        <>
          {todos.map((todo)=> {
            return (
                <div key={todo.id}>
                    <h2>{todo.title}</h2>
                    <button onClick={() => handleComplete(todo)}>Complete</button>
                    <p>Completed: {todo.completed.toString()}</p>
                </div>
            )
          })}
        </>
    )
}

export default UseReducer1;