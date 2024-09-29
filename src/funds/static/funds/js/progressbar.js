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
