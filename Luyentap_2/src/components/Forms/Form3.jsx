import { useState, useEffect } from "react";

const Form3 = () => {
    const [ListName, setListName] = useState([]);
    const [account, setAccount] = useState({});
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setAccount({...account, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setListName([...ListName, account]);
        setAccount({});
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="Name" value={account.Name || ""} 
                   placeholder="Name" onChange={handleChange} />
                <input type="text" name="Age" value={account.Age || ""}
                   placeholder="Age" onChange={handleChange} />
                <button type="submit">App</button>
            </form>

            <ul>
                {ListName.map((item, index) => (
                    <li key={index}>
                        <h2>{item.Name}</h2>
                        <p>{item.Age}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Form3;