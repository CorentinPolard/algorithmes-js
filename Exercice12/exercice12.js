function valeurScrabble(str) {
    const pointsScrable = [
        [1, "A", "E", "I", "O", "U", "L", "N", "R", "S", "T"], 
        [2, "D", "G"], 
        [3, "B", "C", "M", "P"], 
        [4, "F", "H", "V", "W", "Y"], 
        [5, "K"], 
        [8, "J", "X"], 
        [10, "Q", "Z"]
    ];

    let points = 0;

    for (lettre of str) {
        for (tab of pointsScrable) {
            if (tab.includes(lettre.toUpperCase())) {
                points += tab[0]
            }
        }
    }

    return points
}

console.log(`Le mot 'pomme' devrait valoir 11 points au Scrabble. Résultat : ${valeurScrabble('pomme')}.`);
console.log(`Le mot 'zebre' devrait valoir 16 points au Scrabble. Résultat : ${valeurScrabble('zebre')}.`);