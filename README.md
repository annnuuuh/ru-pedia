

# Ru-Pedia
### Turing Mod 3 Final Solo Project


## Author

- [Anna Johnson](https://www.github.com/annnuuuh)


## Technologies Used
<img alt="React" src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/><img alt="Cypress" src='https://img.shields.io/badge/cypress%20-%23404d59.svg?&style=for-the-badge&logo=Cypress&logoColor=white'/><img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/><img alt="Git" src="https://img.shields.io/badge/git%20-%23F05033.svg?&style=for-the-badge&logo=git&logoColor=white"/><img alt="HTML5" src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/><img alt="CSS3" src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/>


## Demo

## Deploy Link
[Ru-Pedia](https://ru-pedia.surge.sh/)

## Dev Installation

Either use the green "download code" button ![downloadbutton](https://imgur.com/lYy4FVP.png) at the top of the page to copy a clone link or right-click [here](https://github.com/annnuuuh/ru-pedia.git) and click "Copy link address"

From there open your terminal and navigate to the directory you would like to store the web app inside of.

Once you are in the directory execute the following command:

```bash
git clone https://github.com/annnuuuh/ru-pedia.git
```
(this command assumes that the Github link you copied above matches.)

then navigate inside of the directory and run the following commands to run the developer server:

```bash
  cd ru-pedia
  npm install
  npm start
```
After you have started the server you should be able to find the website visible at [this URL](http://localhost:3000)

## Challenges

Router did an update a few days before I started this project. I ended up installing the newest version and it was a total mess. I had a hard time getting url's with unique id's to route and so I ended up uninstalling Router altogether and installing the older version.

Additionally, I didn't realize that a few of my API endpoints that directed to the same 'Queen' actually had differing data and so I kept running into crazy errors until I finally realized that the two endpoints weren't playing well together.

## Wins

Getting this project done! Life threw me a lot of curveballs during the project and so I'm extra proud that I got it across the finish line on time! ☕️

## Future Features

There are so many! I'd love to add the following:
- Sort queens by place on Season Details pages
- Conditionally render clear button so that it only appears after the input has a value
- Properly render error messaging for 404 errors when an image is not found
- Figure out how to better deal with different sized images in general
- Add the ability for a user to favorite Queens
