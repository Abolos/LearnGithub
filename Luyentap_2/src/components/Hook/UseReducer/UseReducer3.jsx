import React, {useReducer} from "react";

const initialName = [
    {
        id: 1,
        name: "Nguyen Ngoc Huyen",
        age: 20,
        completed : false,
    },
    {
        id: 2,
        name: "Tran The Quan",
        age: 22,
        completed : false,
    },

    {
        id: 3,
        name: "Nguyen Minh Hoang",
        age: 23,
        completed : false,
    }
]

const reducer = (state, action) => {
    switch (action.type) {
         case 'COMPLETE':
            return state.map((name) => {
                if (name.id === action.id) {
                    return {...name, completed: !name.completed}
                } else {
                    return name
                }
            });
        default:
            return state
    }
}

const UseReducer3 = () => {
    const [names, dispatch] = useReducer(reducer, initialName);
    const handleComplete = (name) => {
        dispatch({type: 'COMPLETE', id: name.id})
    }

    return (
        <div>
            {names.map((name) => {
                return (
                    <div key={name.id}>
                        <h2>{name.name}</h2>
                        <p>{name.age}</p>
                        <button onClick={() => handleComplete(name)}>Complete</button>
                        <p>Completed: {name.completed.toString()}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default UseReducer3;