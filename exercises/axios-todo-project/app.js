axios.get("https://api.vschool.io/madisonlynn/todo/").then(function(response) {
    renderTodos(response.data)
})

function renderTodos(todos) {
    todos.forEach(function(todo) {
        var parent = document.createElement("div");
        parent.id = todo._id;
        var text = document.createTextNode(todo.title);
        parent.appendChild(text);

        var input = document.createElement("input");
        input.className = "input";
        input.type = "checkbox";
        parent.appendChild(input); 

        var button = document.createElement("button");
        button.className = "delete";
        var textFour = document.createTextNode("delete");
        button.appendChild(textFour);
        parent.appendChild(button);

        var description = document.createElement("p");
        description.className = "description";
        var textTwo = document.createTextNode(todo.description);
        description.appendChild(textTwo);

        var price = document.createElement("div");
        price.className = "price";
        var textThree = document.createTextNode(`Total Price: $ ${todo.price}`);
        price.appendChild(textThree);

        var imgUrl = document.createElement("img");
        imgUrl.setAttribute("src", `${todo.imgUrl}`)

        input.addEventListener("click", handleCheck);
        button.addEventListener("click", deleteTodo);

        

        if(todo.completed) {
            parent.classList.toggle("strikened");
            input.checked = true;
        }

        document.getElementById("todoList").appendChild(parent);
        document.getElementById("todoList").appendChild(description);
        document.getElementById("todoList").appendChild(price);
        document.getElementById("todoList").appendChild(imgUrl)
    })
}

function handleCheck(e) {
    e.target.parentNode.classList.toggle("strikened");
    var url = "https://api.vschool.io/madisonlynn/todo/" + e.target.parentNode.id;
    if (e.target.parentNode.classList == "strikened") {
        var checked = {
            "completed": true
        }
    } else {
        var checked = {
            "completed": false
        }
    } axios.put(url, checked).then(function(response) {
        console.log(response.data);
    }).catch(function(error){
        console.log(error);
    }
    )
}

function deleteTodo(e) {
    var url = "https://api.vschool.io/madisonlynn/todo/" + e.target.parentNode.id;
    axios.delete(url).then(function(response) {
        console.log(response.data);
    }).catch(function(error){
        console.log(error);
    })
} 

document.inputNew.addEventListener("click", function (e) {
    e.preventDefault;
    var url = "https://api.vschool.io/madisonlynn/todo/";
    var postNewToDo = {
        "title": document.getElementById("newTitle").value,
        "description": document.getElementById("newDescription").value,
        "price": document.getElementById("newPrice").value,
        "imgUrl": document.getElementById("newImage").value,
        "completed": document.getElementById("newCompleted").value
        }
        axios.post(url, postNewToDo).then(function(response) {
            console.log(response.data);
        }).catch(function(error){
            console.log(error);
        }
        )
})


