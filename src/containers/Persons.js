import React, { Component } from 'react';
import { connect } from 'react-redux'

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {
    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onAddPerson} />
                {this.props.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onDeletePerson(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        persons : state.persons,
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onAddPerson : (person) => dispatch({type :'ADDPERSON', payload :person }),
        onDeletePerson : (id) => dispatch({type : 'DELETEPERSON', payload : {id : id}})
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Persons);