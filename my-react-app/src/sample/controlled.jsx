import React from 'react'

class CnandUn extends React.Component{
constructor(props){
    super(props);

    this.state ={
        controlledText: ''
    }
    this.handleControl = this.handleControl.bind(this)
    this.handleUncontrol = this.handleUncontrol.bind(this)

    this.unControl = React.createRef();
}

handleControl(event){
    this.setState({
        controlledText:event.target.value
    })
}

handleUncontrol(){
    alert(`unctrolled value : ${this.unControl.current.value}`)
}

    render(){
        return(
            <div>
            <div>
                <h3>Controlled component</h3>
                <input type="text" 
                value={this.state.controlledText}
                onChange={this.handleControl}
                />
                <p>{this.state.controlledText}</p>
            </div>
            <div>
                <h3>Uncontrolled componenet</h3>
                <input type="text" ref={this.unControl} />
                <button onClick={this.handleUncontrol}>show value</button>
            </div>
           
        </div>
        )
        
    }
}


export default CnandUn;