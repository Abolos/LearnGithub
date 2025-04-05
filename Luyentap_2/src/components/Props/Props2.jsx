function Address(props){
    return(
        <h2>I love {props.add}</h2>
    )
}

function Props2(){
    return(
        <div>
            <h1>Cities I Love</h1>
            <Address add="Hà Nội"/>
            <Address add="Đà Nẵng"/>
            <Address add="Hồ Chí Minh"/>
        </div>
    )
}

export default Props2