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