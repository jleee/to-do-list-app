// <li>test <input type="checkbox"></li>

var btnNew = document.getElementById('btn-add');
btnNew.onclick = addNewTask;

function addNewTask(list) {
	var taskList = document.createElement('li');
	taskList.innerText = "test";

	var list = document.getElementById('to-do-list');
	list.appendChild(taskList);
}
