function afficheMessage(str) {
    if (str.length > 15) {
        return `${str.slice(0, 15)}...`;
    }
    else {
        return str;
    }
}

let test1 = "Lorem quisque class vestibulum";
console.log(afficheMessage(test1));

let test2 = "Coucou";
console.log(afficheMessage(test2));

