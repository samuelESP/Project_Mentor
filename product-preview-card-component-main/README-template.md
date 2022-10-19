# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Screenshot

[Mobile](https://github.com/samuelESP/Project_Mentor/blob/main/product-preview-card-component-main/images/Screenshots/Screenshot_1.jpg);

[Desktop](https://github.com/samuelESP/Project_Mentor/blob/main/product-preview-card-component-main/images/Screenshots/Screenshot_2.jpg).



## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned

 I had a hard time trying to make things right with the Tag **picture**. So I decided to try something new, so I used two images, while one of them is display: Block and the other is display: none.



```html
<div class="img">

    <picture>

          <img src="images/image-product-desktop.jpg" alt="Image Product Desktop" class="gone">

          <img src="images/image-product-mobile.jpg" alt="" class="mobile">

    </picture>

</div>
```
```css

.img .mobile{ /*Mobile in desktop resolution*/
    display: none;
}
.img .mobile{/*Mobile in own resolution*/
        width: 100%;
        display: block;
    }

    
.img .gone{/*Desktop in mobile resolution*/
        display: none;
    }/*Desktop is the primary resolution*/
```


### Continued development

As I had problems with the **picture** tag I will train a little more about it and responsive images.


## Author

- Linkedin - [Samuel Espíndola](https://www.linkedin.com/in/samuel-e-14100a19b/)
- Frontend Mentor - [@samuelESP](https://www.frontendmentor.io/profile/samuelESP)
- Twitter - [@SamuelBraSam](https://www.twitter.com/SamuelBraSam)


