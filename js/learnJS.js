var tableBody = '';
var tdCellsBlack = '';
var tdCellsWhite = '';
var i;
var j;
var rows;

for (j = 1; j < 9; j++) {
    if((j%2) == 0) {
        rows = "black";
    }   else {
        rows = "white";
    }

    tdCellsBlack += '<td class="' + rows + ' "></td>';

    if((j%2) !== 0) {
        rows = "black";
    }   else {
        rows = "white";
    }
    tdCellsWhite += '<td class="' + rows + ' "></td>';

}


for (i = 1; i < 9; i++) {
    tableBody += '<tr>';
    if((i%2) !== 0) {
        tableBody += tdCellsBlack;
    }   else {
        tableBody += tdCellsWhite;
    }
    tableBody += '</tr>';
}

$('body').append ('<table></table>');
$('table').append(tableBody);



