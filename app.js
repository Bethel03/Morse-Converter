// app.js
import readline from "readline-sync";
import figlet from "figlet";
import chalk from "chalk";
import dictionaire from "./dictionaire.js"; 



// ASCII Art title
console.log(
  chalk.cyan(figlet.textSync("Morse CLI", { horizontalLayout: "default" }))
);

// Welcome text
console.log(chalk.green("==========================================="));
console.log(chalk.yellow("🚀 Welcome to Morse CLI"));
console.log(chalk.green("===========================================\n"));
console.log(chalk.white("✨ Text <-> Morse Converter ✨\n"));
console.log(chalk.gray("-------------------------------------------"));
console.log(chalk.gray("Author  : Bethel"));
console.log(chalk.gray("Version : 1.0.0"));
console.log(chalk.gray("-------------------------------------------\n"));

// Build reverse dictionary for Morse → Text
const morseToText = {};
for (const [letter, morse] of Object.entries(dictionaire)) {
  morseToText[morse] = letter;
}

// Functions
function convertTextToMorse(chars) {
  return chars
    .map(char => dictionaire[char] || "?")
    .join(" ");
}

function convertMorseToText(morse) {
  return morse
    .trim()
    .split(" ")
    .map(symbol => morseToText[symbol] || "?")
    .join("");
}

// Main loop
let keepRunning = true;

while (keepRunning) {
  console.log(chalk.blue("\nChoose an option:"));
  console.log("1. Text → Morse");
  console.log("2. Morse → Text\n");

  const choice = readline.question(" Your choice (1 or 2): ");

  switch (choice) {
    case "1":
      const inputText = readline.question("\n  Enter the text to convert: ");
      let text = inputText.toUpperCase();
      let chars = text.split("");
      console.log(chalk.magenta("\nResult:"));
      console.log(chalk.bold(convertTextToMorse(chars)));
      break;

    case "2":
      const inputMorse = readline.question("\n  Enter the Morse code to decode: ");
      console.log(chalk.magenta("\nResult:"));
      console.log(chalk.bold(convertMorseToText(inputMorse)));
      break;

    default:
      console.log(chalk.red("\n Invalid choice."));
  }

  // Ask if the user wants to continue
  const again = readline.question(chalk.yellow("\nDo you want to continue? (y/n): "));
  if (again.toLowerCase() !== "y") {
    keepRunning = false;
    console.log(chalk.green("\n👋 Goodbye! Thanks for using Morse CLI."));
  }
}