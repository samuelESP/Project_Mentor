function ChangeMode(){
    chageStyle();
    changeText();

}

function chageStyle() {
    body.classList.toggle(WhiteMode);
    titulo1.classList.toggle(WhiteMode);
    titulo2.classList.toggle(WhiteMode);
    elementos.forEach(function(elemento){
        elemento.classList.toggle(WhiteMode);
    });
    elementosBottom.forEach(function(elemento){
        elemento.classList.toggle(WhiteMode);
    });
    todosH2.forEach(function(elemento){
        elemento.classList.toggle(WhiteMode);
    });
    todosOt.forEach(function(elemento){
        elemento.classList.toggle(WhiteMode);
    });
}

function changeText(){
    const LightMode = 'Light Mode';
    const DarkMode = 'Dark Mode';
    if(body.classList.contains(WhiteMode)){
        changeNome.innerHTML = LightMode
        return
    }
    changeNome.innerHTML = DarkMode
}; 

const changeNome = document.querySelector('.nome');
const todosOt = document.querySelectorAll('.ot');
const todosH2 = document.querySelectorAll('h2');
const titulo1 = document.querySelector('.title1');
const titulo2 = document.querySelector('.title2');
const elementosBottom = document.querySelectorAll('.elementbt');
const elementos = document.querySelectorAll('.element');
const body = document.querySelector('.corpo');

const switcher = document.querySelector('.bola');

const WhiteMode = 'white';

switcher.addEventListener('click', ChangeMode);