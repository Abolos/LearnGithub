import { useState } from "react";

const Hook =()=> {
    const [color, setColor] = useState("red");

    return (
        <div>
            <p>My favorite color is {color}</p>
            <div>
                <button onClick={()=> {setColor("Blue")}} >Blue</button>
                <button onClick={()=> {setColor("Green")}} >Green </button>
                <button onClick={()=> {setColor("Pink")}} >Pink</button>
                <button onClick={()=> {setColor("Black")}} >Black</button>
            </div>
        </div>
    )
}

export default Hook;