document.addEventListener('DOMContentLoaded', function () {
 
    document.getElementById('searchButton').addEventListener('click', function () {
        const userInput = document.getElementById('searchInput').value.trim();
        const sanitizedInput = sanitizeInput(userInput);


        fetch(`superheroes.php?query=${sanitizedInput}`)
            .then(response => response.json())
            .then(data => {

                displayResult(data);

            })
            .catch(error => console.error('Error:', error));
    });
});

function sanitizeInput(input) {
    return encodeURIComponent(input);
}

function displayResult(data) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    const userInput = document.getElementById('searchInput').value.trim();


    if (userInput === '') {
        resultDiv.innerHTML = '<ul>' +
            data.map(superhero => `<li>${superhero.alias}</li>`).join('') +
            '</ul>';
    } else {
        if (data.length > 0) {
            let matchFound = false;

         
            for (const superhero of data) {
                if (superhero.alias.toLowerCase() === userInput.toLowerCase() || superhero.name.toLowerCase() === userInput.toLowerCase()) {
                    resultDiv.innerHTML = `
                        <h1 class="resultHeading">Result</h1>
                        <h3>${superhero.alias}</h3>
                        <h4>${superhero.name}</h4>
                        <p>${superhero.biography}</p>
                    `;

                    matchFound = true;
                    break;  

                }
            }

            if (!matchFound) {
                resultDiv.innerHTML = `<h2 class="noSups">Superhero not found</h2>`;
            }
        } else {

            resultDiv.innerHTML = `<h2 class="noSups">Superhero not found</h2>`;
        }
    }
}

