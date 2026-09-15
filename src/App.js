// import Contact from './Contact';
/* import Homepage from './Homepage';
import AboutLittleLemon from './AboutLittleLemon';
import { Routes, Route, Link } from "react-router-dom"; */
import './App.css';
import { useState } from 'react';

import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import HomePage from './Homepage1';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  return (
    <div>
      {
        isLoggedIn ? (
          <div>
            <HomePage />
            <LogoutButton logout={logout} />
          </div>
        ) : (
          <LoginButton login={login} />
        )
      }
    </div>
  );

   
}

export default App;
