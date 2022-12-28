const btnSetBudget = document.querySelector(".setBudget");
const btnCheckAmount = document.querySelector(".checkAmount");
const budgetInput = document.querySelector(".inputAmount");

const productNameInput = document.querySelector(".product");
const productValueInput = document.querySelector(".costProduct");

const budgetToDisplay = document.querySelector(".totalBudget");

// const expensesNameToList = document.querySelector(".col-1");
// const balanceToDisplay = document.querySelector(".balance");

const listDisplay = document.querySelector(".list-item");


// Funkcja

// zrobić funkcje która zrobi całe li z dziećmi 

// wrzucić do Funkcji rzeczy które się powtarzają czyli button edit i delete




function createTable(col1, col2, showLi, button, showEditButton, showDeleteButton) {
    const btnLi = document.createElement("li");
    btnLi.setAttribute('class', showLi)

    const name1 = document.createElement("div");
    name1.setAttribute('class', col1);
    name1.setAttribute('data-label', "Product");
    btnLi.appendChild(name1);

    const name2 = document.createElement("div");
    name2.setAttribute('class', col2);
    name2.setAttribute('data-label', "Cost");
    btnLi.appendChild(name2);


    const btnEdit = document.createElement("button");
    btnEdit.setAttribute('class', 'btn-icon btn-icon-edit');
    btnEdit.setAttribute('type', button);
    btnLi.appendChild(btnEdit);

    const btnDelete = document.createElement("button");
    btnDelete.setAttribute('class', 'btn-icon btn-icon-delete');
    btnDelete.setAttribute('type', button);
    btnLi.appendChild(btnDelete);


    const icon1 = document.createElement("i");
    icon1.setAttribute('class', showEditButton);
    btnEdit.appendChild(icon1);

    const icon2 = document.createElement("i");
    icon2.setAttribute('class', showDeleteButton);      
    btnDelete.appendChild(icon2);


    const tableList = document.getElementById("idTable");
    tableList.setAttribute('class', 'expenseTable')
    tableList.appendChild(btnLi);

    // btnLi.innerHTML = "Click Me"
    tableList.appendChild(btnLi);

 
    
}

createTable('col col-1', 'col col-2', 'list-item','button', 'editIcon fa-solid fa-pen-to-square', 'deleteIcon fa-solid fa-trash'); 
createTable('col col-1', 'col col-2', 'list-item','button', 'editIcon fa-solid fa-pen-to-square', 'deleteIcon fa-solid fa-trash'); 

function clickButton() {
    // alert('wcisnięto przycisk');
     
}
btnCheckAmount.addEventListener('click', clickButton);


// ROW 1

let budgetValue = 0;
let productName = "";
let expensesValue = 0;

btnSetBudget.addEventListener("click", () => {
    budgetValue = budgetInput.value;
    // console.log(budgetValue)
    budgetToDisplay.innerHTML = budgetValue;
});

// btnCheckAmount.addEventListener("click", () => {
//     // console.log("kliknąłem na element B");
//     productName = productNameInput.value;
//     expensesValue = productValueInput.value;
//     listItem.innerHTML = productName, expensesValue;   
// });




