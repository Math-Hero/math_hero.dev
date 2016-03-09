$(document).ready(function(){
	console.log("Document loaded");
	$("#btn-new-item").click(function(event){
		event.preventDefault(); // Prevents the entire page from refreshing when pressing the button
		var content = $("#content").val(); // Turns the input into a variable
		var priority = $("#priority").val(); // Turns the input into a variable
		var dueDate = $("#due_date").val(); // Turns the input into a variable
		var data = {
			"content": content,
			"priority": priority,
			"due_date": dueDate
		};
		$.post("../todo-json.php", data, function(){
			console.log("success");
		});
	});

	$("#btn-show-items").click(function(event){
		event.preventDefault();
		var dataLoad = function(){
            $.get("../todo-json.php")
                .done(function(data){
                    console.log(data);
                    data.forEach(function(element, index){
                        $("#todo-data").append("<tr> <td>" + element.content + "</td> <td>" + element.priority + "</td> <td>" + element.due_date + "</td> </tr>");
                        
                        
                    });
                });
        }

        dataLoad();
            

        
	});





});