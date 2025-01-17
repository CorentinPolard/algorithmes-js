function etatEau(temperature) {
    let etat = "";
    if (temperature <= 0) {
        etat = "solide"
    } else if (temperature <= 100) {
        etat = "liquide"
    } else {
        etat = "gazeux"
    }
    return `L'eau est en état ${etat}.`
}

console.log("A -10 degré :" + etatEau(-10));
console.log("A 0 degré :" + etatEau(0));
console.log("A 75 degré :" + etatEau(75));
console.log("A 101 degré :" + etatEau(101));