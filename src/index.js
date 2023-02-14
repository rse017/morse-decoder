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
    let result = '';
    for (let i = 0; i < expr.length; i = i + 10) {
        let el = expr.slice(i, i + 10);
        if (el === '**********') {
            result += ' '; 
            continue;
        } 
        let letter = '';
        for (let k = 0; k < el.length; k = k + 2) {
            let num = el.slice(k, k+2);     
            if (num === '10'){
                letter += '.';
            } else if (num === '11') {
                letter += '-';
            }
        }
        result += MORSE_TABLE[letter];
    }
    return result;
}
module.exports = {
    decode
}