function GenerateRandomNumber() {
    Reset_GameBoxes_And_More();
    DisableBTN();
    // Correct random number generation
    const randomNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
    document.getElementById('randomNumber').textContent = randomNumber;
}

function Reset_GameBoxes_And_More() {
    // Reset input boxes
    document.getElementById('InputUser_TXT1').value = "";
    document.getElementById('InputUser_TXT2').value = "";
    document.getElementById('InputUser_TXT3').value = "";
    document.getElementById('InputUser_TXT4').value = "";

    // Clear correct answer displays if needed
    document.getElementById('TxtBox1_CorrectAnswer').textContent = "";
    document.getElementById('TxtBox2_CorrectAnswer').textContent = "";
    document.getElementById('TxtBox3_CorrectAnswer').textContent = "";
    document.getElementById('TxtBox4_CorrectAnswer').textContent = "";
}


function EnableBTN(){
    const button = document.getElementById('button1');
    button.disabled = false;
    button.classList.remove('disable')
    button.classList.add('enable')
}
function DisableBTN(){
    const button = document.getElementById('button1')
    button.disabled = true;
    button.classList.add('disable')
    button.classList.remove('enable')
}




function CheckAnswer() {
    // Get the displayed random number
    const randomNumber = parseInt(document.getElementById('randomNumber').textContent);

    // Calculate correct answers
    const Box1_Correct_Answer = randomNumber + 10;
    const Box2_Correct_Answer = randomNumber + 1;
    const Box3_Correct_Answer = randomNumber - 10;
    const Box4_Correct_Answer = randomNumber - 1;

    // Get user inputs
    const userinputBOX1 = document.getElementById('InputUser_TXT1').value;
    const userinputBOX2 = document.getElementById('InputUser_TXT2').value;
    const userinputBOX3 = document.getElementById('InputUser_TXT3').value;
    const userinputBOX4 = document.getElementById('InputUser_TXT4').value;
 

    // Display correct answers
    document.getElementById('TxtBox1_CorrectAnswer').textContent = Box1_Correct_Answer;
    document.getElementById('TxtBox2_CorrectAnswer').textContent = Box2_Correct_Answer;
    document.getElementById('TxtBox3_CorrectAnswer').textContent = Box3_Correct_Answer;
    document.getElementById('TxtBox4_CorrectAnswer').textContent = Box4_Correct_Answer;

    if(userinputBOX1 != null && userinputBOX2 != null && userinputBOX3 != null && userinputBOX4 != null){
    // Check user inputs against correct answers
    if (userinputBOX1 == Box1_Correct_Answer) {
        console.log("TxtBox 1 Correct Answer");
        document.getElementById('InputUser_TXT1').classList.add('correct')
        document.getElementById('InputUser_TXT1').classList.remove("wrong")

    } else {
        console.log("Wrong input for Box 1");
        document.getElementById('InputUser_TXT1').classList.add('wrong')
        document.getElementById('InputUser_TXT1').classList.remove('correct')
    }

    if (parseInt(userinputBOX2) === Box2_Correct_Answer) {
        console.log("TxtBox 2 Correct Answer");
        document.getElementById('InputUser_TXT2').classList.add('correct')
        document.getElementById('InputUser_TXT2').classList.remove("wrong")

    } else {
        console.log("Wrong input for Box 2");
        document.getElementById('InputUser_TXT2').classList.remove('correct')
        document.getElementById('InputUser_TXT2').classList.add("wrong")
    }

    if (parseInt(userinputBOX3) === Box3_Correct_Answer) {
        console.log("TxtBox 3 Correct Answer");
        document.getElementById('InputUser_TXT3').classList.add('correct')
        document.getElementById('InputUser_TXT3').classList.remove("wrong")
    } else {
        console.log("Wrong input for Box 3");
        document.getElementById('InputUser_TXT3').classList.remove('correct')
        document.getElementById('InputUser_TXT3').classList.add("wrong")
    }

    if (parseInt(userinputBOX4) === Box4_Correct_Answer) {
        console.log("TxtBox 4 Correct Answer");
        document.getElementById('InputUser_TXT4').classList.add('correct')
        document.getElementById('InputUser_TXT4').classList.remove("wrong")
     
    } else {
        console.log("Wrong input for Box 4");
        document.getElementById('InputUser_TXT4').classList.remove('correct')
        document.getElementById('InputUser_TXT4').classList.add("wrong")
    }
}
console.log("Pls input in all text boxes")

}
