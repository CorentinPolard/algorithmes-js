function moyenne(tab) {
    let long = tab.length;
    if (long > 0) {
        let sum = 0;
        for (let nbr of tab) {
            sum += nbr;
        }
    let moy = sum / long;
    return `La moyenne vaut ${moy}`;
    }
    else {
        return 0;
    }
} 


test1 = [2, 18, 13, 19, 5, 8];
test2 = [0];
console.log(moyenne(test1));
console.log(moyenne(test2));