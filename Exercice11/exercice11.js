function isPangram(str) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let isIn = 0;
    for (let lettre of alphabet) {
        if (str.toLowerCase().includes(lettre)) {
            isIn++
        }
    }
    if (isIn === 26) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isPangram('The quick brown fox jumps over the lazy dog'));
console.log(isPangram('bcdefghijklmnopqrstuvwxyz'));