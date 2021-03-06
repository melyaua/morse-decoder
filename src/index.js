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
    // Разбиваем строку на массив по 10 элементов
    let arr = [];
    for (let i=0; i < expr.length; i += 10) {
        arr.push(expr.substr(i, 10));
    }

    // Перебираем каждый элемент массива
    let str = '';
    for (let i of arr) {
        if (i == '**********') {
            // Пробел добавляем к выходящей строке
            str += ' ';
        } else {
            let line = i.split('').join('');
            // Удаляем нули в начале строки
            line = line.replace(/00/ig,'');
            // Преобразовываем каждую пару цифр из элемента массива в . или -
            let currSymbol = '';
            for (let j=0; j< line.length; j += 2) {
                currSymbol += (line.substr(j, 2) == '10') ? '.' : '-';
            }
            // Добавляем к результату значение из основной таблицы
            str += MORSE_TABLE[currSymbol];
        }
    }
    return str;
}

module.exports = {
    decode
}