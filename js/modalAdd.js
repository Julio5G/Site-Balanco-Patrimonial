let form = document.getElementsByClassName("modalAdd")[0];
form.addEventListener("submit", event => {
    event.preventDefault();
});

function getModal() {
    let form = document.getElementsByClassName("modalAdd");
    return form[0];
}

function openAddModal() {
    let modal = getModal();
    modal.classList.add("open");
}

function closeAddModal() {
    let form = getModal();
    form.reset();
    form.classList.remove("open");
}

function saveInfos() {
    findInfos();
    closeAddModal();
}

window.onclick = event => {
    let modal = getModal();
    if (event.target == modal) {
        modal.reset(); 
        modal.classList.remove("open");
    }
}