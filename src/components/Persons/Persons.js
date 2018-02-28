import React, { PureComponent } from 'react';
import Person from './Person/Person'

class Persons extends PureComponent {
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

       // No #shouldComponentUpdate when extending PureComponent
      /*   shouldComponentUpdate(nextProps, nextState) {
                console.log('[UPDATE Persons.js] inside #shouldComponentUpdate \n', 
                        nextProps, nextState);

                // returns true because update using IMMUTABILITY (to avoid side effects)
                //      hence not same object reference
                return nextProps.persons !== this.props.persons ||
                        nextProps.clicked !== this.props.clicked ||
                        nextProps.changed !== this.props.changed;
        } */


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
                                          index={index} 
                                          age={person.age}
                                          clicked={() => this.props.clicked(index)}
                                          key={person.id} 
                                          changed={(event) => this.props.changed(event, person.id)}/>
                                );
                            }
                        );
        }
}

export default Persons;