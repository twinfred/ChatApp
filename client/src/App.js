import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('/api').then(response => response.data)
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
