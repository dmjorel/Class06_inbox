const foodItem = document.getElementById("foodBox");
const caloriesItem = document.getElementById("caloriesBox");
const container = document.getElementById("foodList");
const containerArray = [];

function addItems(){
    const foodInput = foodItem.value;
    const caloriesInput = caloriesItem.value;
    
    const newInput = document.createElement("li");
    newInput.textContent = `${foodInput} - ${caloriesInput}`;
    containerArray.push = ({food: foodInput, calories: caloriesInput});
    container.appendChild(newInput);
    foodInput.value = "";
    caloriesInput.value = "";
    // tried this method 01 but couldn't
    //containerArray = _.sortBy(containerArray, 'calories');
    //container.appendChild(newInput);
    
    /* tried this method 02 but nothing
    function sortList() {
        let container, i, switching, b, shouldSwitch;
        list = document.getElementById("foodList");
        switching = true;
        while (switching) {
            switching = false;
            b = list.getElementsByTagName("li");
            for (i = 0; i < (b.length - 1); i++) {
                shouldSwitch = false;
                if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
            if (shouldSwitch) {
                b[i].parentNode.insertBefore(b[i + 1], b[i]);
                switching = true;
            }
    }

    sortList();
} */
    
    
}
/*
// alternate method ... still couldn't complete ...

function sortItems(){
    const newContainerArray = [document.getElementsByTagName("li")];
    
    newContainerArray.sort();


    for (i=0; i<newContainerArray.length; i++){

    }

}*/