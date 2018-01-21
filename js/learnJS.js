var tableSoi = document.createElement('table');
var tableBody = '';

var i;

for (i = 0; i < 1; i++) {
    tableBody += '<tr><td>"хуй"</td></tr>';
}

console.log(tableBody);
tableSoi.innerHTML = tableBody;

//Чтобы DOM-узел был показан на странице, его необходимо вставить в document.
document.body.appendChild (tableSoi);


