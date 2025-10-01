A simple JavaScript application to convert text to Morse code and vice versa.

Features
Text to Morse Code: Instantly translate any text into Morse code.
Morse Code to Text: Decode Morse code back into readable text.
100% JavaScript: Lightweight and fast, no external dependencies.
# Morse CLI



A simple and interactive command-line interface (CLI) application built with Node.js for converting text to Morse code and vice versa.

## Features

-   **Text to Morse:** Translate standard text into Morse code.
-   **Morse to Text:** Decode Morse code back into readable text.
-   **Interactive CLI:** User-friendly prompts guide you through the conversion process.
-   **Styled Output:** Utilizes `chalk` and `figlet` for an enhanced visual experience in the terminal.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

You must have Node.js and npm installed on your system.
-   [Node.js](https://nodejs.org/) (which includes npm)

### Installation

1.  Clone the repository to your local machine:
    ```sh
    git clone https://github.com/bethel03/morse-converter.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd morse-converter
    ```
3.  Install the required NPM packages:
    ```sh
    npm install
    ```

## Usage

Once the installation is complete, you can run the application with the following command:

```sh
node app.js
```

The application will start and present you with a menu:

1.  Choose an option:
    -   `1` for Text → Morse
    -   `2` for Morse → Text
2.  Enter the text or Morse code you wish to convert when prompted.
3.  The converted result will be displayed.
4.  You will be asked if you want to perform another conversion or exit the application.

**Note:** When entering Morse code, use a single space between each Morse symbol and a `/` to represent a space between words.

## Dependencies

This project relies on the following packages:

-   [chalk](https://www.npmjs.com/package/chalk): For terminal string styling.
-   [figlet](https://www.npmjs.com/package/figlet): To generate the ASCII art title.
-   [readline-sync](https://www.npmjs.com/package/readline-sync): To enable synchronous user input from the console.
