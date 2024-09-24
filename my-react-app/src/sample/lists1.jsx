import React from "react";
import Tools from './tools.jsx'
import Simplelist from './simpleList.jsx'
import './list.css'

let arr = [{
    id:1,
    title:"Appointment for October",
    des:"This patient booked October",
    isActive:false
},{
    id:2,
    title:"Appointment for November",
    des:"This patient booked November",
    isActive:true
},{
    id:3,
    title:"Appointment for December",
    des:"This patient booked December",
    isActive:false
},{
    id:4,
    title:"Appointment for Upcoming months",
    des:"Slots for future appointments",
    isActive:false
}];

class  ListItems extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            data:arr,
            activeState:'all'
        }
        this.onListChange = this.onListChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(dltItem){
        console.log("delete",dltItem)
        const newList = this.state.data.filter((element)=>element.id !== dltItem.id)

        this.setState((state)=>{
            return{
                data:newList,
            }
        })
    }

    handleLabelClick = (arg)=>{
        this.setState(
            {
                activeState:arg
            }
        )
    }

    onListChange(event){
        const value = event.target.value;
      this.setState({
            activeState:value
      })
    }

    render(){
        const {data,activeState} = this.state;

        const newList = data.filter((item)=>{
            if(activeState === 'all'){
                return true;
            }
            if(activeState === 'active'){
                return item.isActive === true;
            }
            if(activeState === 'non-active'){
                return item.isActive === false;
            }
            return false;
        })

        return(
            <Tools labelValue={activeState} onAction={this.onListChange}>
                <Simplelist data={newList} onAction={this.handleDelete} onLabelClick={this.handleLabelClick} />
            </Tools>
        )
    }
}
export default ListItems;


