#! /usr/bin/env node
import inquirer from "inquirer";
let toDoes = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "Todo",
            type: "input",
            message: "What you want to add in your Todoes",
        },
        {
            name: "Addmore",
            type: "confirm",
            message: "Do You want to add more?",
            default: "true",
        }
    ]);
    toDoes.push(addTask.Todo);
    condition = addTask.Addmore;
}
toDoes.pop();
toDoes.splice(2, 1, "E");
console.log(toDoes.join("\n"));
