import React from 'react';
import Person from './Person/Person'

// every property on props object should be given a value when using component
const persons = (props) => props.persons.map((person, index) => {
        return  (
                  <Person name={person.name}  
                          age={person.age}
                          click={() => props.clicked(index)}
                          key={person.id} 
                          changed={(event) => props.changed(event, person.id)}/>
                );
            }
        );

export default persons;