import React, {useState, createContext, useContext} from "react";

const ChangeColorContext = createContext();

export const ChangeColorContextProvider = ({children}) => {
     const [change, setChange] = useState({background: "black", color:"white"})
     
     return (
        <ChangeColorContext.Provider value={{change, setChange}} >
            {children}
        </ChangeColorContext.Provider>
     )
}
const UseContext6 = () => {
    const {change, setChange} = useContext(ChangeColorContext)

    const handleColorChangeDark = () => {
        setChange({background: "black", color: "white"})
    }

    const handleColorChangeLight = () => {
        setChange({background: "gray", color: "black"})
    }
    return (
        <>
          <div style={{backgroundColor: change.background,
            padding: "20px",
            marginTop:"20px",
            marginRight:"auto",
            marginLeft: "auto"
          }}>
            <h1 style={{color: change.color,}}>Change Background Color</h1>
            <div style={{textAlign: "center"}}>
                <button style={{
                    margin:"10px",
                    padding: "10px",
                    outline: "none",
                    border: "none",
                    backgroundColor: "green",
                    fontSize: "15px",
                    fontWeight: "bold",
                    color: "white",
                    }} onClick={handleColorChangeDark}>Dark</button>
                <button  style={{
                    margin:"10px",
                    padding: "10px",
                    marginBottom: "10px",
                    outline: "none",
                    border: "none",
                    backgroundColor: "red",
                    fontSize: "15px",
                    fontWeight: "bold",
                    color: "white",
                }} onClick={handleColorChangeLight}>Light</button>
            </div>
          </div>
        </>
    )
}

export default UseContext6;