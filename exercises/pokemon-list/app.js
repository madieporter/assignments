axios.get("https://api.vschool.io/pokemon").then(function(response) {
    console.log(response.data.objects[0].pokemon)
    for (var i = 0; i < response.data.objects[0].pokemon.length; i++){
        var div = document.createElement("div");
        var text = document.createTextNode(`${response.data.objects[0].pokemon[i].name}`);
        div.appendChild(text)
        document.body.appendChild(div)
    };
})

