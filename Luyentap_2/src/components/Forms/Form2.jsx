import { useState } from "react";

const Form2 = () => {
    const [name, setName] = useState("");
    const [EnterName, setEnterName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // Ngăn chặn hành động mặc định của form (tải lại trang)
        setEnterName(name); // Cập nhật giá trị EnterName với giá trị name
        setName(""); // Xóa giá trị trong ô nhập sau khi gửi
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
               <h1>Enter your name: <em style={{color: "red"}}>{EnterName}</em></h1>
               <p>
                  <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/> 
                  <button type="submit">Submit</button>
               </p>
            </form>
        </div>
    )
}

export default Form2;