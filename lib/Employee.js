const inquirer = require("inquirer");

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        inquirer
         .prompt ([
            {
                type: "input",
                name: "name",
                message: "Enter your name"
            }
        ])
        .then()
    };

    getId() {
        inquirer
         .prompt ([
                {
                    type: "input",
                    name: "id",
                    message: "Enter your ID number"
                }
        ])  
        .then()
    };

    getEmail() {
        inquirer
         .prompt ([
            {
                type: "input",
                name: "email",
                message: "Enter your email"
            }
        ])
        .then()
    }

    getRole() {
        inquirer
         .prompt ([
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
         .then(val => {
            if (val.role === "Employee") {
                return "Employee"
         }
         });
    }
}

module.exports = Employee;