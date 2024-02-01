//Tombola

const generalNumbers = [];

// Para criar uma array com numeros de 1 a 76, sem precisar inserir manualmente.
/*const numbersofTheTombola = () => {
    const array = [];
    for(let i = 1; i<= 76; i++){
    array.push(i);
    };
    console.log(array);//Resultado 76 dentro da Função numbersofTheTombola
};
    numbersofTheTombola();
 
*/



const createTabellone = number => {
    const tombola = document.getElementsByClassName("tombola")[0];

    for (let i = 0; i < number; i++) {
    generalNumbers.push(i+1);

    const numberCellDiv = document.createElement("div");
    numberCellDiv.className = "numbers";

    numberCellDiv.innerText = (i+1);

    tombola.appendChild(numberCellDiv);
    
    console.log(generalNumbers);
    // until here, it was to fulfill the div 'tombola'
   
    // generate the event 'click' to get a random number inside the 'tombola'
    numberCellDiv.onclick = event => {
        console.log(event.currentTarget, i);
    };


    };

}

createTabellone(76);