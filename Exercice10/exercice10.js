function reverseString(str) {
    let newStr = str.split('').reverse().join('');
    return newStr;
}

let test1 = 'test';
console.log(test1, reverseString(test1), reverseString(reverseString(test1)));

let test2 = '! ruojnoB';
console.log(test2, reverseString(test2), reverseString(reverseString(test2)))