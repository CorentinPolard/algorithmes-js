function construitCochon() {
    const dice = ['patte', 'queue', 'patte', 'oeil', 'oreille', 'patte'];
    let pattes = 0;
    let queue = 0;
    let yeux = 0;
    let oreilles = 0;

    let compteur = 1;
    while (pattes != 4 || queue != 1 || yeux != 2 || oreilles != 2) {
        let face = Math.floor(Math.random() * 6);
        if (dice[face] == 'patte' && pattes !== 4) {
            pattes++;
        } else if (dice[face] == 'queue' && queue !== 1) {
            queue++;
        } else if (dice[face] == 'oeil' && yeux !== 2) {
            yeux++;
        } else if (dice[face] == 'oreille' && oreilles !== 2) {
            oreilles++;
        }
        compteur++;
    }
    return compteur;
}

console.log(`Le cochon est construit en ${construitCochon()} lancés de dé.`)

let sum = 0;
for (i=0; i<100000; i++) {
    sum += (construitCochon());
}

console.log(`Pour 10 000 cochons construits, il faut ${sum} lancés de dé. \nIl faut donc, en moyenne, ${sum/100000} lancés de dé pour construire un cochon.`);