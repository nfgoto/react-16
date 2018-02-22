import React, { Component } from 'react';

import classes from './App.css';
/* use uppercase names to differentiate from JSX tags */
import Person from './Person/Person';


/* components names by convention srart with uppercase */
class App extends Component {

  /* state (reserved word) only available by components extending Component */
  /* to set data to be used */
  /* if state changes, React rerenders component */
  /* PATTERN: state manipulation only in containers (class-based component) like App  */
  state = {
    persons: [
      { id: 'igf', name: 'Tatu', age: 32 },
      { id: 'etre',name: 'Jomo', age: 51 },
      { id: 'cu-',name: 'Malaika', age: 28 }
    ],
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    /* ALWAYS update states in an IMMUTABLE way (create copy ) ! */

    /* creating a copy of persons array using spread operator */
    const persons = [...this.state.persons];

    /*  
      slice() with no args returns a full copy of array
      const persons = this.state.persons.slice();
    */

    /* remove element from array */
    persons.splice(personIndex,1);
    /* updating the state */
    this.setState({persons});
  }


  nameChangeHandler = (event, id) => {
    /* identify the person on which event fired */
    const personIndex = this.state.persons.findIndex((person) => {
      return person.id === id;
    });

    /* retrieve the entire person previous state */
    const person = {
      ...this.state.persons[personIndex],
    };

    /* event.target point to the input into which we type */
    /* override existing state of the property */
    person.name = event.target.value;

    /* update array of persons with new state of individual person */
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    /* apply new state to rerender */
    this.setState({persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons:!this.state.showPersons});
  }

  /* When React rerenders, everything in render() gets executed */
  render = () => {
    
    let persons = null;
    let btnClass = '';

    /* Conditional renderin of component */
    if (this.state.showPersons) {
      persons = (
        <div>
        {/* Convert the array of persons state in valid JSX */}
        {
          this.state.persons.map((person, index) => {
              return  (
                        <Person name={person.name}  
                                age={person.age}
                                click={() => this.deletePersonHandler(index)}
                                /* key attribute to allow React to keep track of elements to
                                    rerender only those that changed */
                                key={person.id} 
                                /* manage events dynamically */
                                changed={(event) => this.nameChangeHandler(event, person.id)}/>
                      )
            })
        }
        </div>
      );

      btnClass = classes.Red;
    }

    /* dynamic styling */
    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    /* use () to write multiline JSX */
    return (
      /* only one root element */
      <div className={classes.App}>
        <h1>Florian is building another React App!</h1>
        <p className={assignedClasses.join(' ')}>It really works !</p>

        {/* do NOT use parenthesis because will execute immediately when React renders */}
        {/* the onclick event is the one triggering execution NOT the coder !! */}
        {/* to pass arguments when calling an event handler use bind() */}
        <button onClick={this.togglePersonsHandler}
                className={btnClass}>
                Toggle People
        </button>

        {persons}
      
      </div>
    );
  }
}

export default App
