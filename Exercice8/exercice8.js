function checkPassword(mdp) {
    if (mdp.length > 9 && mdp.includes('@')) {
        return true;
    }
    else {
        return false;
    }
}

test1 = "JeSuisUnMot2Passe";
console.log(`Le mot de passe : '${test1}' contient ${test1.length} caractères et pas '@'. Est-ce un bon mot de passe ? ${checkPassword(test1)}.`);

test2 = "123456";
console.log(`Le mot de passe : '${test2}' contient ${test2.length} caractères et pas '@'. Est-ce un bon mot de passe ? ${checkPassword(test2)}.`);

test3 = "12@345";
console.log(`Le mot de passe : '${test3}' contient ${test3.length} caractères et un '@'. Est-ce un bon mot de passe ? ${checkPassword(test3)}.`);

test4 = "12345678@";
console.log(`Le mot de passe : '${test4}' contient ${test4.length} caractères et un '@'. Est-ce un bon mot de passe ? ${checkPassword(test4)}.`);

test5 = "Je suis un bon mot de passe @";
console.log(`Le mot de passe : '${test5}' contient ${test5.length} caractères et pas '@'. Est-ce un bon mot de passe ? ${checkPassword(test5)}.`);