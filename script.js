


function addExpense(event){
/*
    const ligne = document.createElement('tr');
    const cellule = document.createElement('td');

    cellule.innerHTML = nameExpense;
    ligne.appendChild(cellule);
    resultTable.appendChild(ligne);*/

    const table = document.getElementById('tableResult');

    let nameExpense = document.getElementById('nameAmount');
    let dateExpense = document.getElementById('dateAmount');
    let amountExpense = document.getElementById('amount_to_ad');

    const newRow = table.insertRow(table.rows.length);
    let cel1 = newRow.insertCell(0)
    let cel2 = newRow.insertCell(1)
    let cel3 = newRow.insertCell(2)

    cel1.innerHTML = nameExpense.value;
    cel2.innerHTML = dateExpense.value;
    cel3.innerHTML = amountExpense.value;

    
    nameExpense.value ='';
    dateExpense.value ='';
    amountExpense.value ='';

    event.preventDefault();
}



const add = document.getElementById('submit');
add.addEventListener('click', addExpense);



