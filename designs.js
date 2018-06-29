// Select color input and value
let color = $('#colorPicker').val();

// Select size input and value
let height = $('#inputHeight').val();
let width = $('#inputWidth').val();

// select canvas
const canvas = document.getElementById('colorPicker').innerHTML;

// event listner that calls makeGrid function on submit button
$('#submit').click(function(evt){
    evt.preventDefault();
    makeGrid();
})

// function that creates grid and adds the selected color
function makeGrid() {
    //function that fills in color in a clicked cell
    let addColor = function(cell){
        cell.addEventListner('click', function(){
            cell.style.backgroundColor = color;
        });
    }
    //create grid and adds color to cell
    for(let i=0; i<height; i++){
        let row = canvas.insertRow(i);
        for(let j=0; j<width; j++){
            let cell = row.insertCell(j);
            cell.addEventListner('click', addColor(cell));
        }
    }
}
