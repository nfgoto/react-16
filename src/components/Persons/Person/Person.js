import React, { Component } from 'react';
import classes from './Person.css'


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
            <div className={classes.Person}>
    
                {/* can pass methods as property which might change state in another compo */}
                {/* in JSX, event name use camelCase, unlike in HTML */}
                <p onClick={this.props.click}>Mimi ni {this.props.name}, nina miaka {this.props.age} </p>
                
                {/* children is reserved name: any elements between opening & closing tags */}
                {/* elements passed between tags when using component outside */}
                <p>{this.props.children}</p>
    
                {/* onChange handler triggered when value in input changes */}
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </div>
        );
    }

}

export default Person;