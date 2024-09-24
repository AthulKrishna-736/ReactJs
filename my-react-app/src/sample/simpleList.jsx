import React from "react";
import ListItems1 from './lists'

function Simplelist(props){
  
    const {data,onAction,onLabelClick} = props;
 
    return(
        <div className='app-list'>
        {
        data.map((obj,index)=>{
            return <ListItems1
             key={index} 
             title={obj.title} 
             des={obj.des} 
             isActive={obj.isActive} 
             onLabelClick={onLabelClick}
             onDelete={()=> onAction(obj)}

             />
        })
        }
        </div>
    )
}

export default Simplelist;