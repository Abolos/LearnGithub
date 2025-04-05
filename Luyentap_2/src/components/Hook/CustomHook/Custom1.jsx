import { useEffect, useState } from "react";

const Custom1   = () => {
    const [datas, setDatas] = useState([])
   
    useEffect (()=> {
        fetch('https://jsonplaceholder.typicode.com/todos')
       .then(response => response.json())
       .then(json => setDatas(json))
    },[])

    const handleClick = (id)=> {
        setDatas(prev => prev.map(
            data => data.id === id ?{...data, completed: !data.completed} : data
        ))
    }

    return (
        <div>
            <ul>
                {datas.map((data)=>{
                    return(
                        <li key={data.id} 
                          style={{padding:"20px", margin:"20px", backgroundColor:"#FFE4B5", listStyle: "none"}}
                        >
                            <h3>{data.title} <span 
                             style={{padding:"5px", color:"white", backgroundColor:"gray", borderRadius:"5px"}}
                            >{data.completed.toString()}</span>
                            <span onClick={()=> handleClick(data.id)}
                                   style={{
                                    padding:"5px", color:"white", backgroundColor:"green", borderRadius:"5px",
                                    marginLeft: "40px", cursor: "pointer"
                                   }}
                                >Update</span>
                            </h3>
                        </li>
                    )
                })}
            </ul>
        </div>
    )

}

export default Custom1;