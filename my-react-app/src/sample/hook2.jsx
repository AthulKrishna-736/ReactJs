import { useState } from "react";

function Hook2(){

const [workout,setWorkout] = useState([])
const [userInput,setInput] = useState('')

    const addWorkouts = ()=>{
        if(userInput.trim()){
            setWorkout([...workout,userInput])
        }
    }
    const handleInput = (event)=>{
        setInput(event.target.value)
    }

    return(
        <>
        <p>real time: {userInput}</p>
        <input type="text"  onChange={handleInput}/>
        <p>exercise : {workout.join(',')}</p>
        <button onClick={()=>addWorkouts()}>Add user prefered</button>
        <button onClick={()=>addWorkouts()}>Add Squat</button>
        </>
    )
}

export default Hook2;