import React, { PureComponent } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


/* components names by convention srart with uppercase */
class App extends PureComponent {
  constructor(props){
    super(props);
    console.log('[App.js] inside constructor(props)', props);
    this.state = {
      persons: [
        { id: 'igf', name: 'Tatu', age: 32 },
        { id: 'etre',name: 'Jomo', age: 51 },
        { id: 'cu-',name: 'Malaika', age: 28 }
      ],
      showPersons: false
    }; 
  }


  componentWillMount(){
    console.log('[App.js] Inside componentWillMount()');
  }


  componentDidMount(){
    console.log('[App.js] inside componentDidMount()');
  }
  

  /* state (reserved word) only available by components extending Component */
  /* PATTERN: state manipulation only in containers (class-based component) like App  */
  // ES6 syntax to initialize state
  /* state = {
    persons: [
      { id: 'igf', name: 'Tatu', age: 32 },
      { id: 'etre',name: 'Jomo', age: 51 },
      { id: 'cu-',name: 'Malaika', age: 28 }
    ],
    showPersons: false
  } */

// No #shouldComponentUpdate when extending PureComponent
/*   shouldComponentUpdate(nextProps, nextState) {
      console.log('[UPDATE App.js] inside #shouldComponentUpdate \n', 
              nextProps, nextState);

      // checking if state modified 
      return nextState.persons !== this.state.persons ||
              nextState.showPersons !== this.state.showPersons;
  } */


  componentWillUpdate(nextProps, nextState) {
      console.log('[UPDATE App.js] inside #componentWillUpdate \n', 
      nextProps, nextState);        
  }


  componentDidUpdate() {
      console.log('[UPDATE App.js] inside #componentDidUpdate \n');
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
    this.setState({showPersons:!this.state.showPersons});
  }


  /* When React rerenders, everything in render() gets executed */
  render = () => {    
    console.log('[App.js] inside render()');
    let persons = null;

    /* Conditional renderin of component */
    if (this.state.showPersons) {
      persons = <Persons  persons={this.state.persons}
                          clicked={this.deletePersonHandler}
                          changed={this.nameChangeHandler} />;
    }

    return (
      /* only one root element */
      <div className={classes.App}>
        <button onClick={() => this.setState({showPersons: true}) }>Show People</button>
        <Cockpit  appTitle={this.props.appTitle}
                  persons={this.state.persons}
                  showPersons={this.state.showPersons}
                  clicked={this.togglePersonsHandler} />
        {persons}      
      </div>
    );
  }
}

export default App
