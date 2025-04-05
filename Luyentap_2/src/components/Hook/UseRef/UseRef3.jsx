import {useRef, useState, useEffect} from "react";

const UseRef3 = () => {
    const imageRef = useRef();
    const [status, setStatus] = useState(false);
    useEffect(() => {
        if (status) {
            imageRef.current.style.display = "none";
        }else {
            imageRef.current.style.display = "block";
        }
    }, [status])
    const handleClick = () => {
        setStatus(!status);
    }
    return (
        <div>
            <img ref={imageRef} src="https://hocdohoacaptoc.com/wp-content/uploads/2022/02/avata-dep-nam-2.jpg" alt="" width={"100px"} height={"100px"}/>
            <button onClick={handleClick}>Ẩn hiện ảnh</button>
        </div>
    )
}

export default UseRef3;
