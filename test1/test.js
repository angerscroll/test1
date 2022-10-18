var data = {"row":5,"cell":5,"matrix":"0010001100001000010001110"};

var matrix;

const create = document.getElementById("create_button");
const save = document.getElementById("save_button");
const load = document.getElementById("load_button");
create.addEventListener('click',() => create_table());
save.addEventListener('click',() => save_value());
load.addEventListener('click',() => init());

const create_table = () => {

  remove_child("table");
  const r = parseInt(document.getElementById("row").value);
  const l = parseInt(document.getElementById("column").value);
  
  matrix = make_matrix(r,l);

  const table = document.querySelector("table");
  for(var x=0;x<r;x++){
    const newRow = table.insertRow();
      for(var y=0;y<l;y++){
        const newCell = newRow.insertCell(y);
        newCell.addEventListener('click',(e) => excute_event(e.target,newRow));
      }
  }
};

const change_data = (idx) => {
  const row = idx[0];
  const cell =idx[1];
  if(matrix[row][cell] == 0 ) matrix[row][cell] = 1;
  else if (matrix[row][cell] == 1) matrix[row][cell] = 0;
  else console.log(err);
}
const make_matrix = (row,cell) => {
  var matrix = new Array(row);
  matrix.fill(0);
  for(var i=0;i<matrix.length;i++) {
    inner = new Array(cell);
    inner.fill(0);
    matrix[i] = inner;
  }
  return matrix;
}

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
  change_data(get_index(cell,row));
}
const get_index = (cell,row) => {
  const row_index = get_row_index(row);
  const cell_index = get_column_index(cell);
  return [row_index,cell_index];
}

const change_color = (cell) => {
  var backgroundColor = cell.style.backgroundColor;
  if(backgroundColor=="black") cell.style.background = "white";
  else cell.style.background= "black";
}

const save_value = () => {
  var arr = matrix;
  const row = arr.length;
  const cell = arr[0].length;
  var newArr = new Array();
  for(var intIndex = 0;intIndex<arr.length;intIndex++){
    var innerValue = arr[intIndex].join('');
    newArr.push(innerValue);
  }
  var value = newArr.join('');
  console.log(`row : ${row}, cell : ${cell}, data : ${value}`);
}

const init = () => {

  loadData();
};

const loadData = () => {
  const row = data.row;
  const cell = data.cell;
  const value = data.matrix;
  var arr = new Array(row);
  var count = 0;
  for (var idx = 0 ;idx<arr.length;idx++){
    var newArr = new Array();
    for(var inner = 0 ; inner<cell;inner++){
      const newValue = value.substring(count,count+1);
      newArr.push(newValue);
      count++
      
    }
    arr[idx] = newArr;
  }
  matrix = arr;
  create_table_two(row,cell,matrix);
}

const create_table_two = (r,l) => {

  remove_child("table");
  const table = document.querySelector("table");
  for(var x=0;x<r;x++){
    const newRow = table.insertRow();
      for(var y=0;y<l;y++){
        const newCell = newRow.insertCell(y);
        if(matrix[x][y]==1)newCell.style.backgroundColor="black";
        else newCell.style.backgroundColor="white";
        
        newCell.addEventListener('click',(e) => excute_event(e.target,newRow));
      }
  }
};