import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(function() {
    fetch('/api').then(response => response.json())
    .then(response => {
      console.log(response.message);
      setMessage(response.message);
    });
  }, []);

  return (
    <div className="App">
      { !message ? "Loading..." : message}
    </div>
  );
}

export default App;
