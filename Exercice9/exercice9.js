function addAndRepeat(str) {
    let newStr = "";
    let decompo = str.split('');
    let voyelles = ["a", "e", "i", "o", "u", "y", "A", "E", "I", "O", "U", "Y"];
    console.log(decompo)
    for (let car of decompo) {
        if (voyelles.includes(car)){
            newStr += `${car}fe${car}`;
        }
        else {
            newStr += car;
        }
    }
    return newStr;
}

let test1 = "voyelle";
console.log(test1, addAndRepeat(test1));

let test2 = "chat";
console.log(test2, addAndRepeat(test2));

let test3 = "apepipo";
console.log(test3, addAndRepeat(test3));