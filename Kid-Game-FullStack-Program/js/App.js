

 // Variables for the game state
 let randomNumber;
 let Highscore = 0;
 let correctCount = 0;
 let checkPressed = false;
 let countdown = 30;
 let interval = 1;

 let currentLevel = 'easy'; // Default level
 const levelConfig = {
     easy: { 1: 10, 2: 1, 3: -10, 4: -1 },
     medium: { 1: 20, 2: 5, 3: -20, 4: -5 },
     hard: { 1: 50, 2: 10, 3: -50, 4: -10 }
 };

 // Set game level and update placeholders
 function setLevel(level) {
     currentLevel = level;
     updatePlaceholders();  // Update placeholders
     console.log(`Level set to: ${level}`);

     // Adjust timer based on the level
     countdown = level === 'easy' ? 30 : level === 'medium' ? 20 : 10;
     resetTimer();  // Reset the countdown
     generateRandomNumber();  // Generate a new random number
 }

 // Update input placeholders based on selected level
 function updatePlaceholders() {
     const config = levelConfig[currentLevel];
     for (let i = 1; i <= 4; i++) {
         document.getElementById(`InputUser_TXT${i}`).placeholder = `${config[i]}`;
     }
 }

   // Disable input fields
   function disableinputfield() {
    document.getElementById("InputUser_TXT1").disabled = true;
    document.getElementById("InputUser_TXT2").disabled = true;
    document.getElementById("InputUser_TXT3").disabled = true;
    document.getElementById("InputUser_TXT4").disabled = true;
}

// Enable input fields
function enableinputfileds() {
    document.getElementById("InputUser_TXT1").disabled = false;
    document.getElementById("InputUser_TXT2").disabled = false;
    document.getElementById("InputUser_TXT3").disabled = false;
    document.getElementById("InputUser_TXT4").disabled = false;
}

 function HIGHSCORE(){

    console.log("OLD HIGHSCORE " + Highscore);
   
    console.log("HAS ++++ HIGHWITH ONE NEW " +  Highscore)
    document.getElementById('highscore').textContent = Highscore

}
 // Generate a new random number for the game
 function generateRandomNumber() {

    enableinputfileds();
    ColorButtons()
     // Reset inputs and game state
     Reset_GameBoxes_And_More();
     DisableBTN();
     correctCount = 0;
     checkPressed = false;

     randomNumber = Math.floor(Math.random() * 100) + 1;
     document.getElementById('randomNumber').textContent = randomNumber;
     createNumberTable(randomNumber);
 }

 // Create a number table with the random number highlighted
 function createNumberTable(randomNumber) {
     const tableContainer = document.getElementById('table-container');
     tableContainer.innerHTML = ''; // Clear the previous table
     const table = document.createElement('table');
     let counter = 1;

     for (let i = 0; i < 10; i++) {
         const tr = document.createElement('tr');
         for (let j = 0; j < 10; j++) {
             const td = document.createElement('td');
             td.textContent = counter;
             if (counter === randomNumber) {
                 td.classList.add('highlight');
             }
             tr.appendChild(td);
             counter++;
         }
         table.appendChild(tr);
     }

     tableContainer.appendChild(table);
 }

 // Function to reset the game inputs and answers
 function Reset_GameBoxes_And_More() {
     for (let i = 1; i <= 4; i++) {
         document.getElementById(`InputUser_TXT${i}`).value = "";
         document.getElementById(`TxtBox${i}_CorrectAnswer`).textContent = "";
         const parentBox = document.querySelectorAll('.input-box')[i - 1];
         parentBox.classList.remove('correct', 'wrong');
     }
 }

 // Function to enable the "Check Answer" button
 function EnableBTN() {
     const button = document.getElementById('checkanswer');
     button.disabled = false;
     button.classList.remove('disable');
     button.classList.add('enable');
 }

 // Function to disable the "Check Answer" button
 function DisableBTN() {
     const button = document.getElementById('checkanswer');
     button.disabled = true;
     button.classList.add('disable');
     button.classList.remove('enable');
 }

 // Function to check if all input fields are filled
 function AllBoxesFilled() {
     const allFilled = [...Array(4).keys()].every(i => {
         const inputValue = document.getElementById(`InputUser_TXT${i + 1}`).value.trim();
         return inputValue !== "";  // Check if input is not empty
     });

     if (allFilled) {
         EnableBTN();  // Enable button when all input fields are filled
         
     } else {
         DisableBTN();  // Disable button if any input field is empty
     }
 }

 // Add event listeners for input fields to check if all are filled
 document.querySelectorAll('.input-box input').forEach(inputField => {
     inputField.addEventListener('input', AllBoxesFilled);  // Call AllBoxesFilled every time an input changes
 });

 // Function to handle the "Check Answer" button click event
 document.getElementById("checkanswer").addEventListener("click", function () {
     const correctAnswers = FindCorrectAnswer(); // Get the correct answers for the current level

     correctAnswers.forEach((answer, index) => {
         const input = document.getElementById(`InputUser_TXT${index + 1}`).value.trim();
         const parentBox = document.querySelectorAll('.input-box')[index];

         if (parseInt(input) === answer) {
             parentBox.classList.add('correct');
             parentBox.classList.remove('wrong');
             document.getElementById(`TxtBox${index + 1}_CorrectAnswer`).textContent = answer;
             correctCount++; // Increment the counter if the answer is correct
         } else {
             parentBox.classList.add('wrong');
             parentBox.classList.remove('correct');
         }
     });

     // Check if all answers are correct
     if (correctCount === 4) {
         Highscore++;
         document.getElementById('highscore').textContent = Highscore;
         checkPressed = true;
         document.getElementById("checkanswer").disabled = true;
         HIGHSCORE();
         clearInterval(interval);
     } else {
       
         checkPressed = false;
      
         
     }
 });

 // Function to find the correct answers based on the level
 function FindCorrectAnswer() {
     let correctAnswers = [];
     if (currentLevel === 'easy') {
         correctAnswers = [
             randomNumber + 10,
             randomNumber + 1,
             randomNumber - 10,
             randomNumber - 1
         ];
     } else if (currentLevel === 'medium') {
         correctAnswers = [
             randomNumber + 20,
             randomNumber + 5,
             randomNumber - 20,
             randomNumber - 5
         ];
     } else if (currentLevel === 'hard') {
         correctAnswers = [
             randomNumber + 50,
             randomNumber + 10,
             randomNumber - 50,
             randomNumber - 10
         ];
     }

     return correctAnswers;
 }

 // Function to reset the timer
 function resetTimer() {
     clearInterval(interval);
     interval = setInterval(function () {
         if (countdown <= 0) {
             clearInterval(interval);
             document.getElementById('Time').textContent = "0";
             disableinputfield();
             EnableBTN();
             
          //   alert("Game Over! Time's up!");
         
         } else {
             document.getElementById('Time').textContent = countdown;
             countdown--;

         }
     }, 1000);
 }

 // Start the game when the page loads
 window.onload = () => {
     setLevel('easy');  // Default level to 'easy'

 };


 function ColorButtons(){
    var button = document.getElementById("hardButton");
button.classList.add("Hard");

var button =  document.getElementById("mediumButton");
button.classList.add("Medium")

var button = document.getElementById("easyButton");
button.classList.add("Easy")
}




 generateRandomNumber();
setInterval(AllBoxesFilled, 0);
updatePlaceholders();  // Set initial placeholders on page load