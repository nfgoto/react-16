import React, { Component } from 'react';
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
    }

    render() {
        console.log('[Person.js] Inside render()');
        return (
            <Aux>
    
                {/* can pass methods as property which might change state in another compo */}
                {/* in JSX, event name use camelCase, unlike in HTML */}
                <p onClick={this.props.clicked}>Mimi ni {this.props.name}, nina miaka {this.props.age} </p>
                
                {/* children is reserved name: any elements between opening & closing tags */}
                {/* elements passed between tags when using component outside */}
                <p>{this.props.children}</p>
    
                {/* onChange handler triggered when value in input changes */}
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </Aux>
        );
    }

}

export default withClass(Person, classes.Person);