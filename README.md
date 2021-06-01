# Frontend Mentor - Interactive pricing component solution

This is a solution to the [Interactive pricing component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Use the slider and toggle to see prices for different page view numbers

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JavaScript

### What I learned

I learned how to make a cool switch and range slider. I also learned a little about the content attribute in css.

```html
<div class="billing-row">
  <p class="monthly-billing">Monthly Billing</p>
  <label for="monthly" class="switch">
    <input type="checkbox" name="monthly" id="monthly" class="" />
    <span class="slider-switch round"></span>
  </label>
  <p class="yearly-billing">Yearly Billing</p>
  <span class="percentage">-25% <span class="discount-word"></span></span>
</div>
<hr />
```

```css
.discount-word::before {
  content: "discount";
}
.slider-container {
  display: grid;
  margin: 20px 0 60px 0;
  grid-template-columns: 1fr 1fr;
  row-gap: 50px;
  grid-template-areas:
    "pageviews pricingrow"
    "slider slider";
  justify-items: center;
}
```

```js
document.getElementById("monthly").oninput = function (e) {
  let discount = document.getElementById("monthly").checked;
  let val = document.getElementById("rangeSlider").value;
  setText(val, discount);
};
document.getElementById("rangeSlider").oninput = function (e) {
  let discount = document.getElementById("monthly").checked;
  let val = e.target.value;
  setBar(val);
  setText(val, discount);
};
```

### Continued development

I'll focus on making cool sliders and switches.

### Useful resources

- [CSS Switch](https://www.w3schools.com/howto/howto_css_switch.asp) - This helped me make my cool switch component.

## Author

- Website - [Landon Schlangen](https://www.landonschlangen.com)
- Frontend Mentor - [@Landon345](https://www.frontendmentor.io/profile/Landon345)
- LinkedIn - [Profile](https://www.linkedin.com/in/landon-schlangen-a3989a16b/)

## Acknowledgments

This project took me about 4 hours in total.
