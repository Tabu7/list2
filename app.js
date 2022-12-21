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
listItem.setAttribute('class', 'list-item');


const tableList = document.getElementById("idTable");
tableList.appendChild(listItem);


const name1 = document.createElement("div");
name1.setAttribute('class', 'col col-1');
name1.setAttribute('data-label', "Product");
listItem.appendChild(name1);

const name2 = document.createElement("div");
name2.setAttribute('class', 'col col-2');
name2.setAttribute('data-label', "Cost");
listItem.appendChild(name2);

const btnEdit = document.createElement("button");
btnEdit.setAttribute('class', 'btn-icon');
btnEdit.setAttribute('type', 'button');
listItem.appendChild(btnEdit);

const btnDelete = document.createElement("button");
btnDelete.setAttribute('class', 'btn-icon');
btnDelete.setAttribute('type', 'button');
listItem.appendChild(btnDelete);


const icon1 = document.createElement("i");
icon1.setAttribute('class', 'editIcon fa-solid fa-pen-to-square');
btnEdit.appendChild(icon1);

const icon2 = document.createElement("i");
icon2.setAttribute('class', 'deleteIcon fa-solid fa-trash');      
btnDelete.appendChild(icon2);


// lista 

let budgetValue = 0;
let productName = "";
let expensesValue = 0;

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



