import React from 'react'

class Cnsquare extends React.Component{
    constructor(props){
        super(props);
        this.state={
            number:0,
            bgColor:'green',
            bColor:'white'
        }
        this.handleInc = this.handleInc.bind(this);
        this.unInput = React.createRef();
        this.color = React.createRef();
        this.p = React.createRef();

        this.handleAlert= this.handleAlert.bind(this)
    }

    componentDidMount(){
        console.log('compondent mounted')
        setTimeout(()=>{
            console.log('settimeout worked')
            this.setState((state)=>{
                return{
                    number:state.number + 10,
                }
            })
        },3000)
    }                       
    
    shouldComponentUpdate(nextProps,nextState){
        console.log('check if val is changed')
        return this.state.number !== nextState.number;
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.number != this.state.number){
            console.log(`count has been updated to val ${this.state.number}`)
        }
    }

    componentWillunmount(){
        alert('this component had been unmounted successfully')
    }

    handleInc(){
       this.setState((state)=>{
        return{
            number:state.number+1,
            bgColor:state.number%2==0 ? 'blue' : 'red',
        }
       })
    }

    handleAlert(){
        const val = this.unInput.current.value;
        this.color.current.style.backgroundColor = 'yellow'
        this.p.current.innerHTML = `${val}`;
        // alert(val)
    }

    render(){
        const {number} = this.state;
        return(
            <div>
                <h3 style={{color:'white', backgroundColor: this.state.bgColor}}>controlled component</h3>
                <p>Number is =  {number}</p>
                <p>Square is = {number*number}</p>
                <button onClick={this.handleInc}>Increment</button>
                <div>
                    <h3>uncontrolled component</h3>
                    <p ref={this.color}>sample dom node or element</p>
                    <input type="text" ref={this.unInput} />
                    <p style={{backgroundColor:this.state.bColor}} ref={this.p}>this is a sample = {}</p>
                    <button onClick={this.handleAlert}>update the value this value</button>
                </div>
            </div>
        )
    }
}

export default Cnsquare;