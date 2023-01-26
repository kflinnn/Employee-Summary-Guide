const Employee = require("./Employee");
const inquirer = require("inquirer");

class Manager extends Employee {
    constructor (officeNumber) {
        this.officeNumber = officeNumber;
    }

    getRole() {
        
    }
}