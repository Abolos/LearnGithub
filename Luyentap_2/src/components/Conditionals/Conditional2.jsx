const Conditional2 = (props) => {
    const car = props.car;
    return (
        <div>
            <h1>Garage</h1>
            {car.length > 0 && 
            <h2>
               you hava {car.length} cars in your garage
            </h2>}
        </div>
    )
}

export default Conditional2;