# Purpose

This README will help me find something specific that is inside my repository.
When I run into a question in the future, about something I've already done, I can go back to this README and look for the correct folder to help me.

## Validator

[validator](https://github.com/samuelESP/Project_Mentor/tree/main/ping-coming-soon-page-master)


Used CSS/HTML/JavaScript

Make a validator just using JAvaScript properties

```JS

const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/; //Validator for email
const campos = document.querySelectorAll('.required'); //Input
const span = document.querySelectorAll('.errorMsg');//Span(error Menssasge)



function setError(index){
    campos[index].style.border = '2px solid hsl(354, 100%, 66%)';
    campos[index].style.color = 'hsl(354, 100%, 66%)';
    span[index].style.display = 'block';
}

function removerError(index){
    campos[index].style.border = '2px solid #12e607';
    span[index].style.display = 'none';
    campos[index].style.color = '#12e607';
}



function emailValidator() {
    if(!emailRegex.test(campos[0].value)){
        setError(0);
    }else{
        removerError(0)
    }//since the input email gonna be the only input i gonna use, he has to be my campos[0], but in the future, if i wanna make another input i can use campos[1], just need to use his class as .required
}

```

```HTML
<div class="middle">

      <input type="text" class="email border required" placeholder="Your email adress.." oninput="emailValidator()">

      <span class="errorMsg">Please Provide a valid email address</span>

      <button class="btn border" type="submit">Notify Me</button>

    </div>
```

1.  When I give my input a value, it will do a check; if my input doesn't match my emailReger it throws me into an error function, if it matches then it removes my error.

2. In both functions, they will use styles straight to the doom tree, changing the styles of the Span property.

<br><br>

## remove and add properties

[Remove and ADD](https://github.com/samuelESP/Project_Mentor/tree/main/article-preview-component-master)


Used CSS/HTML/JavaScript

Make the button be changed to another one when selected, and when it is deselected back to normal.


```JS
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



const button = document.querySelector('.share')//default button

const tooltip = document.querySelector('.tooltipContainer')//social midia

const buttonWhite = document.querySelector('.imgSelection')//select button 

tooltip.addEventListener('click', ClickOnTollTip)//event when click on the `social midia window`


button.addEventListener("click", changeStyle);//event when click on the button default

buttonWhite.addEventListener("click", changeStyleBack);//event when click on the select button 
```

```HTML

<img class="imgSelection" src="./images/icon-shareWhite.svg" alt="Icon Share White" ><!--Default button-->
<img class="share" src="images/icon-share.svg" alt="Icon Share"><!--Button Select-->

<section class="tooltipContainer" ><!--Social Midia, should apper when button is selected, and desapper when button is default-->

          <section class="showTooltip">

            <section class="text">
              <p>SHARE</p>
            </section>

            <section class="socialMedia" id="popup">
              <img src="./images/icon-facebook.svg" alt="facebook icon" width="24" height="30">
              <img src="./images/icon-twitter.svg" alt="twitter icon" width="30" height="30">
              <img src="./images/icon-pinterest.svg" alt="pinterest icon" width="30" height="30">
<!--And, when i click on it should disappear as well-->
            </section>

          </section>

        </section>
```

1. When I click on the default button, it will be replaced by a button that is hidden with display none, and it will also launch a small window with social media;

2. If I click on the button (selected) it will close the window and will change the button to the default again.

3. If I decide to click on the social media window, it will close the window and replace the button with the default one.

<br><br>

## sidebar

Used CSS/HTML/JavaScript

Make a sidebar menu. The idea is to make a sidebar that can expand when is click on the button, and disappear when clicks on the button X:


## HTML
```html
<!--Lista/menu-->
<div class="header"><!--default= display: none-->
  <ul class="nav_list">
    <li><a href="#">Home</a></li>
    <li><a href="#">New</a></li>
    <li><a href="#">Popular</a></li>
    <li><a href="#">Trendia></li>
    <li><a href="#">Categories</a></li>
  </ul>
</div>
<!--sombra do HTML-->
  <div class="shadow"></div>
<!--Butons-->
<div class="icon_menu">

    <img class="open" src="assets/images/icon-menu.svg" alt="icon-menu" style="height: 25px;width: 32px;"><!--Open the side Bar-->

    <div class="close"><!--default= display: none-->
        <img  src="assets/images/icon-menu-close.svg" alt="icon-menu-close" style="height: 25px;width: 32px;"><!--Close the side Bar-->
    </div>

</div>
```
## CSS

```CSS
/*That was the first time i learn about: transform, animation and transition. And i love it S2 */
@keyframes sidebar{
    from{
        opacity: 0;
        transform: translateX(100%);
    }to{
        opacity: 1;
        transform: translateX(0);
    }/*So the starting position(from) of the sidebar is outside my document window, which should have a 0.4-second animation to appear(to), when called, in my window*/
}

.icon_menu .close{
    display: none;
    position: absolute;
    z-index: 100;
    top: 0;
}
.nav_list{
    position: fixed;
    z-index: 99;
    top: 0;
    right: 0;
    bottom: 0;
    left: 27%;
    padding-top: 7rem;
    padding-left: 1.1rem;
    background:hsl(0, 0%, 100%);
    animation: sidebar .4s;
}

.nav_list li{
    list-style-type: none;
    font-size: 1.2rem;    
    padding-bottom: 30px;
}

.nav_list a{
    text-decoration: none;
    color: #000;
}

.shadow{
    display: none;
    position: fixed;
    background-color: rgba(0,0,0,.5);
    width: 100%;
    height: 100%;
    background-size: cover;
    top: 0;
    left: 0;
}
```
## JS

```js
//Nothing special here
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
```

1. When I click on my `open` button, it will call the function inside my JS that will put my sidebar, my shadow and my `close` button as display: block;

2. When I click on my `close` button it does the exact opposite.