
function ListCar (props) {
    return (
        <li>I am a {props.car}</li>
    )
}

const List1 = () => {
    const cars = ["Vinfat", "Toyota", "Honda"];

    return (
        <div>
            <h1>List of Cars</h1>
            <ul>
                {cars.map((car, index)=> {
                    return (
                        <ListCar key={index} car={car} />
                    )
                })}
            </ul>
        </div>
    )
    
}

export default List1