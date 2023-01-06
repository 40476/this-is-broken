function generateTable(x,y,style) {
  // creates a <table> element and a <tbody> element
  const tbl = document.createElement('table');
  const tblBody = document.createElement('tbody');

  // creating all cells
  for (let i = 0; i < x; i++) {
    // creates a table row
    const row = document.createElement('tr');

    for (let j = 0; j < y; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      const cell = document.createElement('td');
      const cellText = document.createTextNode(`${i},${j}`);
      cell.appendChild(cellText);
      cell.id='c'+i+'e'+j;
      alert(cell)
      row.appendChild(cell);
    }

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  document.body.appendChild(tbl);tbl.setAttribute('border','2');
}
generateTable(prompt('width?'),prompt('height?'))


//minified version
//function generateTable(e,t){const d=document.createElement("table"),n=document.createElement("tbody");for(let d=0;d<e;d++){const e=document.createElement("tr");for(let n=0;n<t;n++){const t=document.createElement("td"),o=document.createTextNode(`${d},${n}`);t.appendChild(o),t.id="c"+d+"e"+n,e.appendChild(t)}n.appendChild(e)}d.appendChild(n),document.body.appendChild(d),d.setAttribute("border","2")}generateTable(prompt("width?"),prompt("height?"));