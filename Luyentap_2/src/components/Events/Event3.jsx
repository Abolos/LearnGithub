const Event3 = () => {

    const handleClick = (a,b) => {
        alert(b.type)
    }
    return (
        <div>
               <button onClick={(event) => handleClick("Great",event)}>Click me</button>
        </div>
    )
}

export default Event3;