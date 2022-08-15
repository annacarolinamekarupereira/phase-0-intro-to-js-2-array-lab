// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(){
    cats.push('Ralph');
}

function  destructivelyPrependCat(){
    cats.unshift('Bob');
}

function  destructivelyRemoveLastCat(){
    cats.pop('Bob');
}

function   destructivelyRemoveFirstCat(){
    cats.shift('Bob');
}

function appendCat(){

    const copyOfCats = cats.slice();
    copyOfCats.push('Broom'); 
    return copyOfCats;
}

function prependCat(){

    const copyOfCats = cats.slice();
    copyOfCats.unshift('Arnold'); 
    return copyOfCats;
}

function removeLastCat(){

    const copyOfCats = cats.slice(0, cats.length - 1);
    return copyOfCats;
}

function removeFirstCat(){

    const copyOfCats = cats.slice(1);
    return copyOfCats;
}




