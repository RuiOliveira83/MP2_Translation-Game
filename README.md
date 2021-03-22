# [The Translation Game](https://ruioliveira83.github.io/MP2_Translation-Game)

## UX
The main purpose of this website is to create a didactic and funny game in a simple, easy to navigate and clean looking website.  
This website is my second milestone project for the diploma in software development from the [code institute](https://codeinstitute.net).  
A live view of this website can be found here: [The Translation Game](https://ruioliveira83.github.io/MP2_Translation-Game).

---
### User Stories
* As a regular user, I want a website responsive and good looking in all devices;
* As a regular user, I wan a website easy to navigate;
* As a regular user, I want to be able to start playing the game quickly;
* As a user, I want to be able to read the of the game, if needed;
* As a user, I want to see my score;
* As a user I want to be able to see my top score;
* As a user, I want to be able to contact the developer to give my opinion or sugestion;
* As a user I want to play a funny game;
* As a user I want to repeat the experience and play again.

### Wireframes
It was used [Balsamiq](https://balsamiq.com/) to create the following wireframes:
| Desktop                                       | Tablet                                       | Mobile                                       |
| --------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| [Home](wireframes/home-desktop.png)           | [Home](wireframes/home-tablet.png)           | [Home](wireframes/home-mobile.png)           |
| [Game](wireframes/game-desktop.png)           | [Game](wireframes/game-tablet.png)           | [Game](wireframes/game-mobile.png)           |
| [Contact](wireframes/contact-desktop.png)     | [Contact](wireframes/contact-tablet.png)     | [Contact](wireframes/contact-mobile.png)     |
| [How to Play](wireframes/howTo-desktop.png)   | [How to Play](wireframes/howTo-tablet.png)   | [How to Play](wireframes/howTo-mobile.png)   |

---
## Features
### Existing Features
This website has 2 pages: **Home** and **Game**. Both pages share the same **Header**.

The **Header** has 2 Modals:
- a modal with a contact form where the user can leave a message or sugestion;
- a modal with the game rules.


The **Home** page is where the user can select the game mode.
The easy mode has 4 different options: Portuguese, Swedish, French and German.
The hard game mode has one one option: Random, where the language will be randomly selected for each new word.

The **Game** page includes a section with the score, the top score and the timer. Below that there is the word to be translated.
After that there is the information about the mode selected. On the bottom of the game area there are 4 different words, one of 
them will be the correct translation. 


---
## Technologies Used
- [Gitpod](https://gitpod.io/)
  - IDE (Integrated Development Environment) used to develop this project.
- [GitHub](https://github.com/)
  - The code hosting platform used to host the project.
- [HTML5](https://en.wikipedia.org/wiki/HTML5)
  - The programming language used to provide content and structure.
- [CSS3](https://en.wikipedia.org/wiki/CSS)
  - The programming language used to format the styling.
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)
  - The programming language used to make the web page interactive.
- [Balsamiq](https://balsamiq.com/)
  - The software used to create the project's wireframes.
- [Bootstrap](https://getbootstrap.com/)
  - Open-source CSS framework used to create some layout features in the project.
- [Google Fonts ](https://fonts.google.com/)
  - Font families library used to provide the font "Roboto".
- [jQuery](https://en.wikipedia.org/wiki/JQuery)
  - JavaScript library used to simplify the JavaScript code.
- [W3C Markup Validator](https://validator.w3.org/)
  - The markup validation service used to check for errors in the HTML code.
- [Jigsaw](https://jigsaw.w3.org/css-validator)
  - The CSS validation service used to check for errors in the CSS code.
- [JSHint](https://jshint.com/)
  - The JavaScript validation service used to check for errors in the JavaScript code.
- [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools)
  - Chrome DevTools used to test the responsiveness of the site.
- [Responsive Design Checker](https://www.responsivedesignchecker.com/)
  - Responsive Design Checker used to test the responsiveness of the site.

---
## Testing
### Code Validators
- [HTML Validator](https://validator.w3.org/#validate_by_input) (via direct input path):
  - Home (index.html) - No errors or warnings:
  ![Home Page HTML Validator](readme-images/val-html-index.png)
  - Game (game.html) - No errors or warnings:
  ![Portfolio Page HTML Validator](readme-images/val-html-game.png)
  
- [CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) (via direct input path):
  - No errors found:
![CSS validator](readme-images/val-css.png)

- [JavaScript Validator](https://jshint.com/):
  - No errors found:
![JavaScript validator](readme-images/val-js.png)

### Responsiveness of the website
It was used [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools) and
[Responsive Design Checker](https://www.responsivedesignchecker.com/)
 to test the responsiveness of the site.

![Responsiveness](readme-images/responsiveness.png)

The website structure adapts well to all used screen size.
