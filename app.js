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

function createTable() {


    function showDiv1() {
        const name1 = document.createElement("div");
        name1.setAttribute('class', 'col col-1');
        name1.setAttribute('data-label', "Product");
        btnLi.appendChild(name1);
    };
    
    function showDiv2() {
        const name2 = document.createElement("div");
        name2.setAttribute('class', 'col col-2');
        name2.setAttribute('data-label', "Cost");
        btnLi.appendChild(name2);
    };
    
    function showButton(editIconButton, deleteIconButton) {    
        const btnEdit = document.createElement("button");
        btnEdit.setAttribute('class', 'btn-icon btn-icon-edit');
        btnEdit.setAttribute('type', 'button');
        btnLi.appendChild(btnEdit);
        
        const btnDelete = document.createElement("button");
        btnDelete.setAttribute('class', 'btn-icon btn-icon-delete');
        btnDelete.setAttribute('type', 'button');
        btnLi.appendChild(btnDelete);
    
        const icon1 = document.createElement("i");
        icon1.setAttribute('class', editIconButton);  
        btnEdit.appendChild(icon1);

        const icon2 = document.createElement("i");
        icon2.setAttribute('class', deleteIconButton);      
        btnDelete.appendChild(icon2);
    };
    
    function showIdTable() {
        const tableList = document.getElementById("idTable");
        tableList.setAttribute('class', 'expenseTable')
        tableList.appendChild(btnLi);
        // btnLi.innerHTML = "Click Me"
    };   

    const btnLi = document.createElement("li");
    btnLi.setAttribute('class', 'list-item');

    showDiv1();
    showDiv2();
    showButton('editIcon fa-solid fa-pen-to-square','deleteIcon fa-solid fa-trash');
    // liLineButton2('deleteIcon fa-solid fa-trash');
    showIdTable();
}

createTable(); 
createTable(); 

    


// function clickButton() {
//     // alert('wcisnięto przycisk');    
// }
// btnCheckAmount.addEventListener('click', clickButton);


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




