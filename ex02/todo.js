function add() {
	var task = prompt("Enter a new task", "");
	var todo = document.getElementById('ft_list');
	var new_todo = document.createElement('div');
	new_todo.appendChild(task);
}
