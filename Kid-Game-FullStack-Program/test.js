// Variables for question and result display elements
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


/*
// Function to generate two random numbers for comparison question
function generateNumbers() {
    number1 = Math.floor(Math.random() * 100) + 1;
    number2 = Math.floor(Math.random() * 100) + 1;
    question.textContent = `Qual é maior: ${number1} ou ${number2}?`;
    result.textContent = '';
}
*/

/*
// Event listeners for comparison buttons
moreThanBtn.addEventListener('click', () => {
    result.textContent = number1 > number2 ? 'Correto!' : 'Incorreto!';
});

lessThanBtn.addEventListener('click', () => {
    result.textContent = number1 < number2 ? 'Correto!' : 'Incorreto!';
});

nextBtn.addEventListener('click', generateNumbers);

// Initialize the first question
generateNumbers();
*/




// Function to reset input fields and clear correct answer displays
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
     /*   CheckAnswer(); */
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

// Function to check the answers entered by the user



console.log("Pls input in all text boxes")
function checkBox(userInput, correctAnswer, elementId) {
    const inputElement = document.getElementById(elementId);
    if (userInput === correctAnswer) {
        console.log(`${elementId} Resposta Correta`);
        inputElement.classList.add('correct');
        inputElement.classList.remove('wrong');
    } else {
        console.log(`Entrada errada para ${elementId}`);
        inputElement.classList.remove('correct');
        inputElement.classList.add('wrong');
    }
}
