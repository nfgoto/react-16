import React from 'react';
import classes from './Cockpit.css'


// every property on props object should be given a value when using component
const cockpit = (props) => {
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;    
    }
    

    /* dynamic styling */
    const assignedClasses = [];
    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.appTitle}</h1>
            <p className={assignedClasses.join(' ')}>It really works !</p>

            <button onClick={props.clicked}
                    className={btnClass}>
                    Toggle People
            </button>
        </div>
    );
};

export default cockpit;