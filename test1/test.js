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
        newCell.addEventListener('click',(e) => excute_event(e.target,newRow));
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

const excute_event = (cell,row) =>{
  change_color(cell);
  get_index(cell,row)
}
const get_index = (cell,row) => {
  const row_index = get_row_index(row);
  const cell_index = get_column_index(cell);
  console.log(`row : ${row_index}`);
  console.log(`cell : ${cell_index}`);
}

const change_color = (cell) => {
  var backgroundColor = cell.style.backgroundColor;
  if(backgroundColor=="black") cell.style.background = "white";
  else cell.style.background= "black";
}