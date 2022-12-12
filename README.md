<h1>The Clueless Cook - Application</h1>

------------------------------------------------------------------------------------------------------------------------
<strong><h3>Table of Content</h3></strong>
<u>
1. Introduction
2. Features
3. Installation
</u>
<br>

<br>

------------------------------------------------------------------------------------------------------------------------

<h3>1. <strong><u>Introduction</u></strong></h3>

---------------
Do you enjoy good food but are you not always sure what to cook? Looking for inspiration? Or do you like to pay attention to what nutrients are in your meal?

Don't look further because this application is made for you!


With this application you can search recipes based on their ingredients, cooking time, meal type, cuisine or dietary requirements!
<br>

It also has the ability to search for the calorie count and nutrients of products by using the 'Calorie Calculator'.
<br>The 'Calorie Calculator' is a feature only available to members with an account. 
To get access you sign up and login!

<br>

-----------
<h3>2. <strong><u>Features</u></strong></h3>

-----------
The application is build up out of the following features:
<br>
<h5><u>NavBar:</u></h5>
Every page has a navigation-bar where you can easily navigate between the different pages and functions.
<br>
Clicking on the logo 'The Clueless Cook' and on 'Home' will bring you back to the homepage.
<br>
Clicking 'About' brings you to the footer with the about-information of this website.
<br>
Clicking 'Calculator' will bring you to the 'Calculator' page.


<h5><u>Homepage:</u></h5>
The header of the homepage always features some random recipes as a suggestion. You can directly go to the recipe-page by clicking on it.

In the main of the homepage you can search for recipes by typing your desired ingredient(s) in the "Recipe search" field. You can put in multiple ingredients using a ',' to distinguish the separate ingredients.
You can just search by ingredient name, but you can also use the following option to narrow your search down:
* Meal Type: this will let you choose what type of meal you would like to find, ie. Breakfast, Lunch, Dinner, etc..
* Cuisine: this will let you choose what type of cuisine you would like to find, ie. American, Asian, British, etc..
* Diet: this will let you choose what type of diet-requirements you would like to find, ie. Balanced, High-Fiber, High-Protein, etc..
* Time: this indicates how much time it will take to prepare the recipe you choose, ie. 0-15 min, 15-30 min, 30-60 min, etc..

Once you've searched for recipes you can select one in the results list and click on it. This will open a new tab with the chosen recipe.
By opening a new tab you can have multiple recipes open at the same time. This comes in handy if you'd like to read first how to prepare or what ingredients are being used and decide which recipe to make after.
This way your search results will remain open on the homepage.
At the bottom of the results list you find a button 'Next'. Clicking on it will bring you to the next 20 results found.


<h5><u>Recipe-page:</u></h5>
The recipe-page features all the information needed to prepare the recipe ie. ingredients, etc..
It also shows you the nutrients of the recipe and the health labels associated with the recipe.
You can find the link to the original recipe source at the bottom of the description, the ➜︎ points at the link.


<h5><u>Calculator-page:</u></h5>
The Calorie Calculator lets you find products and their calories, fat, and carbohydrates content. You can add different products together that add up and give you the total amount of calories, fat and carbohydrates.
This feature is only available to members with an account. To access sign up and login.

<h5><u>Sign Up-page:</u></h5>
The sign up- page asks the user to fill in their email address and make up a 'Username' and 'Password'. 
After signing up the user gets redirected to the login-page.

<h5><u>Login-page:</u></h5>
The login-page lets the user login. When successful the user is redirected to the Calculator-page.
<br>

<h5><u>Homepage preview:</u></h5>
![home-preview-new.png](src%2Fassets%2Fimages%2Fhome-preview-new.png)

<br>

---------------
<h3>3. <strong><u>Installation</u></strong></h3>

---------------
<h4><strong>Step 1</strong> -   <u>Download and Install an IDE.</u></h4>
To be able to run this project you will have to download an IDE like Webstorm.
<br>
Follow the link below to download Webstorm for macOS, Windows or Linux:
https://www.jetbrains.com/webstorm/download/#section=mac
<br> Then follow the installation instructions.

This application is build with Create React App.

<br>
<h4><strong>Step 2</strong> -   <u>Open Terminal</u></h4>
You can find the 'Terminal' at the bottom of the Webstorm screen (between 'Problems' and 'Services').

Click on it to open.

<br>
<h4><strong>Step 3</strong> - <u>Installing dependencies & development dependencies.</u></h4>
This application uses a couple of dependencies that are not standard in a React App. 
To use them we need to install them first. 

These (development) dependencies will show up in your package.json file as soon as you install them.

In the terminal type the following commands and wait for them to install:
<br>

<code>npm install axios</code>     then press enter.

<code>npm install react-dom</code>     then press enter (this dependency is most likely already installed).

<code>npm install react-hook-form</code>     then press enter.

<code>npm install react-router-dom</code>     then press enter.

<code>npm install react-router-hash-link</code>     then press enter.

<code>npm install swiper</code>     then press enter.

You can check if the following is added to the package.json file to make sure they've been installed (and you are using the right version):

"dependencies":  {
<br>
"axios": "^1.2.1",
<br>
"react": "^18.2.0",
<br>
"react-dom": "^18.2.0",
<br>
"react-hook-form": "^7.39.1",
<br>
"react-router-dom": "^5.3.4",
<br>
"react-router-hash-link": "^2.4.3",
<br>
"react-scripts": "5.0.1",
<br>
"swiper": "^8.4.5",
<br>
}

Also check if the "scripts" and "eslintConfig" are as followed:

"scripts": {
<br>
"start": "react-scripts start",
<br>
"build": "react-scripts build",
<br>
"test": "react-scripts test",
<br>
"eject": "react-scripts eject"
<br>
},
<br>
"eslintConfig": {
<br>
"extends": [
<br>
"react-app",
<br>
"react-app/jest"
<br>
]
<br>
},

(If this is not the case you might have initiated the project without React. 
Install React by typing the following command in the terminal:
<code>npm install react</code>     then press enter and wait for it to install.)


<br>
<h4><strong>Step 4</strong> - <u>API access</u></h4>
This application uses the API from Edamam.com. 
There's multiple options this API provides. 
This application uses the following APIs from Edamam:

* Recipe Search API (version V2)
<br>
* Food Database API (version V2)

To start using the application you will have to sign-up for an account on the Edamam website.
To do this visit www.edamam.com and go to 'Signup API' in the top right corner. 
Select the APIs mentioned above and copy and paste your 'app_key' and 'app_id' in the following file and dedicated location:

* .env.dist

REACT_APP_API_KEY_HOME= your <u>app_key</u> from <u>Recipe Search API</u><br>
REACT_APP_API_ID_HOME= your <u>app_id</u> from <u>Recipe Search API</u><br>
REACT_APP_API_KEY_CALCULATOR= your <u>app_key</u> from <u>Food Database API</u><br>
REACT_APP_API_ID_CALCULATOR= your <u>app_id</u> from <u>Food Database API</u><br>

(You will find my app_key and app_id in the enclosed PDF file.)

<br>
<h4><strong>Step 5</strong> - <u>Run the application</u></h4>
Run the application by typing the following command in the terminal:

<code>npm run start</code> then press enter *
<br>There will appear a link that will take you to the application website.
(http://localhost:1234)
<br>

*If you want to quit running the npm press <code>Ctrl + C</code>


<strong><h3>You are now ready to use the application. Enjoy!</h3></strong>

For any questions or comments please contact the developer. <br>
You can contact her through her gitHub repository:<br>
https://github.com/evreekum/frontend-final-assignment.git
<br>

-----------------------------------------------------------------