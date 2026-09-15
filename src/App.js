import Contact from './Contact';
import Homepage from './Homepage';
import AboutLittleLemon from './AboutLittleLemon';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
      <nav>
        <Link to="/" className='nav-itme'>Homepage</Link>
        <Link to="/about" className='nav-itme'>About Little Lemon</Link>
        <Link to="/contact" className='nav-itme'>Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<AboutLittleLemon />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );

   
}

export default App;
