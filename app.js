const btnSetBudget = document.querySelector(".setBudget");
const btnCheckAmount = document.querySelector(".checkAmount");
const budgetInput = document.querySelector(".inputAmount");
const productNameInput = document.querySelector(".product");
const productValueInput = document.querySelector(".costProduct");

const budgetToDisplay = document.querySelector(".totalBudget");
// const expensesToDisplay = document.querySelector(".totalExpenses");
// const balanceToDisplay = document.querySelector(".balance");

const listDisplay = document.querySelector(".list-item");

const listItem = document.createElement("li");
//1 dodać do tego elementu klasę taka jaką on ma w html
listItem.setAttribute('class', 'list-item');
//2 żeby móc dodać div i button trzeba go stworzyć w js
const divElementName = document.createElement("div");
divElementName.setAttribute('class', 'col-1');
const divElementCost = document.createElement("div");
divElementCost.setAttribute('class', 'col-2');
const btnEdit = document.createElement("button");
btnEdit.className = "btn-icon";   
const btnDelete = document.createElement("button");
btnDelete.className = "btn-icon";

// w guziku na razie stworzyłeś sam button w środku button ma element i więc musisz stworzyć element html i dodać mu klasę

const iconItem = document.createElement("i");
iconItem.setAttribute('class', 'editIcon');
document.body.appendChild(iconItem);

// odnieść się do ul

const tableList = document.getElementById("idTable");
// tableList.appenChild(listItem);


// stworzyć elementy znajdujące się w li i je przypisać do



//3 dodac do tego elementu dzieci div x2 i button x2 




// lista 

let budgetValue = 0;
let productName = "";
let expensesValue = 0;

// Expense List zmienna
// const listItemsArray = [{name: 'col-1', value: 'col-2' }];







btnSetBudget.addEventListener("click", () => {
    budgetValue = budgetInput.value;
    // console.log(budgetValue)
    budgetToDisplay.innerHTML = budgetValue;
});

btnCheckAmount.addEventListener("click", () => {
    // console.log("kliknąłem na element B");
    productName = productNameInput.value;
    expensesValue = productValueInput.value;
    listDisplay.innerHTML = listItemsArray;
});





// Po kliknięciu w button "Set Budget" wartość z input powinna przenieść się do "Total Budget"

// Po kliknięciu w button "Check Amount" wartość z input text i number powinna przenieść się do Tablicy "Expence List" która będzie miała wartość Tekstową i numeryczną z dodatkową opcją Edytuj i usuń.

