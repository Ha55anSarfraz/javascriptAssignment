function generatetable() {
    let row = document.getElementById("row").value;
    let column = document.getElementById("col").value;

    console.log("Rows:" + row);
    console.log("Column:" + column);
    let table = document.getElementById("table");

    for (let r = 0; r < row; r++) {
        let tr = document.createElement("tr");

        for (let c = 0; c < column; c++) {
            let td = document.createElement("td");
            td.textContent = "-";
            td.contentEditable = true;
            tr.appendChild(td);

            if (r === 0) {
                let colRemoveBtn = document.createElement("button");
                colRemoveBtn.textContent = "❌";
                colRemoveBtn.onclick = function() {
                    removeColumn(c, table);
                };
                td.append(colRemoveBtn);
            }
        }

     
        //let tdRemove = document.createElement("td");
        let btn = document.createElement("button");
        btn.textContent = "❌";
        btn.onclick = function () {
            tr.remove();
        };
        //tdRemove.appendChild(btn);
        tr.appendChild(btn);

        table.appendChild(tr);
    }

    function removeColumn(colIndex, table) 
    {
        for (let row of table.querySelectorAll("tr")) 
        {
            let cells = row.querySelectorAll("td");
            if (cells[colIndex]) 
            {
                row.removeChild(cells[colIndex]);
            }
        }

    }
}
