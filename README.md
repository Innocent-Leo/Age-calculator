# Frontend Mentor - Age calculator app solution

A simple and responsive **Age Calculator** that lets users enter their date of birth and instantly see how old they are in **years, months and days.**
It also performs **real-time validation** to prevent invalid dates, empty fields and future dates.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [GitHub Repo](https://github.com/Innocent-Leo/Age-calculator.git)
- Live Site URL: [Live Demo](https://my-age-counter.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- Tailwind CSS
- JavaScript

### What I learned

- How to validate dates logically without relying on `<input type="date">`
- Handling edge cases like:
  - February leap years
  - Months with 30 days
  - Borrowing months/days during age calculation
- Manipulating date using the JavaScript `Date()` object
- DOM manipulation (inserting error messages, styling invalid inputs)

### Continued development

- Add animations to number results
- Add error messaging transitions
- Add auto-formatting (leading zeros)
- Allow keyboard **Enter** to calculate

## Author

- Frontend Mentor - [@Innocent-Leo](https://www.frontendmentor.io/profile/Innocent-Leo)
- LinkedIn - [@Innocent-Okeke](https://www.linkedin.com/in/innocentokeke)
- Twitter - [@itz_saintleo](https://www.twitter.com/itz_saintleo)
