import React from 'react'

class Sample1 extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            color:'red'
        }
        this.handleColor = this.handleColor.bind(this)
    }


    handleColor()
    {
        this.setState({
            color:'blue'
        })
    }

    render(){
        return(
            <>
            <SampleChild newColor={this.state.color}/>
            <button onClick={this.handleColor}>Change Color</button>
            </>
        )
    }
}


class SampleChild extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            color:'yellow'
        }
    }
    static getDerivedStateFromProps(nextProps,prevState){
        if(nextProps.newColor !== prevState.color){
            return{
                color: nextProps.newColor
            }
        }
        return null;
    }

    render(){
        return(
            <>
            <p style={{color:'white',backgroundColor:this.state.color}}>this is a sample paragraph</p>
            </>
        )
    }
}

export default Sample1;