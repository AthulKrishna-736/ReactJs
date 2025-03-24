import { createContext, useRef, useState } from 'react';

function Counter(){
    const userContext = createContext()
    const [count, setCount] = useState(0)
    const inputRef = useRef(null)
    const handleIncrement = ()=>{
        setCount(prevCount => prevCount + 1)
    }

    const handleDecrement = ()=>{
        setCount(prevCount => prevCount - 1)
    }
    const handleInput = (event)=>{
        console.log('val: ', event.target.value)
        setCount(Number(event.target.value))
    }

    const handleRefInput = ()=>{
        console.log('ref value here', inputRef.current.value)
    }

    const handleClear = ()=>{
        inputRef.current.value = ''
        setCount((prev)=> 0)
    }

    return(
        <div>
            <input type="text" onChange={handleInput} value={count} />
            <input type="text" ref={inputRef}/>
            <p>Values: {count}</p>
            <button onClick={handleRefInput}>Ref value Display</button>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleClear}>clear all</button>
        </div>
    )
}

export default Counter