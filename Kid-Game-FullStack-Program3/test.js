// Variables for question and result display elements

/*

const question = document.getElementById('question');
const result = document.getElementById('result');
const moreThanBtn = document.getElementById('moreThanBtn');
const lessThanBtn = document.getElementById('lessThanBtn');
const nextBtn = document.getElementById('nextBtn');

// Variables for random number comparison game
let number1;
let number2;
let RundTime = 0;

// Function to generate a random number and reset the game state
function generateRandomNumber() {
    RundTime++;
    Reset_GameBoxes_And_More();
    DisableBTN();
    const randomNumber = Math.floor(Math.random() * 100); // Random number between 1 and 100
    document.getElementById('randomNumber').textContent = randomNumber;
}



function Reset_GameBoxes_And_More() {
   
    document.getElementById('InputUser_TXT1').value = "";
    document.getElementById('InputUser_TXT2').value = "";
    document.getElementById('InputUser_TXT3').value = "";
    document.getElementById('InputUser_TXT4').value = "";

    document.getElementById('TxtBox1_CorrectAnswer').textContent = "";
    document.getElementById('TxtBox2_CorrectAnswer').textContent = "";
    document.getElementById('TxtBox3_CorrectAnswer').textContent = "";
    document.getElementById('TxtBox4_CorrectAnswer').textContent = "";
}

// Function to enable the CheckAnswer button
function EnableBTN() {
    const button = document.getElementById('checkanswer');
    button.disabled = false;
    button.classList.remove('disable');
    button.classList.add('enable');
}

// Function to disable the CheckAnswer button
function DisableBTN() {
    const button = document.getElementById('checkanswer');
    button.disabled = true;
    button.classList.add('disable');
    button.classList.remove('enable');
}

// Function to check if all input boxes are filled
function AllBoxesFilled() {
    const userinputBOX1 = document.getElementById('InputUser_TXT1').value;
    const userinputBOX2 = document.getElementById('InputUser_TXT2').value;
    const userinputBOX3 = document.getElementById('InputUser_TXT3').value;
    const userinputBOX4 = document.getElementById('InputUser_TXT4').value;

    if (userinputBOX1 && userinputBOX2 && userinputBOX3 && userinputBOX4) {
        EnableBTN();  // Habilitar o botão quando todos os campos estão preenchidos
   
    } else {
        DisableBTN(); // Desabilitar o botão se algum campo está vazio
    }
}




document.getElementById("checkanswer").addEventListener("click", function() {
    const inputBoxes = document.querySelectorAll(".input-box input");
    

    const randomNumber = parseInt(document.getElementById('randomNumber').textContent);

    // Calculate correct answers
    const Box1_Correct_Answer = randomNumber + 10;
    const Box2_Correct_Answer = randomNumber + 1;
    const Box3_Correct_Answer = randomNumber - 10;
    const Box4_Correct_Answer = randomNumber - 1;

    // Get user inputs
    
 

    // Display correct answers
    document.getElementById('TxtBox1_CorrectAnswer').textContent = Box1_Correct_Answer;
    document.getElementById('TxtBox2_CorrectAnswer').textContent = Box2_Correct_Answer;
    document.getElementById('TxtBox3_CorrectAnswer').textContent = Box3_Correct_Answer;
    document.getElementById('TxtBox4_CorrectAnswer').textContent = Box4_Correct_Answer;


    inputBoxes.forEach((input, index) => {
        const parentBox = input.parentElement; // <div class="input-box">
        const userInput = input.value.trim(); // Obtém o valor do input
        
        // Respostas corretas para cada input
        let correctAnswer;
        switch (index) {
            case 0:
                correctAnswer = Box1_Correct_Answer; // Resposta da primeira caixa
                break;
            case 1:
                correctAnswer = Box2_Correct_Answer; // Resposta da segunda caixa
                break;
            case 2:
                correctAnswer = Box3_Correct_Answer; // Resposta da terceira caixa
                break;
            case 3:
                correctAnswer = Box4_Correct_Answer; // Resposta da quarta caixa
                break;
        }

        // Verifica se a resposta do usuário é correta ou não
        if (userInput == correctAnswer) {
            console.log(`TxtBox ${index + 1} Correct Answer`);
            parentBox.classList.add('correct');
            parentBox.classList.remove('wrong');
        } else {
            console.log(`Wrong input for TxtBox ${index + 1}`);
            parentBox.classList.add('wrong');
            parentBox.classList.remove('correct');
        }
    });
});


setInterval(AllBoxesFilled, 0);


function createNumberTable(randomNumber) {
    const table = document.createElement('table');
    let counter = 1;

    for (let i = 0; i < 10; i++) { // 10 rows
        const tr = document.createElement('tr');
        
        for (let j = 0; j < 10; j++) { // 10 columns per row
            const td = document.createElement('td');
            td.textContent = counter; // Set the cell's number

            // Highlight the random number cell in green
            if (counter === randomNumber) {
                td.classList.add('highlight');
            }

            tr.appendChild(td);
            counter++;
        }

        table.appendChild(tr);
    }

    document.getElementById('table-container').appendChild(table);
}

const randomNumber = Math.floor(Math.random() * 100) + 1; 
createNumberTable(randomNumber);


*/
// Variables for question and result display elements

// Variables for random number comparison game
 let randomNumber;
let Highscore = 0;
let correctCount = 0;
let checkPressed = false;
let countdown = 30;
let interval = 1;
function generateRandomNumber() {

  resetTimer();
    

    randomNumber = Math.floor(Math.random() * 100) + 1; // Número aleatório entre 1 e 100
    document.getElementById('randomNumber').textContent = randomNumber; // Exibe o número gerado
    createNumberTable(randomNumber);
    Reset_GameBoxes_And_More();
    DisableBTN();
    checkPressed = false;
    correctCount = 0;
}

function Reset_GameBoxes_And_More() {
    for (let i = 1; i <= 4; i++) {
        document.getElementById(`InputUser_TXT${i}`).value = "";
        document.getElementById(`TxtBox${i}_CorrectAnswer`).textContent = "";
        const parentBox = document.querySelectorAll('.input-box')[i - 1];
        parentBox.classList.remove('correct', 'wrong'); // Limpa as classes de cor
    }
    
}
function HIGHSCORE(){

    console.log("OLD HIGHSCORE " + Highscore);
    Highscore++;
    console.log("HAS ++++ HIGHWITH ONE NEW " +  Highscore)
    document.getElementById('highscore').textContent = Highscore

}



function EnableBTN() {
    const button = document.getElementById('checkanswer');
    button.disabled = false;
    button.classList.remove('disable');
    button.classList.add('enable');
}

function DisableBTN() {
    const button = document.getElementById('checkanswer');
    button.disabled = true;
    button.classList.add('disable');
    button.classList.remove('enable');
}

function AllBoxesFilled() {
    const allFilled = [...Array(4).keys()].every(i => document.getElementById(`InputUser_TXT${i + 1}`).value.trim() !== "");
    allFilled ? EnableBTN() : DisableBTN();
}

document.getElementById("checkanswer").addEventListener("click", function() {
    const correctAnswers = [
        randomNumber + 10,
        randomNumber + 1,
        randomNumber - 10,
        randomNumber - 1
        
    ];
   
    correctAnswers.forEach((answer, index) => {
      
        const input = document.getElementById(`InputUser_TXT${index + 1}`).value.trim();
        const parentBox = document.querySelectorAll('.input-box')[index];

        if (parseInt(input) === answer) {
            parentBox.classList.add('correct');
            parentBox.classList.remove('wrong');
            document.getElementById(`TxtBox${index + 1}_CorrectAnswer`).textContent = answer;
            correctCount++; // Incrementa o contador se a resposta estiver correta
        } else {
            parentBox.classList.add('wrong');
            parentBox.classList.remove('correct');
        }
       

       

    });
    if (correctCount == 4 && !checkPressed) {
        highscore++;
        HIGHSCORE();
        console.log(correctCount);
        checkPressed = true; // Mark that the button was clicked and all answers are correct
        document.getElementById("checkanswer").disabled = true; // Disable the button
    } else {
        console.log(correctCount);
        checkPressed = false; // Allow the user to try again
        document.getElementById("checkanswer").disabled = false; // Re-enable the button if not all answers are correct
    }

});

function enableinputfileds(){

    document.getElementById("InputUser_TXT1").disabled = true;
    document.getElementById("InputUser_TXT2").disabled = true;
    document.getElementById("InputUser_TXT3").disabled = true;
    document.getElementById("InputUser_TXT4").disabled = true;

}
function disableinputfield(){
    document.getElementById("InputUser_TXT1").disabled = false;
    document.getElementById("InputUser_TXT2").disabled = false;
    document.getElementById("InputUser_TXT3").disabled = false;
    document.getElementById("InputUser_TXT4").disabled = false;
}



function TIMECOUNTDOWN() {
    document.getElementById("Time").textContent = countdown;
    
    interval = setInterval(() => {
        countdown--;
        document.getElementById("Time").textContent = countdown;
        
        if (countdown <= 0) {
            clearInterval(interval);
            document.getElementById("Time").textContent = "Time's up!";
        }
    }, 1000); // Update every second

/*
    if(countdown <= 0){

        const allFilled = [...Array(4).keys()].every(i => document.getElementById(`InputUser_TXT${i + 1}`).countdown !== 0);
        allFilled ? enableinputfileds() : disableinputfield();
    }

        */
    
}

function resetTimer() {
    clearInterval(interval); // Clear the existing interval
    countdown = 30; // Reset countdown value
    document.getElementById("Time").textContent = countdown; // Update the display
    TIMECOUNTDOWN(); // Restart the countdown
}

function createNumberTable(randomNumber) {
    const tableContainer = document.getElementById('table-container');
    tableContainer.innerHTML = ''; // Limpa a tabela anterior
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

// Inicializa o jogo ao carregar a página
generateRandomNumber();
setInterval(AllBoxesFilled, 0);


