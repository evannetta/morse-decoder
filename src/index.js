const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let result = "", letter = "";
  for (let i = 0, counter = 1; i < expr.length; i += 2, counter++) {
    let symbol = expr.slice(i, i + 2);
    if (symbol === "**") {
      result += " ";
      counter = 0;
      i += 8;
      continue;
    } else {
      if (symbol === "00") {
        continue;
      }
      if (symbol === "10") {
        letter += ".";
      }
      if (symbol === "11") {
        letter += "-";
      }
    }
    if (counter === 5) {
      result += MORSE_TABLE[letter];
      counter = 0;
      letter = "";
      continue;
    }
  }
  return result;
}

module.exports = {
  decode
}