import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [response, setResponse] = useState('')

  return (
    <div className="App">
      <header className="App-header">
        <button
          onClick={() => {
            // Make a request call
            fetch('api/hello-world').then(res => {
              // Resolve text from response
              res.text().then(text => setResponse(text))
            })
          }}
        >
          Say hello!
        </button>

        {response}

      </header>
    </div>
  );
}

export default App;
