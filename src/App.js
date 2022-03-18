import React from 'react'
import './App.css';
import { AiOutlineLeft ,AiOutlineRight ,AiOutlineSearch} from 'react-icons/ai';
import Accordian from './Accordian';



function App() {
  return (
    <div className="App">
  <header>
    <div id='head'>
      <h1 id='journal'>Journal <sup >?</sup></h1>
      <input id='place'placeholder='Search Food,Drinks etc...'></input> <span id='slogo'><AiOutlineSearch/></span>
    </div>
    <hr></hr>
  </header>

  <div id='second'>

    <div id='calander'>
      <button id='b1'><AiOutlineLeft/></button>
      <button id='b2'>Today</button>
      <button id='b1'><AiOutlineRight/></button>
    </div>

<div id='calculation'>
  <div id='ps'>
  <p className='big'>1737</p>
  <p className='sml'>Cals Left </p>
  <p className='big'>= 1737</p>
  <p className='sml'>Goal</p>
  <p className='big'>- 0</p>
  <p className='sml'>Food  </p>
<hr id='hrf'></hr>
  <p className='big'>0</p>
  <p className='sml'>Activity</p>

  </div>
  
<p id='parg'>Learn about your personalized calorie goal</p>
</div>
  </div>

<Accordian/>

    </div>
    
  );
}

export default App;
