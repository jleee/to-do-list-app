function addNewList(list, itemText) {
	var taskList = document.createElement('li');
	taskList.textContent = itemText;

	list.appendChild(taskList);
}

var btnNew = document.getElementById('btn-add');

btnNew.onclick = function() {
	var inputTask = document.getElementById('input-task');
	var taskText = inputTask.value;

	if(!taskText) {
		return false;
	}﻿

	addNewList(document.getElementById('to-do-list'), taskText);
};