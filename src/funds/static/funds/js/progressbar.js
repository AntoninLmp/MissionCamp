const moneyCollected = 150; // montant recolté
const moneyGoal = 5000; // montant objectif

let totalGoal = document.getElementById('total-goal');
let totalCollected = document.getElementById('total-collected');
let progressBar = document.getElementById('progressbarMoney');
let descriptionBar = document.getElementById('descriptionBar');

let pourcentage = (moneyCollected / moneyGoal) * 100;

progressBar.style.width = pourcentage + "%";
progressBar.innerHTML = pourcentage + "%";
descriptionBar.innerHTML = "Il y a " + pourcentage + "% de l'objectif collecté";

totalCollected.innerHTML = moneyCollected + "€"; 
totalGoal.innerHTML = moneyGoal + "€";

document.addEventListener('DOMContentLoaded', function() {
   fetch('static/funds/json/data.json')
    .then(response => response.json())
    .then(data => {
        const table = document.querySelector("#data_extrajobs tbody"); 
        data.extrajobs.forEach( extrajob => {
            console.log(extrajob);
            const row = `
                <tr>
                    <th>${extrajob.date}</th>
                    <td>${extrajob.description}</td>
                    <td>${extrajob.personnes} pers.</td>
                    <td>${extrajob.montant}€</td>
                </tr>
            `;
            table.innerHTML += row;
        });
    })
    .catch(error => console.log('Erreur : ' + error)); 
});