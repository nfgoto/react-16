import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Aux';


// every property on props object should be given a value when using component
const cockpit = (props) => {
    let btnClass = classes.Button;

    if (props.showPersons) {
        // aggregating styles
        btnClass = [classes.Button, classes.Red].join(' ');    
    }
    

    /* dynamic styling */
    const assignedClasses = [];
    if (props.persons.length <= 2) {
        assignedClasses.push(classes.blue);
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <Aux>
            <h1>{props.appTitle}</h1>
            {/*  */}
            <p className={assignedClasses.join(' ')}>It really works !</p>

            <button onClick={props.clicked}
                    className={btnClass}>
                    Toggle People
            </button>
        </Aux>
    );
};

export default cockpit;