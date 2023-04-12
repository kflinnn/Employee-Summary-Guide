# Employee-Summary-Guide

## Purpose

A Node.js command-line application that takes information about employees and generates an HTML webpage that displays each of their summaries.

When given a command-line application that accepts user input, the user is prompted for their team members and the team members' information and an HTML file is generated that displays a nicely formatted team roster based on the user's input. When the user clicks on the email address in the HTML, then the default email program opens and populates the TO field of the email with the address. When the GitHub username is clicked on then the corresponding GitHub profile opens in a new tab. When the application is started, the user is prompted to enter the team manager's name, employee ID, email address, and office number. When this information is entered, then the user is presented with a menu that has the options to add an engineer or an intern or to finish buildng their team. When the engineer option is selected, they are prompted to enter the engineer's name, ID, email, and GitHub username, and they are taken back to the menu and the same happens when the intern is selected and their information is entered. When the user is done building their team, they exit the application and the HTML is genereated. This was achieved by using node.js, Inquirer, and Jest. 

## Examples

Employee, Engineer, Intern, and Manager Classes:

![Screen Shot 2023-04-12 at 7 34 35 PM](https://user-images.githubusercontent.com/116764540/231608405-dca77e14-579d-47c4-b5e0-3edc9cb5e67d.png)

![Screen Shot 2023-04-12 at 7 34 56 PM](https://user-images.githubusercontent.com/116764540/231608461-29662843-e10d-4dbc-b88c-b7dc6045ec9c.png)

![Screen Shot 2023-04-12 at 7 35 21 PM](https://user-images.githubusercontent.com/116764540/231608500-234866cf-4145-4b85-a367-5dce26ca03ac.png)

![Screen Shot 2023-04-12 at 7 35 43 PM](https://user-images.githubusercontent.com/116764540/231608630-99ca8cea-9c11-4259-b76e-30a19e30a63a.png)

Inquirer Prompts:

![Screen Shot 2023-04-12 at 7 37 53 PM](https://user-images.githubusercontent.com/116764540/231608796-8eaa73bb-ae92-4451-8a60-4b0dbaa3533e.png)

Generated HTML

![Screen Shot 2023-04-12 at 7 32 55 PM](https://user-images.githubusercontent.com/116764540/231608230-f41b4eff-9bbd-4b9a-a6b1-92223252da60.png)

## License

MIT License

Copyright (c) 2023 Kelley Flinn

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Technologies Used

Language: JavaScript

NPM: Node.js

NPM: Jest

NPM: Inquirer

## Link to Video Demo

https://drive.google.com/file/d/1tkF7DuBxqgiNt-u0SSAr9UoE_qe63Nby/view
