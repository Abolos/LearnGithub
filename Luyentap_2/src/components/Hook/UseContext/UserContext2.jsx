import React, { useState, useContext, createContext } from "react";

const UserContext = createContext(); // Thêm dấu ngoặc đơn để tạo context

const UserProvider = ({ children }) => {
    const [user, setUser] = useState("Tran Quan"); // Tạo state để lưu trữ dữ liệu
    return (
        <UserContext.Provider value={{ user, setUser }}> // Cung cấp dữ liệu cho các component con
            {children}
        </UserContext.Provider>
    )
} // Tạo provider để cung cấp dữ liệu cho các component con

const UseContext2 = () => { // Sửa tên component
     const { user, setUser } = useContext(UserContext);
     return (
        <div>
            <h1>Initial name: {user}</h1> // Sửa "intinial" thành "Initial"
            <button onClick={() => setUser("Ngoc Huyen")}>Change name</button>
        </div>
     )
}

// Xuất UserProvider cùng với UseContext2
export { UserProvider, UseContext2 };