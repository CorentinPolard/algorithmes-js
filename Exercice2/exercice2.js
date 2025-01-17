function prixTotal(prix, nombre) {
    let taxe = 0.2;
    let prixArticle = prix + prix * taxe;
    let total = 0;
    total = prixArticle * nombre;
    return total;
}


console.log(`Le prix total de 2 articles à 10 euros (HT) vaut ${prixTotal(10, 2)} euros (TTC).`);