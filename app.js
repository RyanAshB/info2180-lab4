document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('searchButton').addEventListener('click', function () {

        fetch('superheroes.php')
            .then(response => response.json())
            .then(data => {

                let alertMessage = '';
                data.forEach(superhero => {
                    alertMessage += `${superhero.alias}\n`;
                });
                alert(alertMessage);
            })
            .catch(error => console.error('Error in search', error));
    });
});

