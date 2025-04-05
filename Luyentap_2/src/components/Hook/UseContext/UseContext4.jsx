import { useState, createContext, useContext } from "react";

const FullnameContext = createContext();

export const  FullnameProvider = ({ children }) => {
    const [fullname, setFullname] = useState("Tran Thi Kim Chi");

    return(
        <FullnameContext.Provider value={{ fullname, setFullname }}>
            {children}
        </FullnameContext.Provider>
    )
}

const UseContext4 = () => {
    const {fullname, setFullname} = useContext(FullnameContext)
    console.log(fullname)
    return (
        <div>
            <h2>Choose Your name: {fullname}</h2>
            <button onClick={()=>setFullname("Tran Quan")}>Tran Quan</button>
            <button onClick={()=>setFullname("Ngoc Huyen")}>Ngoc Huyen</button>
            <button onClick={()=>setFullname("Kim Lam")}>Kim Lam</button>
        </div>
    )
     
}

export default  UseContext4;