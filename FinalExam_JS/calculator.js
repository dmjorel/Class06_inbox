//Calculate Tip

const billtotal = document.getElementById("billamt");
const peopleTotal = document.getElementById("peopleamt");
const finalContainer = document.getElementById("totalAndTip");


function calculateTip() {

    const selectedTip = $('#serviceQual option:selected').attr('value');

    const actualTip = Number(selectedTip);

    const billPerCust = billtotal.value / peopleTotal.value;

    const tipPerCust = billPerCust * actualTip;

    const totalPerCust = billPerCust + tipPerCust;

    function displayTipPerCust(){
 
        const tipContainer = document.createElement("p");
        const tipText = document.createTextNode(`Tip per customer is: ${tipPerCust.toFixed(2)}$`);
        tipContainer.appendChild(tipText);
        finalContainer.appendChild(tipContainer);

    }

    function displayTotalPerCust(){

        const totalContainer = document.createElement("p");
        const totalText = document.createTextNode(`Total per customer is: ${totalPerCust.toFixed(2)}$`);
        totalContainer.appendChild(totalText);
        finalContainer.appendChild(totalContainer);

    }

    displayTipPerCust();

    displayTotalPerCust();

    displayAlert();

}


function displayAlert(){
    $.ajax("https://swapi.dev/api/people/20").done(alertFunction);
}



function alertFunction(data){
        console.log(data);
        const nameOFCharacterHere = data.name;
        alert(`You have won a ${nameOFCharacterHere} toy`);
        
}
