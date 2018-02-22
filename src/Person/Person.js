import React from 'react';

/* need to import css file because not included by  default until build */
/* webpack handle the injection of the styles into rendered HTML */
import './Person.css'

/* this is a stateless functional component */
/* you should prefer stateless components to class compo because more predictable */
/* MOST PARTS OF APP SHOULD NOT MODIFY STATE */
/* by default React passes arg called "props" which is object w all component properties */
const person = (props) => {

    /* to execute dynamic content use {} */
    /* use props attributes to add dynamic content when calling component */
    /* props are set from outside the component */
    return (
        <div className="Person">

            {/* can pass methods as property which might change state in another compo */}
            {/* in JSX, event name use camelCase, unlike in HTML */}
            <p onClick={props.click}>Mimi ni {props.name}, nina miaka {props.age} </p>
            
            {/* children is reserved name: any elements between opening & closing tags */}
            {/* elements passed between tags when using component outside */}
            <p>{props.children}</p>

            {/* onChange handler triggered when value in input changes */}
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    );
}

export default person;