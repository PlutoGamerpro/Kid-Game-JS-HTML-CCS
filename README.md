# 🎲 Number Guessing Game

- This project is a simple number guessing game built with HTML, CSS, and JavaScript. Users are challenged to guess numbers based on a randomly generated number displayed in a grid. The game includes input validation and visual feedback to enhance the user experience


![Diagram Description](images/UI-HTMLGAME.png)

# 🚀 Features
- 🎯 Generates a random number between 1 and 100.
- 🎲 Displays a 10x10 grid of numbers.
- ✍️ Users have four input fields to guess numbers based on simple arithmetic (addition and subtraction).
- ⚡ Provides immediate feedback on user inputs (correct or incorrect).
- 🔄 Allows users to generate a new random number and reset the game.

# 💻  Technologies Used
- HTML: Structure of the web page.
- CSS: Styling for the game elements.
- JavaScript: Game logic and interactivity.


# 📜 Code Explanation
- 🏗️ HTML Structure
    - The HTML file contains a div to hold the number grid, buttons for user interaction, and input fields for user guesses. The table for displaying numbers and the feedback elements for user inputs are created dynamically using JavaScript.

- 🧠 JavaScript Logic
 - Global Variables:
   - let randomNumber;: Holds the random number generated for the game.

# 🎲 Functions
- 🎲 ```generateRandomNumber()```
    - 🎲 Generates a new random number between 1 and 100.
    - 🔄 Calls createNumberTable(randomNumber) to update the displayed grid.
    - 🧹 Calls Reset_GameBoxes_And_More() to clear previous inputs and feedback.
    - ⛔ Disables the "Check Answers" button until the user has filled out the input fields.

-  🧼 ```Reset_GameBoxes_And_More()```:
   -  🧼 Clears the values of the input fields and any displayed correct answers.
   -  🧹 Removes any visual feedback (correct or wrong) from previous guesses to ensure a fresh start.

- 🔓 ```EnableBTN() and DisableBTN()```:
   - 🔓 EnableBTN(): Enables the "Check Answers" button, allowing users to submit their guesses.
   - 🔒 DisableBTN(): Disables the button, preventing submission until all input fields are filled.

- ```AllBoxesFilled()```:
   -   ✅ Checks if all four input fields are filled.
   -   🎛️ Updates the state of the "Check Answers" button accordingly, enabling it only when all fields have values.

- ✔️ ```checkAnswers()```:
  - ✔️ Compares the user's inputs against the correct answers derived from the random number.
  - 🎉 Provides visual feedback (green for correct, red for incorrect) by adding or removing classes based on the user's input.

- 📊 ```createNumberTable(randomNumber)```
   - 📊 Creates a 10x10 table displaying numbers from 1 to 100.
   - 🟩 Highlights the cell that contains the randomly generated number, making it easy for users to see their target.
    

  



# 🛠️ Usage
-  To start the game, open the index.html file in a web browser.
  - 🔄  Click on "Generate New Number" to create a new random number and display it in the grid.
  - ✍️ Enter your guesses in the input fields.
  - ✔️ Click "Check Answers" to see which guesses are correct.
  - 🔄 The game can be reset by generating a new random number.
