const mainTitle = document.querySelector('h1');
let result;

const createLi = (cssClass, text)=>{
    let element = document.createElement('li');
    element.setAttribute('class',cssClass);
    element.textContent= text;
    element.insertAdjacentElement("afterbegin",grid);
}

document.querySelector('#fizzbuzz').remove();

let liste=document.createElement('ol');

liste.setAttribute('id','fizzbuzz');
liste.setAttribute('class','grid');
const grid = mainTitle.insertAdjacentElement("afterend",liste);

for (let i = 0; i < 100; i++) {
    if (i%3 === 0 && i%5 === 0) {
        result = 'fizzbuzz';
        createLi('fizzbuzz', result);
    }
    else if (i%3 === 0) {
        result = 'fizz';
        createLi('fizz', result);
    }
    else if (i%5 === 0) {
        result = 'buzz';
        createLi('buzz', result);
    }
    else{
        result = i;
        createLi('grid', result);
    }
}

