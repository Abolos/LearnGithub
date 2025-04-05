const Event1 = () => {
    const handleClick = () => {
         alert("Great shot")
    }
    return (
        <button onClick={handleClick}>Take the shot</button>
    )
}

export default Event1;