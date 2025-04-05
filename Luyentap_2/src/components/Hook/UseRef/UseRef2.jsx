import { useState, useEffect, useRef } from "react";

const UseRef2 = () => {
    const [input, setInput] = useState("");
    const count = useRef(0); // Khai báo biến count với useRef

    useEffect(() => {
        count.current = count.current + 1; // Tăng giá trị của count mỗi khi component render
    });

    return (
        <div>
            <h1>Giá trị của count là: {count.current}</h1>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <p>Giá trị input là: {input}</p>
        </div>
    )
}

export default UseRef2;