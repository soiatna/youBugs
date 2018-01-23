var tableBody = '',
    tdCellsBlack = '',
    tdCellsWhite = '',
    i,
    j,
    rows;

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

var colorCell = ["black", "white"],
    cheesLetter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
    cheesNumber = ['1', '2', '3', '4', '5', '6', '7', '8'],
    cheesFigure = [null, 'pawn', 'knight', 'bishop', 'queen', 'king'],
    cheesCell = [],
    numberColorCell;



for (var x = 0; x < 8; x++) {
        cheesCell[x]=[];

        for (var y = 0; y < 8; y++) {
            if(x % 2 == 0 && y % 2 !== 0) {
                numberColorCell = colorCell[0];
            } else if (x % 2 !== 0 && y % 2 == 0) {
                numberColorCell = colorCell[0];
            } else {
                numberColorCell = colorCell[1];
            }
            cheesCell[x][y] = [cheesLetter[x], cheesNumber[y], numberColorCell, cheesFigure [0]];
            }
        }
console.log(cheesCell);
