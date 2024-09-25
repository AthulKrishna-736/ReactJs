import {useState,useRef} from "react";

function Hook4(){
    const [inputVal,setVal] = useState('')
    const inputRef = useRef(null);

    const handleVal = ()=>{
        setVal(inputRef.current.value)
    }
    return(
        <>
        <input type="text" ref={inputRef}/>
        <p>this is a sample val ={inputVal}</p>
        <button onClick={handleVal}>Click me</button>
        </>
    )
}

export default Hook4;