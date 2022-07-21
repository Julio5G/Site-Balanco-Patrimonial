function chooseRightFunction(event) {
    if (event.path[0].tagName == "IMG") {
        if (event.path[0].attributes[0].value == "img/editar.svg") {
            console.log("Editar");
        } else {
            removeClickedRow(event.path[2]);
        }
    }
}