import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

const App = props => {
  const [personsState, setPersonState] = useState({
    persons : [
        {name: 'Rakesh', age:35},
        {name: 'Ramesh', age:34},
        {name: 'Mahesh', age:24}
      ]
    })
  
  const [otherState, setOtherState] = useState('some other value');

  const nameChangeHandler = () => {
    setPersonState({
      persons: [
        {name: 'Rakesh Yadav', age:35},
        {name: 'Ramesh', age:34},
        {name: 'Mahesh', age:25}
      ]
    });
  }

  const nameChangedHandler = (event) => {
    setPersonState({
      persons: [
        {name: 'Rakesh', age:35},
        {name: event.target.value, age:34},
        {name: 'Mahesh', age:24}
      ]
    });
  }

  const style = {
    backgroundColor: 'white',
    padding: '10px',
    border: '1px solid #ccc',
    cursor: 'pointer'
  };

  return (
    <div className="App">
      <h1>Hi, this is hello from react app.</h1>
      <button style={style} onClick={nameChangeHandler}>Change Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} changeHandler={nameChangedHandler}/>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} click={nameChangeHandler} changeHandler={nameChangedHandler}>I love biking</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} changeHandler={nameChangedHandler}/>
    </div>
  );
}

export default App;