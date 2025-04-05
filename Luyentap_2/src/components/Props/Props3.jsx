function Food (props){
    return <h2>
        I like eating {props.box.name} and it costs {props.box.price} VND
    </h2>
}


const Props3 = () => {
    const food = {name: "Pizza", price: 1000}

    return ( 
        <div>
           <Food box={food}/> 
        </div>
    )
}

export default Props3