import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css'
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';


class Person extends Component {
    constructor(props){
        super(props);
        console.log('[Person.js] inside constructor(props)', props); 
    }
    
    componentWillMount(){
            console.log('[Person.js] Inside componentWillMount()');
    }
        

    componentDidMount(){
            console.log('[Person.js] inside componentDidMount()');
            // focus on first person because focuses on last element rendered
            if (this.props.index === 0) {
                this.inputElement.focus();
            }
    }

    render() {
        console.log('[Person.js] Inside render()');
        return (
            <Aux>
                {/* in JSX, event name use camelCase, unlike in HTML all lowercase */}
                <p onClick={this.props.clicked}>Mimi ni {this.props.name}, nina miaka {this.props.age} </p>
                <p>{this.props.children}</p>
    
                {/* onChange handler triggered when value in input changes */}
                <input  ref={(inputRef) => { this.inputElement = inputRef }}
                        type="text"
                        onChange={this.props.changed}
                        value={this.props.name} />
            </Aux>
        );
    }

}

Person.propTypes = {
    clicked: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(Person, classes.Person);