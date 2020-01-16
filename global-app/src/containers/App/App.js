import React from 'react';
import './App.css';
import TimeTasks from './TimeTasks/TimeTasks';
import TimeStore from '../../states/TimeStore';

function App() {
  return (
    <div className="">
      <header className="">
        <h1>Let's motivate you !</h1>
      </header>
      <TimeTasks store={new TimeStore()}></TimeTasks>
    </div>
  );
}

export default App;
