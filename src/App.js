import React, { Component } from 'react';
import './App.css';
/* use uppercase names to differentiate from JSX tags */
import Person from './Person/Person';

/* components names by convention srart with uppercase */
class App extends Component {
  /* state (reserved word) only available by components extending Component */
  /* to set data to be used */
  /* if state changes, rerender */
  /* PATTERN: state manipulation only in containers like App  */
  state = {
    persons: [
      { name: 'Tatu', age: 32 },
      { name: 'Jomo', age: 51 },
      { name: 'Malaika', age: 28 }
    ]
  }
  
  /* convention: use [action]Handler name to indicate that it is an event handler */
  switchNameHandler = (newName) => {
    // DO NOT DO ThiS this.state.persons[1].name = 'Kenyatta';
    
    /* setState will merge existing state with what is set */
    /* will update only the overridden state attributes */
    /* only updates on state and props will update the DOM */
    /* "this" keyword refers to class becauseof ES7 method syntax */
    this.setState({
      persons:
      [
        { name: newName, age: 32 },
        { name: 'Tatu', age: 51 },
        { name: 'Kenyatta', age: 68 }
      ]
    });
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons:
      [
        { name: 'Toto', age: 32 },
        /* event.target should be the input into which we type */
        { name: event.target.value, age: 51 },
        { name: 'Tatu', age: 68 }
      ]
    });
  }

  render = () => {
    /* inline styles, scoped to the component in which used */
    const style = {
      /* this is a representation of CSS in JS */
      backgoroundColor: 'aqua',
      font: 'inherit',
      border: '1px solid black',
      padding: '8px',
      cursor: 'pointer'
    };


    /* use () to write multiline JSX */
    return (
      /* only one root element */
      <div className="App">
        <h1>Florian is building another React App!</h1>
        {/* do NOT use parenthesis because will execute immediately when React renders */}
        {/* the onclick event is the one triggering execution NOT the coder !! */}
        {/* to pass arguments when calling an event handler use bind() */}
        <button onClick={this.switchNameHandler.bind(this, 'MAUALI')}
                style={style}>
                Change name
        </button>
        {/* "this" refers to the class compo */}
        <Person name={this.state.persons[0].name} 
                age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name}
                age={this.state.persons[1].age}
                /* passing a method to compo that does not have access to state handlin */
                /* pass a reference to event handler as property of compo */
                /* another way to pass arguments when event handling, function decla */
                click={() => this.switchNameHandler('KUKUTANA')} 
                changed={this.nameChangeHandler}/>
        <Person name={this.state.persons[2].name}
                age={this.state.persons[2].age}>
          Toyo ni rafaki wangu
        </Person>
      </div>
    );
    /* return React.createElement('div',{className: 'App'}, 
          React.createElement('h1', null, 'This is a react element!' )) */
  }
}

export default App;
