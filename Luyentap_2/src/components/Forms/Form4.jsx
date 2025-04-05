import { useState } from "react";

const Form4 = () => {
    const [Car, setCar] = useState("");

    const handleChange = (event) => {
        setCar(event.target.value);
    };
    
    return (
        <div>
            <select value={Car} onChange={handleChange}>
                <option value="Vinfast">Vinfast</option>
                <option value="Toyota">Toyota</option>
                <option value="Honda">Honda</option>
                <option value="Mazda">Mazda</option>
                <option value="Mercedes">Mercedes</option>
            </select>
            <h1>You selected: {Car}</h1>
        </div>
    )
}

export default Form4