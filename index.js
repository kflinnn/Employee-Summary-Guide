const inquirer = require("inquirer");
const fs = require("fs");

//const to generate HTML



//inquier prompts
inquirer    
    .prompt([

    ])
//.then to create HTML
.then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile("index.html", htmlPageContent, (err) =>
        err ? console.log(err) : console.log("Successfully created index.html!")
    );
});

//Function to inititalize app
function init () {generateHTML};

//function call to initialize app
init();