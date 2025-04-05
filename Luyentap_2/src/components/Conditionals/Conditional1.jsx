function FoodballGoal () {
    return (
        <h1>Messi!</h1>
    )
}

function MediaGoal () {
    return (
        <h1>Ronaldo!</h1>
    )
}


const Conditional1 = (props) => {
    const propsText = props.text;
    if (propsText === "Goal"){
        return <FoodballGoal />;
    } else if (propsText === "Media") {
        return <MediaGoal />;
    }
}


export default Conditional1;