document.getElementById("searchButton").addEventListener("click", function() {
    // Make an AJAX request
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "superheroes.php", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var superheroes = JSON.parse(xhr.responseText);

            var aliases = superheroes.map(function(superhero) {
                return superhero.alias;
                
            }).join("\n");

            alert(aliases);
        }
    };
    xhr.send();
});
