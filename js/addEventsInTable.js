let allTables = document.getElementsByTagName('table');

for (let i = 0; i < allTables.length; i++) {
    table = allTables[i];
    table.addEventListener("click", event => chooseRightFunction(event));
}
