


/*
function createMultiplicationTable(rows, cols) {

  

    const table = document.createElement('table');

    for (let i = 1; i <= rows; i++) {
        const tr = document.createElement('tr');

        for (let j = 1; j <= cols; j++) {
            const td = document.createElement('td');
            td.textContent = `${i * j}`; // Displays multiplication result
            tr.appendChild(td);

           
           
        }
       
        table.appendChild(tr);
    }

    document.getElementById('table-container').appendChild(table);

}                                                   
const randomNumber = parseInt(document.getElementById('randomNumber').textContent);

console.log(randomNumber)
// Verifique se o valor obtido é um número válido
if (isNaN(randomNumber)) {  
    console.log("O valor em 'randomNumber' não é um número válido."); 
} else {
    let found = false; // Variável para controlar se o número foi encontrado

    for (let NumStat = 0; NumStat <= 100; NumStat++) {
        if (NumStat === randomNumber) {
            console.log(NumStat); // Imprime o número encontrado
            found = true; // Atualiza o flag para indicar que encontramos o número
            break; // Sai do loop, pois já encontramos o número
        }
    }

    if (!found) {
        console.log("NOT FOUND"); // Imprime a mensagem se não encontramos o número
    }
}
// Create a 10x10 multiplication table
createMultiplicationTable(10, 10);



*/