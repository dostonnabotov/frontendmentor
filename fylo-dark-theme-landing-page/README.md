# Frontend Mentor - Fylo dark theme landing page

This is a solution to the [Fylo dark theme landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/fylo-dark-theme-landing-page-5ca5f2d21e82137ec91a50fd).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![Fylo dark theme landing page](./assets/screenshots/screenshot.png)

### Links

- Solution URL - [GitHub repository](https://github.com/dostonnabotov/frontendmentor/tree/main/fylo-dark-theme-landing-page)
- Live Preview URL - [Live Site](https://dostonnabotov.github.io/frontendmentor/fylo-dark-theme-landing-page)

## My process

### Built with

- Semantic HTML5 markup
- Sass & CUBE CSS
- Grid & Flexbox
- Mobile-first workflow

### What I learned

I learnt a lot. Let me share with you.

- `pattern` & `title` attributes for `input[type="email"]`

```html
<input
  type="email"
  pattern="[A-Za-z0-9._+-]+@[A-Za-z0-9 -]+\.[a-z]{2,}"
  title="Enter valid email address"
/>
```

- set `aria-hidden="true"` & leave `alt` tag empty to make sure
  that screen readers do not reach to decorative images.

```html
<img aria-hidden="true" src="icon-any-file.svg" alt="" />
```

- Utopia (fluid type scale & space)

```scss
$font-sizes: (
  400: clamp(0.88rem, calc(0.88rem + 0vw), 0.88rem),
  500: clamp(1.05rem, calc(1.03rem + 0.09vw), 1.09rem),
  ...,
);

$sizes: (
  100: clamp(0.25rem, calc(0.25rem + 0vw), 0.25rem),
  200: clamp(0.44rem, calc(0.41rem + 0.12vw), 0.5rem),
  300: clamp(0.69rem, calc(0.66rem + 0.12vw), 0.75rem),
  400: clamp(0.88rem, calc(0.83rem + 0.24vw), 1rem),
  ...,
);
```

- CSS pseudo classes for `input`

```css
input:placeholder-shown {
  /* do something */
}

input:invalid {
  /* do something */
}

input:valid {
  /* do something */
}
```

- Improve the a11y by setting a custom outline for focusable elements

```css
:focus {
  outline: 2px dotted var(--clr-primary-400);
  outline-offset: 4px;
}
```

- Practiced using `::selection` and `::-webkit-scrollbar`

```css
::selection {
  /* do something */
}

::-webkit-scrollbar {
  /* do something */
}

::-webkit-scrollbar-track {
  /* do something */
}

::-webkit-scrollbar-thumb {
  /* do something */
}
```

### Continued development

I would to love to receive feedback and add new features to this project

### Useful resources

- [Andy Bell – Be the browser’s mentor, not its micromanager](https://youtu.be/5uhIiI9Ld5M)
- [Kevin Powell - Input Validation with CSS only](https://youtu.be/g-Y31Iswr2M)
- [Codepen - Form Validation with CSS only](https://codepen.io/jh3y/pen/yLKMOBm)
