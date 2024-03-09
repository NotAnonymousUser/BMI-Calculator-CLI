import inquirer from "inquirer";
import chalk from "chalk";

const input1 = await inquirer.prompt({
  name: "weight",
  type: "number",
  message: chalk.green("Enter your weight in KGs"),
});

const input2 = await inquirer.prompt({
  name: "height",
  type: "number",
  message: chalk.green("Enter your height in meters"),
});

let BMI = input1.weight / input2.height ** 2;

console.log(`\nYour BMI is ${BMI} `);

if (BMI <= 18.5) {
  console.log(chalk.yellow("\nYou are underweight"));
} else if (BMI <= 25) {
  console.log(chalk.green("\nYou are Healthy"));
} else if (BMI <= 30) {
  console.log(chalk.yellow("\nYou are overweight"));
} else {
  console.log(chalk.red("\nSorry You are Obese"));
}
