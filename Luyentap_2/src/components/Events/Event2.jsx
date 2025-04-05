
function Event2() {
    const Props = (message) => {
        alert(message)
    }
    return (
        <button  onClick={()=>Props("Toi yeu em")}>Take the shot</button>
    )
}

export default Event2