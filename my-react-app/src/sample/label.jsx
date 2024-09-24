import React from 'react'
import './Label.css'

function Label(){
    return <span className='fn'>this is function label</span>
}

class List extends React.Component{
    render(){
        const props = this.props;
        const style = props.isActive ? {background:'green'} : {background:'orange'}
        return (<>
        
        <span 
         className='cl' 
         onClick={()=>{
            props.onAction(props.isActive ? 'active' : 'non-active');
         }}
         style={style}>
            {props.isActive ? 'Active' : 'Notactive'}
            </span>

        <label 
        className='delete' 
        onClick={props.onDelete}>
            Delete
            </label>
        </>)
    }
}

export {Label,List};

