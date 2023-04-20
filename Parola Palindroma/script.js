/* PALINDROMO */
// 1. Chiedere all’utente di inserire una parola
// 2. Creare una funzione per capire se la parola inserita è palindroma
// 3. Mostrare il risultato a schermo



// 1. CHIEDERE LA PAROLA
let parola = prompt(`Inserisci una parola:`).toLocaleLowerCase().trim();
console.log(parola);

// 2. FUNZIONE CHECK PALINDROMO
arrParola = [];
for (i = parola.length; i > 0; i--) {
    console.log(i);

    let prova = (parola[i - 1]);
    console.log(prova);

    arrParola.push(prova);
}

console.log(arrParola);

const reverse = arrParola.join(``);
console.log(reverse);

if (parola != reverse) {
    console.log(`Non è un palindromo`)
} else {
    console.log(`Palindromo`)
}


// ------------------------------


// ALTRO
function refreshPage(){
    window.location.reload();
} 