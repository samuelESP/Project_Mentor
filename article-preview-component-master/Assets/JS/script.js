

function changeStyle(){
    tooltip.style.display = 'block';
    button.style.display ='none';
    buttonWhite.style.display ='Block'
}

function changeStyleBack(){
    tooltip.style.display = 'none';
    button.style.display ='Block';
    buttonWhite.style.display ='none';

}

function ClickOnTollTip() {
    tooltip.style.display = 'none';
    button.style.display ='Block';
    buttonWhite.style.display ='none';
}



const button = document.querySelector('.share')
const tooltip = document.querySelector('.tooltipContainer')
const buttonWhite = document.querySelector('.imgSelection')
tooltip.addEventListener('click', ClickOnTollTip)

button.addEventListener("click", changeStyle);
buttonWhite.addEventListener("click", changeStyleBack);


/*Alternative
button.addEventListener('click', () => {
    tooltip.style.display = 'block';
});

tooltip.addEventListener('click', () => {
    tooltip.style.display = 'none';
})

const button = document.querySelector('.share')
const tooltip = document.querySelector('.tooltipContainer')
}); */