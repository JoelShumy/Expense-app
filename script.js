const tableBody = document.getElementById('tableResult');
const table = document.querySelector('table')

function addExpense(event){
/*
    const ligne = document.createElement('tr');
    const cellule = document.createElement('td');

    cellule.innerHTML = nameExpense;
    ligne.appendChild(cellule);
    resultTable.appendChild(ligne);*/



    let nameExpense = document.getElementById('nameAmount');
    let dateExpense = document.getElementById('dateAmount');
    let amountExpense = document.getElementById('amount_to_ad');

    const newRow = tableBody.insertRow(tableBody.rows.length);
    let cel1 = newRow.insertCell(0)
    let cel2 = newRow.insertCell(1)
    let cel3 = newRow.insertCell(2)
    let cel4 = newRow.insertCell(3)

    cel1.innerHTML = nameExpense.value;
    cel2.innerHTML = dateExpense.value;
    cel3.innerHTML = amountExpense.value;
    cel4.innerHTML = "<button class='deleteBtn'>Delete</button>"
    
    nameExpense.value ='';
    dateExpense.value ='';
    amountExpense.value ='';

    event.preventDefault();
}

function deleteRow(e){

    if(e.target.classList.contains('deleteBtn')) {
        const btn = e.target;
        btn.closest("tr").remove();
    } else {
        alert('ceci n"est pas un bouton supprimé')
    }
}

// https://www.w3schools.com/jsref/met_table_deleterow.asp

table.addEventListener('click', deleteRow)
const add = document.getElementById('submit');
add.addEventListener('click', addExpense);



