function ListCar (props) {
    return (
        <li>{props.id} I am a {props.car}</li>
    )
}

const List2 = () => {
    const cars = [
        {id : 1, name: "Vinfat"},
        {id : 2, name: "Toyota"},
        {id : 3, name: "Honda"},
    ]

    return (
        <div>
            <h1>List of Cars</h1>
            <ul>
                {cars.map((car) => {
                    return (
                        <ListCar key={car.id} car={car.name} id={car.id}/>
                    )
                })}
            </ul>
        </div>
    )
    
}

export default List2