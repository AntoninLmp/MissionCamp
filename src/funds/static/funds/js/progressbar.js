let moneyCollected = 0; // montant recolté
const moneyGoal = 5000; // montant objectif

let totalGoal = document.getElementById('total-goal');
let totalCollected = document.getElementById('total-collected');
let progressBar = document.getElementById('progressbarMoney');
let descriptionBar = document.getElementById('descriptionBar');

// Liste des extrajobs chargé avec un fichier json  
document.addEventListener('DOMContentLoaded', function() {
    fetch('static/funds/json/data.json', { cache: "no-store" })
    .then(response => response.json())
    .then(data => {
        const table = document.querySelector("#data_extrajobs tbody"); 
        console.log(data.extrajobs);
        data.extrajobs.forEach( extrajob => {
            const row = `
            <tr>
                <th>${extrajob.jour}</th>
                <td>${extrajob.description}</td>
                <td>${extrajob.personnes} pers.</td>
                <td>${extrajob.montant}€</td>
            </tr>
            `;
            table.innerHTML += row;
            moneyCollected += extrajob.montant;
        });
       updateMoneyCollected();
       totalGoal.innerHTML = moneyGoal + "€";
    })
    .catch(error => console.log('Erreur : ' + error)); 
});



function updateProgressBar(moneyCollected) {
    let pourcentage = ((moneyCollected / moneyGoal) * 100).toFixed(2);
    progressBar.style.width = pourcentage + "%";
    progressBar.innerHTML = pourcentage + "%";
    descriptionBar.innerHTML = "Il y a " + pourcentage + "% de l'objectif collecté";
}

function updateMoneyCollected() {
    totalCollected.innerHTML = moneyCollected + "€";
    updateProgressBar(moneyCollected);
}
