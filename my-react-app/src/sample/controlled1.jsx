import React from 'react'

class CnandUn extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            selVal:'apple'
        }
        this.checkRef = React.createRef();
        this.handleSelect = this.handleSelect.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
    }

    handleSelect(event){
        this.setState({
            selVal:event.target.value
        })
    }

    handleCheck(){
        const isChecked = this.checkRef.current.checked;
        alert(`uncontrolled checkbox is ${isChecked ? 'clicked' : 'notclicked'}`)
    }


    render(){
        return(
            <div>
                <div>
                    <h3>controlled component</h3>
                    <select value={this.state.selVal} onChange={this.handleSelect}>
                        <option value="apple">Apple</option>
                        <option value="banana">Banana</option>
                        <option value="orange">Orange</option>
                    </select>
                    <p>Selected fruit: {this.state.selVal} </p>
                </div>

                <div>
                    <h3>uncontrolled component</h3>
                    <input type="checkbox" ref={this.checkRef}/>
                    <button onClick={this.handleCheck}>Check status</button>
                </div>
            </div>
        )
    }
}

export default CnandUn;