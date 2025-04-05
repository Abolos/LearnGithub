import { useReducer } from "react";


const initialStudent = [
    {
        id: 1,
        name: "John",
        age: 20,
        enrolled: false,
    },

    {
        id: 2,
        name: "Jane",
        age: 21,
        enrolled: false,
    },

    {
        id: 3,
        name: "Alice",
        age: 22,
        enrolled: false,
    }

]

const reducer = (state, action ) => {
    switch (action.type) {
        case 'ENROLL_STUDENT':
            return state.map((student)=>{
                if(student.id === action.id){
                    return {...student, enrolled: !student.enrolled}
                }else {
                    return student
                }
            })
        default:
            return state
    }
}

const UseReducer2 = () => {
    const [students, dispatch] = useReducer(reducer, initialStudent);

    const handleClick =(students) =>{
        dispatch({type: 'ENROLL_STUDENT', id: students.id})
    }

    return (
        <>
          <h1>Students</h1>
          <div>
            {students.map((student) => {
                return (
                    <div key={student.id}>
                        <h2>{student.name}</h2>
                        <h3>{student.age}</h3>
                        <h3>{student.enrolled.toString()}</h3>
                        <button onClick={()=>handleClick(student)}>Enrolled confirm</button>
                    </div>
                )
            })}
          </div>
        </>
    )
}

export default UseReducer2;