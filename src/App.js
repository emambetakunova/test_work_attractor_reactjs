import React, {Component} from 'react';

import './App.css';

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const shift = 3;

class App extends Component {
  state = {
    message: '',
    result: ''
  };

  inputChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  cipher = () => {
    const plainText = this.state.message;
    let encodedText = "";
    for(let i = 0; i < plainText.length; i++) {
      const letter = plainText[i];
      const index = alphabet.indexOf(letter);
      if (index === -1) {
        encodedText += letter;
      } else {
        const newIndex = index + shift;
        let newLetter = alphabet[newIndex];
        if (newLetter === undefined) {
          let indexFromStart = newIndex - alphabet.length;
          newLetter = alphabet[indexFromStart];

        }
        encodedText += newLetter;
      }
    }

    this.setState({result: encodedText})
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
        <button onClick={this.cipher}>Encrypt</button>
        <p>Result: </p>
        <span className="boxResult">{this.state.result}</span>
      </div>
    )
  }
}

export default App;
