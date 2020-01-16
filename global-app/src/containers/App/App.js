import React from 'react';
import './App.css';
import TimeTasks from './TimeTasks/TimeTasks';
import TimeState from '../../states/TimeState';

function App() {
  return (
    <div className="">
      <header className="">
        <h1>Let's motivate you !</h1>
      </header>
      <TimeTasks timeState={new TimeState()}></TimeTasks>
    </div>
  );
}

export default App;
