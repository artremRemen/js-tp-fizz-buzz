const mainTitle = document.querySelector('h1');
let result;
let element;
let start = 100;
let down = 120;
const verifNbre = (start, stop)=>{
    for (let i = start; i < stop; i++) {
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
            createLi(' ', result);
        }
    }
}
const createLi = (cssClass, content) =>{
    element = document.createElement("li");
    element.setAttribute('class', cssClass);
    element.textContent = content;
    liste.insertAdjacentElement("beforeend", element);
}
document.querySelector('#fizzbuzz').remove();
let liste=document.createElement('ol');
console.log(mainTitle, liste);
liste.setAttribute('id','fizzbuzz');
liste.setAttribute('class','grid');
mainTitle.insertAdjacentElement("afterend",liste);
verifNbre(1,100);
window.onscroll = function() {
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
        verifNbre(start ,down )
        start = down;
        down+=20;
    }
}