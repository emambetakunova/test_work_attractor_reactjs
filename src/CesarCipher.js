class CesarCipher {

  constructor() {
    this._alphabet = null;
    this._shift = null;
  }

  setAlphabet(value) {
    this._alphabet = value
  }

  setShift(value) {
    this._shift = value
  }

  encode(plainText) {
    let encodedText = "";
    for(let i = 0; i < plainText.length; i++) {
      const letter = plainText[i];
      const index = this._alphabet.indexOf(letter);
      if (index === -1) {
        encodedText += letter;
      } else {
        const newIndex = index + this._shift;
        let newLetter = this._alphabet[newIndex];
        if (newLetter === undefined) {
          let indexFromStart = newIndex - this._alphabet.length;
          newLetter = this._alphabet[indexFromStart];

        }
        encodedText += newLetter;
      }
    }

    return encodedText
  }
}

export default CesarCipher