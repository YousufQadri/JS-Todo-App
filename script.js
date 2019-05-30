//Add Todo item to DOM
function addTodo() {
  var input = document.getElementById("inputTxt").value;
  var targetDiv = document.getElementById("div1");

  //Creating Delete Button
  var delBtn = document.createElement("button");
  delBtn.setAttribute("class", "delBtn");
  delBtn.setAttribute("onclick", "delTodo(this)");
  var delValue = document.createTextNode("X");
  delBtn.appendChild(delValue);

  //Creating Edit Button
  var editBtn = document.createElement("button");
  editBtn.setAttribute("class", "editBtn");
  editBtn.setAttribute("onclick", "editTodo(this)");
  var editValue = document.createTextNode("Edit");
  editBtn.appendChild(editValue);

  //Creating Span element
  var span = document.createElement("span");

  //Creating ul item
  var ulList = document.createElement("ul");

  //Creating li item
  var liItem = document.createElement("li");
  var txt = document.createTextNode(input);

  //Append both buttons to span
  span.appendChild(delBtn);
  span.appendChild(editBtn);

  //Append text node to li
  liItem.appendChild(txt);
  //Append span to li
  liItem.appendChild(span);
  //Append li to ul
  ulList.appendChild(liItem);

  //Adding ul to DOM
  targetDiv.appendChild(ulList);
}

//Delete Todo item from DOM
function delTodo(el) {
  var parent = el.parentNode.parentNode.parentNode;
  var child = el.parentNode.parentNode;
  parent.removeChild(child);
}

//Edit Todo item from DOM
function editTodo(el) {
  var parent = el.parentNode.parentNode;
  var child = el.parentNode;

  //Removing span of buttons
  parent.removeChild(child);

  var currentData = parent.innerText;
  parent.innerText = "";

  //Creating input box in li
  var inputEl = document.createElement("input");
  inputEl.setAttribute("type", "text");
  inputEl.setAttribute("value", currentData);
  inputEl.setAttribute("class", "inputBox");

  //Creating Span element
  var span = document.createElement("span");

  //Create Update btn
  var updBtn = document.createElement("button");
  updBtn.setAttribute("class", "updBtn");
  updBtn.setAttribute("onclick", "updateTodo(this)");
  var updValue = document.createTextNode("Update");
  updBtn.appendChild(updValue);

  //Append btn to span
  span.appendChild(updBtn);

  //Append input to li
  parent.appendChild(inputEl);

  //Append span to li
  parent.appendChild(span);
}
