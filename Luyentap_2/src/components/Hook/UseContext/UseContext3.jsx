import { useState, useContext, createContext } from "react";

const ColorContext = createContext(); // Tạo context cho màu sắc

const ColorProvider = ({ children }) => {
    const [color, setColor] = useState("red");

    return (
        <ColorContext.Provider value={{ color, setColor }}>
          {children}
        </ColorContext.Provider>
    )
}

const UseContext3 = () => { 
    const { color, setColor } = useContext(ColorContext); 
    return (
        <div>
            <h2>Color: {color}</h2> 
            <button onClick={() => setColor("blue")}>Change to blue</button> 
            <button onClick={() => setColor("green")}>Change to green</button> 
            <button onClick={() => setColor("yellow")}>Change to yellow</button> 
            <button onClick={() => setColor("purple")}>Change to purple</button> 
        </div>
    )
}

export { ColorProvider, UseContext3 }; 