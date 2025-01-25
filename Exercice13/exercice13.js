function decrementation(nbr){
    const valInit = nbr;
    const moins = Math.floor(Math.random() * 50 + 1);
    let compteur = 0;
    for (compteur = 0; nbr > 0; compteur++) {
        nbr -= moins;
    }
    console.log(`On part de ${valInit} et on décrémente de ${moins} à chaque passage. \nVérification: ${valInit} - ${compteur}x${moins} = ${valInit - compteur * moins}`)
    return compteur;
}

console.log(`Conclusion : Il faut ${decrementation(1000)} passages.`);
console.log(`Conclusion : Il faut ${decrementation(10000)} passages.`);