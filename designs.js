
//variables to get canvas element,height,width and color input
const canvas = document.getElementById('pixelCanvas');
let tempH = $("#inputHeight");
let tempW = $("#inputWidth");
let color = $("#colorPicker");

// Event listner that calls make grid function on submit button .
$('#submit').click(function(evt) {
    evt.preventDefault();
    makeGrid();
});



// Function that creates grid and adds the selected color.
function makeGrid() {

    canvas.innerHTML = '';
    let height = tempH.val();
    let width = tempW.val();

    // Function that fills in color in a clicked cell.
    let addColor = function(cell) {
        cell.addEventListener('click', function() {
            cell.style.backgroundColor = color.val();
        });
    }

    // Creates grid and adds color to cell.
    for (let i = 0; i < height; i++) {
        let row = canvas.insertRow(i);
        for (let j = 0; j < width; j++) {
            let cell = row.insertCell(j);
            cell.addEventListener('click', addColor(cell));
        }
    }
}
