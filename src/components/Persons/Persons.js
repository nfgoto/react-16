import React, { Component } from 'react';
import Person from './Person/Person'

class Persons extends Component {
        constructor(props) {
                super(props);
                console.log('[Persons.js] inside #constructor \n', props); 
        }
            
        componentWillMount() {
                console.log('[Persons.js] Inside #componentWillMount');
        }
            

        componentDidMount() {
                console.log('[Persons.js] inside #componentDidMount');
        }


        componentWillReceiveProps(nextProps) {
                console.log('[UPDATE Persons.js] inside #componentWillReceiveProps', nextProps);
        }


        shouldComponentUpdate(nextProps, nextState) {
                console.log('[UPDATE Persons.js] inside #shouldComponentUpdate \n', 
                        nextProps, nextState);

                // returns true because we create new persons array when upadting state
                //      hence not same object reference
                return nextProps.persons !== this.props.persons;
        }


        componentWillUpdate(nextProps, nextState) {
                console.log('[UPDATE Persons.js] inside #componentWillUpdate \n', 
                nextProps, nextState);        
        }


        componentDidUpdate() {
                console.log('[UPDATE Persons.js] inside #componentDidUpdate \n');
        }


        render() {
                console.log('[Persons.js] inside #render');
                return this.props.persons.map((person, index) => {
                        return  (
                                  <Person name={person.name}  
                                          age={person.age}
                                          click={() => this.props.clicked(index)}
                                          key={person.id} 
                                          changed={(event) => this.props.changed(event, person.id)}/>
                                );
                            }
                        );
        }
}

export default Persons;