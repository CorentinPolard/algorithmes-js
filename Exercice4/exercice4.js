function prixFinal(prix, pourcentage) {
    return prix + prix * pourcentage * 0.01;  
}

prix1 = 100;
pourcentage1 = 80;
console.log(`Le prix final de ${prix1} euros augmenté de ${pourcentage1}% est ${prixFinal(prix1, pourcentage1)} euros.`);

prix2 = 200;
pourcentage2 = 25;
console.log(`Le prix final de ${prix2} euros augmenté de ${pourcentage2}% est ${prixFinal(prix2, pourcentage2)} euros.`);

prix3 = 86;
pourcentage3 = 50;
console.log(`Le prix final de ${prix3} euros augmenté de ${pourcentage3}% est ${prixFinal(prix3, pourcentage3)} euros.`);

