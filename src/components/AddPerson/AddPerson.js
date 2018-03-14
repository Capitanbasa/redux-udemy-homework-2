import React ,{ Component } from 'react';
import './AddPerson.css';
class AddPerson extends Component{
    state = {
        name : '',
        age : null
    }
    nameChangeHandler = (event) => {
        this.setState({name : event.target.value})
    }
    ageChangeHandler = (event) => {
        this.setState({age : event.target.value})
    }
    render(){
        return (
            <div className="AddPerson">
                <input 
                    type="text"
                    placeholder="Your Name"
                    onChange={this.nameChangeHandler}
                    value={this.state.name}/>
                <input
                    type="number"
                    placeholder="Your Age"
                    onChange={this.ageChangeHandler}
                    value={this.state.age}/>
                <button onClick={() => this.props.personAdded(this.state)}>Add Person</button>
            </div>
        );
    }
}

export default AddPerson;