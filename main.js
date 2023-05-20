function addNewTask() {
  var list = document.getElementById("list");
  var text = document.getElementById("task_name").value;

    if(text.length === 0) {
      alert('tarefa tem que ter que ser mais complexa');
      return;
    }



  var listItem = document.createElement("li");
  listItem.className = "list-Item";

  const textElement = document.createTextNode(text);
  listItem.appendChild(textElement);
  list.appendChild(listItem);
}
