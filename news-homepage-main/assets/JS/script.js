
function sideBarOn() {
    Header.style.display = 'Block';
    Shadow.style.display = "Block";
    Close.style.display = 'Block';
}

function sideBarOff() {
    Header.style.display = 'none';
    Shadow.style.display = "none";
    Close.style.display = 'none';
}

const Open = document.querySelector('.open');
const Header = document.querySelector('.header');
const Shadow = document.querySelector('.shadow');
const Close = document.querySelector('.close');


Open.addEventListener('click', sideBarOn);
Close.addEventListener('click', sideBarOff);