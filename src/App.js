import './App.css';
import React, { useState } from 'react';

function App() {
  const [temperature,settemperature] = useState(0)
  const [temperaturecolor,settemperaturecolor] = useState('cold')
  const increment = ()=>{
    const newtemp=temperature+1
    if (newtemp>=15){
      settemperaturecolor('hot')
    }
    else if(newtemp<15 && newtemp>=10){
      settemperaturecolor('neutral')
    }else if(newtemp<10 && newtemp>=0){
      settemperaturecolor('cold')
    }else if(newtemp<0){
      settemperaturecolor('freezing')
    }
    settemperature(newtemp)
    
  }
  const decrement = ()=>{
    const newtemp=temperature-1
    if (newtemp>=15){
      settemperaturecolor('hot')
    }
    
    else if(newtemp<15 && newtemp>=10){
      settemperaturecolor('neutral')
    }else if(newtemp<10 && newtemp>=0){
      settemperaturecolor('cold')
    }else if(newtemp<0){
      settemperaturecolor('freezing')
    }
    settemperature(temperature-1)
  }
  
  return (
  <>
    <h1>
      Color Changer according to temperature using REACT
    </h1>
  
    <div className="app-container" >
    <div className="temperature-display-container">
          <div className={`temperature-display ${temperaturecolor}`} id="app">
            {temperature}°C

      </div>
    </div>
    <div className="button-container">
    <button id="increment" onClick={increment}>+</button>
    <button id="decrement" onClick={decrement}>-</button>

    </div>

    </div>
  
  </>
  );
}

export default App;
