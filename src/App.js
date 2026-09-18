// import Contact from './Contact';
/* import Homepage from './Homepage';
import AboutLittleLemon from './AboutLittleLemon';
import { Routes, Route, Link } from "react-router-dom"; */

//import logo from './assets/logo copy.svg';
import React from 'react';
import './App.css';
/*import { useState } from 'react';

 import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import HomePage from './Homepage1';
 */


function App() {

const bird1 = new Audio("/bird1.mp3"); 
  const bird2 = new Audio("/bird2.mp3"); 
 
  function toggle1() { 
    if (bird1.paused) { 
      bird1.play(); 
    } else { 
      bird1.pause(); 
    } 
  }; 
 
  function toggle2() { 
    if (bird2.paused) { 
      bird2.play(); 
    } else { 
      bird2.pause(); 
    } 
  }; 
 
  return ( 
    <div> 
      <button onClick={toggle1}>Caspian Tern 1</button> 
      <button onClick={toggle2}>Caspian Tern 2</button> 
    </div> 
  );

   
}

export default App;
