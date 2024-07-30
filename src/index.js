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

const BINARY_TO_MORSE = {
    '11': '-',
    '10': '.'
}

const SPACE_SYMBOL = '**********';

function decode(expr) {
    return expr.split(SPACE_SYMBOL)
        .map(el =>
            el.match(/.{10}/g).map(
                letter => MORSE_TABLE[convertToMorse(letter)]
            ).join(''))
        .join(' ');
}

function convertToMorse(str) {
    return str.match(/.{2}/g).map(x => BINARY_TO_MORSE[x] || '').join('');
}


module.exports = {
    decode
}