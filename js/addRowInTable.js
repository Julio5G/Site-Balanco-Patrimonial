function getElementsInForm() {
    let accountName = document.getElementById("accountName").value;
    let accountValue = document.getElementById("accountValue").value;
    let inputs = document.querySelectorAll("input[type=radio]");

    return {accountName, accountValue, inputs};
}

function findSelectInput(inputs) {
    let selectedInput;
    inputs.forEach(input => {
        if (input.checked) {
            selectedInput = input;
        }
    });
    return selectedInput;
}

function selectTable(tableClass) {
    var table = document.getElementsByClassName(tableClass);
    return table;
}

function findInfos() {
    let infos = getElementsInForm();
    accountName = infos.accountName;
    accountValue = infos.accountValue;
    inputs = infos.inputs;

    let selectedInput = findSelectInput(inputs);
    
    let tableClass = selectedInput.value;
    let table = selectTable(tableClass)[0];
    let tableNumber = 0;

    switch (tableClass) {
        case "table1":
            tableNumber = 1;
            break;
        case "table2":
            tableNumber = 2;
            break;
        case "table3":
            tableNumber = 3;
            break;
        case "table4":
            tableNumber = 4;
            break;
        case "table5":
            tableNumber = 5;
            break;
    }

    makeRow(accountName, accountValue, table, tableNumber); 
}

function makeRow(accName, accValue, table, tableNumber) { 
    let tableTemplate =
    `
        <tr">
            <td>${accName}</td>
            <td>R$</td>
            <td class="moneytd${tableNumber + 1}">${accValue}</td>
            <td><img src="img/editar.svg" alt ="Lapis e papel, clique para editar."></td>
            <td><img src="img/trash.svg" alt="Lixeira, clique para apagar."></td>
        </tr>
    `;
    addRowInDom(table, tableTemplate);
}

function addRowInDom(table, tableTemplate) {
    table.children[0].innerHTML += tableTemplate;
}