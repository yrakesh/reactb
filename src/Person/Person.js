import React from 'react';
import './Person.css'

const person = (props) => {
    return (
        <p className="Person" onClick={props.click}>I'm {props.name} and my age is {props.age} {props.children}
            <input type="text" onChange={props.changeHandler} value={props.name} />
        </p>
    );
}

export default person;