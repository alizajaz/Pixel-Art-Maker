var sizePicker = document.querySelector("#sizePicker");
sizePicker.addEventListener("submit", function (event) {
    event.preventDefault();
    let h = document.getElementById("inputHeight").value;
    let w = document.getElementById("inputWidth").value;
    clearTable();
    makeGrid(h, w);
    colorGrid();
})

function clearTable(){
   let x = 1;
   let t = "table" + x;
   let row = document.getElementById(t);
   while (row !== null) {
       row.remove();
       x = ++x;
       t = "table" + x;
       row = document.getElementById(t);
   }
}

function makeGrid(h, w) { 
// Draws canvas

    var table = document.querySelector("#pixelCanvas");
    for (let i = 1; i <= h; i++) {
        table.insertAdjacentHTML("afterbegin", "<tr id = table" + i + "></tr>");
        var line = document.querySelector("#table" + i);
        for (let j = 1; j <= w; j++) {
            line.insertAdjacentHTML("afterbegin","<td id = cell" + i + j +"></td>");
        }
    }
}

// Adds color to cell
function colorGrid(){
    document.getElementById("pixelCanvas").addEventListener("click", function () {
      let colorElement = document.getElementById("colorPicker");
        let color = colorElement.value;
        let click = event.target.id;
        let elem = document.getElementById(click);
        let attrib = elem.hasAttribute("style");
        if (attrib == true) {
            elem.removeAttribute("style");
        } else {
            elem.style.backgroundColor = color;
        }
    })
}
