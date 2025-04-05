import React, { useRef } from 'react';

const UseRef1 = () => {
    const inputRef = useRef(null); // Tạo một ref

    const focusInput = () => {
        if (inputRef.current) {
            inputRef.current.focus(); // Truy cập và focus vào phần tử DOM
            inputRef.current.value="Tranquan";
            inputRef.current.style.backgroundColor="red";
        }
    };

    return (
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={focusInput}>Focus Input</button>
        </div>
    );
};

export default UseRef1;