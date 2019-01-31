console.dir(document);

document.getElementById("header").innerHTML = "<h1>JavaScript Made This!!!</h1>" + "<div><span class = name>Madie</span> wrote the JavaScript</div>";

document.getElementsByClassName("message left")[0].innerHTML = "What do you call a sketchy Italian neighborhood?";

document.getElementsByClassName("message right")[0].innerHTML = "What?";

document.getElementsByClassName("message left")[1].innerHTML = "Spaghetto";

document.getElementsByClassName("message right")[1].innerHTML = "lol, nice one dad.";

document.getElementById("clear-button").addEventListener("click", clearMessage);

function clearMessage() {
    document.getElementsByClassName("messages")[0].innerHTML = "";
}

document.getElementById("theme-drop-down").addEventListener("change", changeBackground);

function changeBackground(){
   for(var i = 0; i < document.getElementsByClassName("message left").length; i++){
   document.getElementsByClassName("message left")[i].style.backgroundColor = "black";
   document.getElementsByClassName("message right")[i].style.backgroundColor = "red";
   }
}

function newMessage() {
    var newMessage = document.createElement("div");
    newMessage.classList = "message right";
    newMessage.textContent = document.getElementById("messageInput").value
    document.getElementsByClassName("messages")[0].appendChild(newMessage)
    
}
 document.getElementById("addMessage").addEventListener("click", newMessage);
