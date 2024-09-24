import React from 'react'

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:props.name,
            count:props.count
        };
        this.increaseCount = this.increaseCount.bind(this)
        this.decreaseCount = this.decreaseCount.bind(this)
    }

     increaseCount(){
        this.setState(function(state){
            return {
                count:state.count+1,
                name:"nigga"
            };
        })
    }
    decreaseCount(){
        this.setState((state)=>{
            return{
            count:state.count-1,
            name:"old nigga"
            }
           
        })
    }

    render(){
        let username = this.state.name;
        let counter = this.state.count;
        return (<div>
            <h1>hello world</h1>
            <h2>it is {username}</h2>
            <h3>count = {counter}</h3>
            <button onClick={this.increaseCount}>+</button>
            <span> </span>
            <button onClick={this.decreaseCount}>--</button>
        </div>
        )
    }
}

export default Clock;