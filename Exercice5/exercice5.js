function suppDoublon(tableau) {
    for (let val1 in tableau) {
        for (let val2 in tableau) {
            if (val1 !== val2 && tableau[val1] === tableau[val2]) {
                tableau.splice(val2, 1);
            }
        }
    }
    return tableau
}



let test1 = [1, 2, 3, 3, 3, 4, 5, 5];
console.log(`Le tableau ${test1} devient ${suppDoublon(test1)}.`);

let test2 = [1, 2, 3, 4, 2, 5, 6, 7, 9, 9, 5];
console.log(`Le tableau ${test2} devient ${suppDoublon(test2)}.`);
