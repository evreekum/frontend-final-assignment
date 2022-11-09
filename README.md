RecipePage Application
------------------------------------------------------------------------------------------------------------------------
Table of Content
1. Introduction
2. Features
3. Installation
------------------------------------------------------------------------------------------------------------------------

1. Introduction
---------------
Do you enjoy good food but are you not always sure what to cook? Just looking for inspiration? Or do you like to pay attention to what nutrients are in your meal?

Don't look further because this application is made for you!


With this application you can search recipes based on their ingredients, cooking time, meal type, cuisine or dietary requirements!
<br>
It also has the ability to search for the calorie count and nutrients of products by using the 'Calorie CalculatorPage'.

-----------
2. Features
-----------
The application is build up out of the following features:

Navigation:
<br>
Every page has a navigation-bar where you can easily navigate between the different pages and functions.
<br>
Clicking on the logo 'The Clueless Cook' and on 'HomePage' will bring you back to the homepage.
<br>
Clicking 'About' brings you to the footer with the about-information of this website.
<br>
Clicking 'CalculatorPage' will bring you to the 'Calorie CalculatorPage' page.


Homepage:
<br>
The header of the homepage always features some random recipes as a suggestion. You can directly go to the recipe-page by clicking on it.

In the main of the homepage you can search for recipes by typing your desired ingredient(s) in the "RecipePage search" field. You can put in multiple ingredients using a ',' to distinguish the separate ingredients.
You can just search by ingredient name, but you can also use the following option to narrow your search down:
* Meal Type: this will let you choose what type of meal you would like to find, ie. Breakfast, Lunch, Dinner, etc..
* Cuisine: this will let you choose what type of cuisine you would like to find, ie. American, Asian, British, etc..
* Diet: this will let you choose what type of diet-requirements you would like to find, ie. Balanced, High-Fiber, High-Protein, etc..
* Time: this indicates how much time it will take to prepare the recipe you choose, ie. 0-15 min, 15-30 min, 30-60 min, etc..

Once you've searched for recipes you can select one in the results list and click on it. This will open a new tab with the chosen recipe.
By opening a new tab you can have multiple recipes open at the same time. This comes in handy if you'd like to read first how to prepare or what ingredients are being used and decide which recipe to make after.
This way your search results will remain open on the homepage.


RecipePage-page:
<br>
The recipe-page features all the information needed to prepare the recipe ie. ingredients, etc..
It also shows you the nutrients of the recipe and the health labels associated with the recipe.


Calorie CalculatorPage-page:
<br>
The Calorie CalculatorPage lets you find products and their calories, fat, and carbohydrates content. You can add different products together that add up and give you the total amount of calories, fat and carbohydrates.


Homepage preview:
<strong>ADD SCREENSHOT HOMEPAGE!!!</strong>

---------------
3. Installation
---------------
Step 1 - Download and Install an IDE.
<br>
To be able to run this project you will have to download an IDE like Webstorm.
Follow the link below to download Webstorm for macOS, Windows or Linux:
https://www.jetbrains.com/webstorm/download/#section=mac
<br> Then follow the installation instructions.

<br>
Step 2 - Check Node.js and npm version.
<br>
In the terminal type the following command to find out what version is being used:

<code>node -v</code>     then press enter.

<code>npm -v</code>      then press enter.

<br>
Step 3 - Installing dependencies & development dependencies.
<br>
These development dependencies will show up in your package.json file as soon as you install them. 

In the terminal type the following commands:

<code>npm init</code>    then press enter and follow the instructions in the terminal or keep pressing enter till you get a new command line.

<code>npm install parcel --save-dev</code>   then press enter.


The development dependencies will show up in your package.json and package-lock.json files as soon as you install them.
You can check if the following is added to the package.json file, otherwise add this yourself into the file:

<strong>VERANDER DIT NAAR REACT!! GEEN PARCEL VOLGENS MIJ</strong>

"scripts": {
<br>
"start": "parcel src/index.html",
<br>
"build": "parcel build src/index.html",
<br>
"test": "echo \"Error: no test specified\" && exit 1"
<br>
}

The development dependencies used for this application are:

buffer: v6.0.3
<br>
parcel: v2.6.2
<br>
process: v0.11.10


To install the dependencies put in the following command in the terminal:

<code>npm install axios</code>   then press enter

The dependencies used for this application are:

axios: v0.27.2

<br>
Step 4 - API
<br>
This application uses the API from Edamam.com. There's multiple options but this application uses the following API's from Edamam:<br>
* RecipePage Search API (version V2)
<br>
* Food Database API (version V2)

<br><strong> VERANDER DIT WANT IS NU MET .ENV GEDAAN!! OOK WAAR DE DOCENT DE API KEYS NU KAN VINDEN IN PDF BESTAND</strong>

To start using the application you will have to sign-up for an account on the Edamam website.
To do this visit www.edamam.com and go to "Signup API" in the top right corner. Select the APIs mentioned above and copy and paste your 'app_key' and 'app_id' in the following files:

* fetchDataHomeHeader.js
* fetchDataHomeSearch.js
* fetchDataRecipePage.js
* fetchDataCalculatorPage.js

(You will find my app_key and app_id in the enclosed PDF file.)

<br>
Step 5 - Run the application
<br>
Run the application by typing the following command in the terminal:

<code>npm run start</code> then press enter *
<br>There will appear a link that will take you to the application website.
(http://localhost:1234)


You are now ready to use the application. Enjoy!



*If you want to quit running the npm press <code>Ctrl + C</code>

