function yams() {
    const dice = [];
    const sortedDice = []
    // let compte1 = 0;
    // let compte2 = 0;
    // let compte3 = 0;
    // let compte4 = 0;
    // let compte5 = 0;
    // let compte6 = 0;

    const compteurs = [0, 0, 0, 0, 0, 0];
    for (i = 0; i < 5; i++) {
        let roll = Math.floor(Math.random() * 6 + 1);
        dice.push(roll);
        sortedDice.push(roll);
        if (roll == 1) {
            compteurs[0]++;
        } else if (roll == 2) {
            compteurs[1]++;
        } else if (roll == 3) {
            compteurs[2]++;
        } else if (roll == 4) {
            compteurs[3]++;
        } else if (roll == 5) {
            compteurs[4]++;
        }
        else {
            compteurs[5]++;
        }
    }

    let yams = 'Non';
    let square = 'Non';
    let full = 'Non';
    let brelan = 'Non';
    let gsuite = 'Non';
    let psuite = 'Non';

    if (compteurs.includes(5)) {
        yams = 'Oui';
    }
    if (compteurs.includes(4)) {
        square = 'Oui';
    }
    if (compteurs.includes(3) && compteurs.includes(2)) {
        full = 'Oui';
    }
    if (compteurs.includes(3)) {
        brelan = 'Oui';
    }
    let sum = 0;
    for (roll of dice)  {
        sum += roll;
    }

    sortedDice.sort();
 
    // // Ne fonctionne pas pour les petites suites
    for (roll1 in sortedDice) {
        for (roll2 in sortedDice) {
            if (roll1 != roll2 && sortedDice[roll1] == sortedDice[roll2]) {
                sortedDice.splice(roll2, 1);
            }
        }
    }
    let comp = sortedDice.join('');
    if (comp == '12345' || comp == '23456') {
        gsuite = 'Oui';
    }
    if (comp.includes('1234') || comp.includes('2345') || comp.includes('3456')) {
        psuite = 'Oui';
    }

    console.log(sortedDice)
    let resultat = ` ${dice}
    \nEst ce que c'est un Yatzhee : ${yams}. 
    \nEst ce que c'est un Square : ${square}.
    \nEst ce que c'est un Full : ${full}.
    \nEst ce que c'est un Brelan : ${brelan}.
    \nEst ce que c'est une Grande suite : ${gsuite}.
    \nEst ce que c'est une Petite suite  : ${psuite}.`;

    return resultat;
}

console.log(yams());