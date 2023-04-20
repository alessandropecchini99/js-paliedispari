/* PALINDROMO */
// 1. Chiedere all’utente di inserire una parola
// 2. Creare una funzione per capire se la parola inserita è palindroma
// 3. Mostrare il risultato a schermo



// 1. CHIEDERE LA PAROLA
let parola = prompt(`Inserisci una parola:`).toLowerCase().replace(/\s+/g, '');
console.log(parola);

// 2. FUNZIONE CHECK PALINDROMO
contrario(parola)

function contrario(fun){
    arrParola = [];
    
    for (i = fun.length; i > 0; i--) {
        console.log(i);
    
        let prova = (fun[i - 1]);
        console.log(prova);
    
        arrParola.push(prova);
    }
    
    console.log(arrParola);
    
    const reverse = arrParola.join(``);
    console.log(reverse);
    
    // 3. MOSTRARE IL RISULTATO
    if (fun != reverse) {
        console.log(`Non è un palindromo`)
    } else {
        console.log(`Palindromo`)
    }
}


// ------------------------------


// ALTRO
function refreshPage(){
    window.location.reload();
} 