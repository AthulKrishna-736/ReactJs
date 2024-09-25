import React,{useState} from 'react'

function Hook1(){
    const [count, setCount] = useState(0);

  const increment = ()=>{
        setCount(count +1)
    }
   const decrement =()=>{
        setCount(count -1)
    }
    return(
        <div>
            <p>You clicked {count} times</p>
            <button onClick={increment}>Click me</button>
            <button onClick={decrement}>- value</button>
        </div>
    )
}

export default Hook1;