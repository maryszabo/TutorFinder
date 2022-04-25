# CEN3031TeamProject
Team Project for CEN3031

Unfortunately, we did not have enough time to integrate our code. There are four folders which run separately, but contain the separate aspects and functionality we need to integrate. 
Note, the zip file accidently merged the student questionnaire code and the database since one was title tutorfinder and the other TutorFinder. But both files can be see on the git reposity

Let’s first look at the user interface, which is in the website folder. Open the website folder within your own IDE. Open the src folder, then the index. html file. Then click on the link within the html file and the website will appear in a web browser. 

For the Student-Questionnaire Branch on GitHub, it was created with a build React App on my own computer. I created the code in VS Code, and ran the commands within the terminal on VS Code. 

Within a terminal work to where you have saved the project. Then enter cd tutorfinder to access the tutorfinder folder, where the student questionnaire code is held.  Before running for the first time on your system, you may need to enter npm install --save styled-components. The command installs the styled components folder. Next, in the terminal enter npm start. Then the page should appear in a web browser showing the interactive dropdown menus.  

The same applies for the User-Profile Branch on GitHub, or the code for the user profile page. You will need to open the project again to see all of the folders, then enter cd profile to open the profile folder. Then before running this part of the program on your system for the first time, you may need to enter npm install --save formik yup. Then enter npm start to run the program. Again, the code will appear on your default web browser. You can interact with the entry fields as well and when clicking submit all of the information will be displayed on the right side of the browser window. 

Finally, for the database code.
## Requirements
 
* [Node.js](http://nodejs.org/)
* [Express.js](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)
* [MongoDB Compass](https://www.mongodb.com/products/compass)
 
## Installation Steps
 
1. Run ‘npm instal’
2. Create a ‘.env’ file in the project root folder for the database connection details
3. Start MongoDB (using ‘compass)
4. Run ‘npm run watch’
5. Visit http://localhost:3000 to enter a new registration information

