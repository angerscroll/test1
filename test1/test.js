const create = document.getElementById("create_button");

create.addEventListener('click',() =>{
  create_table();
});


const create_table = () => {

  remove_child("table");
  const r = document.getElementById("row").value;
  const l = document.getElementById("column").value;

  const table = document.querySelector("table");
  for(x=0;x<r;x++){
    const newRow = table.insertRow();
      for(y=0;y<l;y++){
        const newCell = newRow.insertCell(y);
        newCell.addEventListener('click',() => {
          const rowIndex = get_row_index(newRow);
          const columnIndex = get_column_index(newCell);
          get_index(rowIndex,columnIndex,newCell);
        })
      }
  }
};

const remove_child = (id)=>{
  
  const remove_node = document.getElementById(id);

  remove_node.textContent = "";
  
};

const get_row_index = (row) => {
  return row.rowIndex;
}

const get_column_index = (cell) => {
  return cell.cellIndex;
}

const get_index = (r,c,n) => {
  const cell =n;
  change_color(cell);
}

const change_color = (cell) => {
  var backgroundColor = cell.style.background;
  if(backgroundColor=="black") cell.style.background = "white";
  else cell.style.background= "black";
}