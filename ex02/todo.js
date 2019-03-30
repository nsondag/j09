function add() {
	var task = prompt("Enter a new task", "");
	if (task) {
		var task_node = document.createTextNode(task);
		var my_todo = document.getElementById('ft_list');
		var new_elem = document.createElement('div');
		new_elem.appendChild(task_node);
		my_todo.insertBefore(new_elem, my_todo.childNodes[0]);
		document.cookie = "cookie" + "=" + task;
		var cookie = document.cookie;
		console.log(cookie);
	var listItems = my_todo.getElementsByTagName("div");
	for (var i = 0; i < listItems.length; i++) {
 		 listItems[i].onclick = function remove() {
		 var check = confirm("Are you sure?");
		 if (check)
		 	this.parentNode.removeChild(this);}
	}
	}
}
