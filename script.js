//Add TODO item to DOM
function addTodo() {
  var input = document.getElementById("inputTxt").value;
  var targetDiv = document.getElementById("div1");

  //Creating Delete Button
  delBtn = document.createElement("button");
  delBtn.setAttribute("class", "delBtn");
  delBtn.setAttribute("onclick", "delTodo(delBtn)");
  var value = document.createTextNode("X");
  delBtn.appendChild(value);

  //Creating ul item
  var ulList = document.createElement("ul");

  //Creating li item
  var liItem = document.createElement("li");
  var txt = document.createTextNode(input);

  //Append text node to li
  liItem.appendChild(txt);
  //Append del btn to li
  liItem.appendChild(delBtn);
  //Append li to ul
  ulList.appendChild(liItem);

  //Adding ul to DOM
  targetDiv.appendChild(ulList);
}
