import React, {useState} from 'react';
import {monoalphabetic_cipher} from './Monoalphabetic.js';
import {caesar_decipher} from './Caesar.js';
import './App.css';

function App() {

    const[text, setText] = useState('');

    const handleChange=(event)=>{
      setText(event.target.value);
    }

    const handleSubmit=(event)=>{
      alert(monoalphabetic_cipher(text));
      event.preventDefault();
    }

    return (
        <div className="App">
        <h2>Cipher Solver</h2>
        <header className="App-header">
          <form onSubmit={ (e) => {handleSubmit(e)}}>
            <label>Name: </label>
            <input type="text" value={text} required onChange={(e) => {handleChange(e)}} />
            <br></br><br></br><button>Monoalphabetic</button>
            <br></br><button>Caesar</button>
          </form>
        </header>
        </div>
      )
    };

    export default App;