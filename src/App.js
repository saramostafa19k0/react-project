import logo from './logo.svg';
import { useState } from 'react';
import './App.css';


function Headers() {
  return <h1>sara</h1>;
}

function App() {
  const [count, setCount] = useState(0);
  return(
  <>
  <h1>Current number: {count}</h1>;
  <button onClick={() => setCount(count + 1)}>Increment</button>;
  <button onClick={() => setCount(count - 1)}>Decrement</button>;
  </>
  );


   
}

export default App;
