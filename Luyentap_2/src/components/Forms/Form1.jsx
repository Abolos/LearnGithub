import React, {useState} from "react";

const Form1 = () => {
    const [name, setName] = useState("");
    return (
        <div>
            <form action="">
               <p>Enter your name: {name}</p>
               <input type="text" value={name} onChange={(e) => {setName(e.target.value)}} />
            </form>
        </div>
    )
}

export default Form1;