import React, {useState} from 'react';
import {monoalphabetic_cipher} from './Monoalphabetic.js';
import {caesar_cipher} from './Caesar.js';
import './App.css';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {content: ''};
      this.message = {msg: ''};
      //this.Monoalphabetic = this.Monoalphabetic.bind(this);
      //this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
      this.setState({content: event.target.value});
    }

    Monoalphabetic = () => {
        this.setState({content: monoalphabetic_cipher(this.state.content)});
      }

    Caesar = (text) => {
        this.setState({content: caesar_cipher(this.state.content, 4)});
      };

    render() {
        return (
            <div className="App">
            <h2>Cipher Solver</h2>
            <header className="App-header">
                <label>Name: </label>
                    <br></br>
                    <input type="text"
                     onChange = {this.handleChange}
                    /><br></br>
                    <button onClick={this.Monoalphabetic}>Monoalphabetic</button>
                    <button onClick={this.Caesar}>Caesar</button> 
                    <h1>{this.state.content}</h1>              
                </header>
                </div>
        )
    }
};

export default App;