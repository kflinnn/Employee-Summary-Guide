const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const generateHTML = require("./src/generateHTML");


//const to generate HTML


function appMenu() {
    function createManager() {
        inquirer    
    .prompt([
        {
            type: "input",
            name: "managerName",
            message: "Enter your name"
        },
        {
            type: "input",
            name: "managerId",
            message: "Enter your ID number"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "Enter your email"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Enter your Office Number"
        },
    ])
    .then((answers) => {
        const manager = new Manager(
            answers.managerName,
            answers.managerID,
            answers.managerEmail,
            answers.officeNumber,
        )
        })
    }
};





inquirer    
    .prompt([
        {
            type: "input",
            name: "name",
            message: "Enter your name"
        },
        {
            type: "input",
            name: "id",
            message: "Enter your ID number"
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email"
        },
        {
            type: "list",
            name: "role",
            message: [
                "Employee",
                "Manager",
                "Engineer",
                "Intern",
            ],
        }
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