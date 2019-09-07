import React, {Component} from 'react';
import "./CesarCipher"
import './App.css';
import CesarCipher from "./CesarCipher";

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

class App extends Component {
  state = {
    message: '',
    shift: '',
    result: ''
  };

  inputChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  resetAll = () => {
    this.setState({
      message: '',
      shift: '',
      result: ''
    })
  };

  cipher = () => {
    const plainText = this.state.message;
    const shift = Number(this.state.shift || 0);
    const cipher = new CesarCipher();
    cipher.setAlphabet(alphabet);
    cipher.setShift(shift);
    const result = cipher.encode(plainText);

    this.setState({result: result})
  };

  render() {
    return (
      <div className="App">
        <p>Enter message:</p>
        <input
          required
          type="text"
          name="message"
          placeholder="Enter message"
          value={this.state.message}
          onChange={this.inputChangeHandler}
        />
        <input
          required
          type="number" min="1"
          name="shift"
          placeholder="Enter shift"
          value={this.state.shift}
          onChange={this.inputChangeHandler}
        />
        <button onClick={this.cipher}>Encrypt</button>
        <button onClick={this.resetAll}>Reset</button>
        <p>Result: </p>
        <span className="boxResult">{this.state.result}</span>
      </div>
    )
  }
}

export default App;
