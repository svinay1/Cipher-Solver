import React, {useState} from 'react';
import {monoalphabetic_cipher} from './Monoalphabetic.js';
import {caesar_cipher} from './Caesar.js';
import './App.css';

class App extends React.Component {
  state = {
    content: ''
}

Monoalphabetic = () => {
    this.setState({content: monoalphabetic_cipher("HELLO")});
};

Caesar = () => {
    this.setState({content: caesar_cipher("HELLO",4)});
};

render() {
    return (
        <>
            <div>
                <button onClick={this.Monoalphabetic}>Monoalphabetic</button>
                <button onClick={this.Caesar}>Caesar</button>               
            </div>
            <h1>{this.state.content}</h1>
        </>
    )
}
};

export default App;