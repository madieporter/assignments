axios.get("https://api.vschool.io/madisonlynn/todo/").then(function(response) {

    console.log(response.data)

    var arr = response.data

    //Working
    arr.map(function(item) {
    document.getElementById("name").innerHTML += `${item.title}<br>`;
    document.getElementById("name").innerHTML += `${item.description}<br>`;
    document.getElementById("name").innerHTML += `Price: $ ${item.price}<br>`;
    document.getElementById("name").innerHTML += `<img src="${item.imgUrl}"/><br>`;
    });
})

//New code
var container = document.createElement("div");
var title = document.createElement("h3");
var para = document.createElement("p");
var input = document.createElement("input");
var imgUrl = document.createElement("img");
imgUrl.setAttribute("src, `${arr[i].imgUrl}")

