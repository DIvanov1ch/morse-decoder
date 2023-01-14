const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  let decoded = '';
  for (let i = 0, j = 10; j <= expr.length; i += 10, j += 10) {
    let encoded = expr.slice(i, j)
      .replace(/^0+/, "")
      .replace(/1{2}/g, '-')
      .replace(/10/g, '.')
      .replace(/\*{10}/g, ' ');

    for (let [key, value] of Object.entries(MORSE_TABLE)) {
      if (key === encoded) {
        encoded = value;
      }
    }
    decoded += encoded;
  }
  return decoded;
}

module.exports = {
  decode
}