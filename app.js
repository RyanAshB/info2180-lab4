document.getElementById("searchButton").addEventListener("click", function() {
    // Make an AJAX request
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "superheroes.php", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Parse the JSON response
            var superheroes = JSON.parse(xhr.responseText);

            // Create a string with superhero aliases
            var aliases = superheroes.map(function(superhero) {
                return superhero.alias;
            }).join("\n");

            // Display the superhero aliases in an alert
            alert(aliases);
        }
    };
    xhr.send();
});
