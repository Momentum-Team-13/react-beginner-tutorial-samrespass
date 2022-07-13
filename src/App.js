// import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';
import ColorChangeButton from './ColorChangeButton';

function App() {
const [color, setColor] = useState('')
  return (
    <div className="App">
      <header>
      
        <div className={`react-root ${color}`}>
      <div className='centered'>
        <h1>Color Picker</h1>
        <ColorChangeButton color ='red' setColor={setColor}/>
        <ColorChangeButton color='blue' setColor={setColor}/>
        <ColorChangeButton color='yellow' setColor={setColor}/>
      </div>
    </div>
      </header>
    </div>
  );
}

export default App;
