import React, {useReducer, useState} from 'react';
import {monoalphabetic_cipher} from './Monoalphabetic.js';
import './App.css';

const formReducer = (state, event) => {
 return {
   ...state,
   [event.name]: event.value
 }
}

function App() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);

    //setTimeout(() => {
    //  setSubmitting(false);
    //}, 3000)
  }

  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }

  return(
    <div className="wrapper">
      <h1>Cipher Solver</h1>
      {submitting &&
        <div>
          Submission:
         <ul>
           {Object.entries(formData).map(([name, value]) => (
             <li>{monoalphabetic_cipher(value)}</li>
           ))}
         </ul>
        </div>
      }
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Name</p>
            <input name="name" onChange={handleChange}/>
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;