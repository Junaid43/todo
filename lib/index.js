import inquirer from 'inquirer';
async function startCalculationAgain() {
    let todolist = [];
    let addSomething = await inquirer.prompt({
        type: "confirm",
        name: "add",
        message: "Do you want to add something in your todo list",
        default: false
    });
    if (addSomething.add === true) {
        do {
            let addTodo = await inquirer.prompt({
                type: "input",
                name: "addValue",
                message: "Add value to your todo list"
            });
            let valTodo = addTodo.addValue;
            todolist.push(valTodo);
            var playAgain = await inquirer.prompt({
                type: "input",
                name: "restart",
                message: "Do you want add more ? Press Yes or No"
            });
        } while (playAgain.restart == 'y' || playAgain.restart == 'Y' || playAgain.restart == 'YES' || playAgain.restart == 'Yes' || playAgain.restart == 'yes');
    }
    if (todolist.length > 0) {
        todolist.forEach(todo => {
            console.log("Your Todo", todo);
        });
    }
    else {
        console.log("No item in your todo list");
    }
}
startCalculationAgain();
