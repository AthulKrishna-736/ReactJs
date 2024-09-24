import { useState,useEffect } from "react";

function Hook3(){

    const [count,setCount] = useState(0)

    useEffect(()=>{
        console.log(`u just clicked this ${count}`)
    })

    const increment = ()=>{
        setCount(count + 1);
    }

    return(
        <>
        <p>you clicked {count}</p>
        <button onClick={increment}>click here</button>
        </>
    )
}

export default Hook3;