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
This website has 2 pages: **Home** and  **Game**. All pages share the same **Header** and **Footer**.

The **Header** has 3 sections:
- a photo with a link to the home page;
- name and title;
- navigation bar with links to the 4 pages of this website.

The **Footer** has a link to easily download the cv.

The **Home** page includes a section with personal information and a section with my Background, What I do, How do I do it and Why hire me.

The **Portfolio** page includes Rui's Portfolio. On the left side of the page, we have a list of projects  
with a link to the section of the page related to that project. On the right side of the page, there is a description
of each project with a link to that project.

The **Contact** page includes a section with personal information, a section with a form that allows the user
to send me a message and a section with a map showing my location.

The **Resume** page includes a summary, my work history, my education and my skills.

### Features Left to Implement
Add links to future projects on the Portfolio page.
Make contact form go live.

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
- [Balsamiq](https://balsamiq.com/)
  - The software used to create the project's wireframes.
- [Bootstrap](https://getbootstrap.com/)
  - Open-source CSS framework used to create some layout features in the project.
- [Google Fonts ](https://en.wikipedia.org/wiki/CSS)
  - Font families library used to provide the fonts "Roboto" and "Nunito".
- [Font Awesome](https://fontawesome.com/)
  - Font and icon toolkit based on CSS and Less used to add some icons to the project.
- [W3C Markup Validator](https://validator.w3.org/)
  - The markup validation service used to check for errors in the HTML code.
- [Jigsaw](https://jigsaw.w3.org/css-validator)
  - The CSS validation service used to check for errors in the CSS code.
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
  - Portfolio (portfolio.html) - No errors or warnings:
  ![Portfolio Page HTML Validator](readme-images/val-html-portfolio.png)
  - Contact (contact.html) - No errors or warnings:
  ![Contact Page HTML Validator](readme-images/val-html-contact.png)
  - Resume (resume.html) - No errors or warnings.
  ![Resume Page HTML Validator](readme-images/val-html-resume.png)

- [CSS Validator](https://validator.w3.org/#validate_by_input) (via direct input path):
  - No errors found:
![CSS validator](readme-images/val-css.png)

### Responsiveness of the website
It was used [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools) and
[Responsive Design Checker](https://www.responsivedesignchecker.com/)
 to test the responsiveness of the site.

![Responsiveness](readme-images/responsiveness.png)

The website structure adapts well to all used screen size.

### Functionality of the website
The responsiveness of all pages was tested:
- The picture in the top left corner returns you to the home page;
- the nav bar is working in all the pages;
- all the links are working;
- the cv download on the footer is working and opens the cv in a new tab;
- the email is working and opens the email;
- all the images are rendering;

### Browser compatibility
The apperance and responsiveness of the website was tested with good results in 5 different web browsers: Internet Explorer, Microsoft Edge,
Mozilla Firefox, Google Chrome and Opera. 

### Testing User Stories
* As a regular user, I want a website responsive and good looking in all devices:
  - A regular user will find a website with a balanced design and a clear structure in whatever device he chooses to use.
* As a regular user, I want a website easy to navigate;
  - A regular user will find a navigation bar with access to all the available pages.
* As a recruiter and as a potential client, I want to visit the website home page to know more about Rui.
  - User goes to the homepage and find information about the Rui's background, What he does, how he does it and why hire Rui.
* As a recruiter, I want to be able to easily download Rui's cv;
  - A recruiter will find a link to download Rui's cv in the footer of every page and also on the first column of the resume page. This link opens a new tab with a pdf of Rui's cv.
* As a recruiter and as a potential client, I want to be able to contact Rui;
  - A user can contact Rui through the email or the form. The email can be found both in home page and contact page and has a link that launches the user's email. The contact page has a form that allows the user to send a message.
* As a potential client, I want to see Rui's Portfolio to see what is capable of doing;
  - A user can navigate to the portfolio page and find information related to all the projects done by Rui.
* As a potential client, I want to see Rui's work history, education and skills.
  - A user can navigate to the Resume page to find the work history, education, skills and a summary of that information. The user can also find that information on the cv that is available to download on every page.

### Bugs 
- There were 3 errors in the Contact page:
  ![Contact Page HTML Validator](readme-images/val-html-contact-bugs.png)
  1. The first error was due to an additional space added after "mailto:". That space was deleted to eliminate the error.
  2. The second was due to the value of 95% for the width attribute on the iframe element. This attribute was deleted and the width of this element is now controlled in the style.css file.
  3. The third error was due to the use of the frameborder attribute. This attribute was deleted to eliminate the error.  
After amending these errors no errors or warnings were found.

- There were 2 errors and 7 warnings on the css file:
![errors on CSS validator](readme-images/val-css-bugs.png)
1. The 2 errors were caused by an extra round bracket. It was deleted to solve the errors.
2. the first warning is related to the imported google fonts stylesheet.
3. all the other errors were due to the use of unknown vendor extensions. All those extensions were deleted.  
After amending the error no errors were found.
- The internet explorer wasn't displaying/recognizing the colour #0000009e. This colour was changed to #44474a to solve the problem.
After this changed the website is working properly in all tested browsers.
- On a first version of the website, the home and contact page didn't have enough content to occupy the full screen in larger displays. 
That wasn't looking good and was solved by adding more content and presenting the content differently.

---
## Deployment
To __deploy__ the project in GitHub I perform the following steps:
- Log into my [GitHub](https://github.com/) account;
- Choose the project "MP1" on the Repositories;
- Click on Settings;
- Scroll down to the "GitHub Pages" section;
- Inside the "GitHub Pages" section, click on the drop-down menu under Source and select Master Branch;
- The page refreshes automatically and the website is now deployed.
- The link to the webpage can be found in the GitHub Pages section.

To run the code locally by __cloning__ the project from GitHub:
- Log into my [GitHub](https://github.com/) account;
- Choose the project "MP1" on the Repositories;
- Inside the Code button copy the URL link inside the Clone section;
- Open repository or create a new repository;
- Open terminal;
- Type *git clone* followed by the copied URL and press Enter.

---
## Credits
### Content
- Home Page:
  - The text was taken from the [code institute](https://codeinstitute.net) mini project with bootstrap 4.
- Portfolio Page:
  - The description of the Milestone projects was taken from the [code institute](https://codeinstitute.net).
- Overall structure:
  - I was inspired by the miniproject with bootstrap 4.
- Read me file:
  - I used the code institute template and took some ideas from [karzuin](https://github.com/karzuin/) and [Fernanda Gil](https://github.com/fernandagil) read me files.

### Media
- Header:
  - The photo used in this site was taken by me.
- Contact Page:
  - The map is from [google maps](https://www.google.com/maps).

### Acknowledgements
- The [code institute](https://codeinstitute.net) for the inspiration and knowledge to do this website.
- The code institute [Slack](https://slack.com/) channel, for having an extensive library of questions and answer with almost all my questions.
- My mentor [Precious Ijege](https://www.linkedin.com/in/precious-ijege-908a00168/?originalSubdomain=ng) for guidance and support.