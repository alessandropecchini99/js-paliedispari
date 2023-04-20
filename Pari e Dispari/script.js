/* PARI E DISPARI */
// 1. Chiedere all’utente di scegliere tra PARI o DISPARI
//    E chiedere un numero da 1 a 5
// 2. Generare un numero random per la CPU da 1 a 5
// 3. somma dei due valori
// 4. SE somma è pari e la scelta dell'utente era pari ALLORA true - p.s.(con dispari stessa cosa)
// 5. Controllo SE hai vinto o perso



// 1. CHIEDERE PARI/DISPARI E UN NUMERO DA 1 A 5
const disPari = prompt(`Scegli Pari o Dispari`).toLowerCase();
const userNum = parseInt(prompt(`inserisci un numero da 1 a 5`));
console.log(disPari);
console.log(userNum);

// 2. GENERO CPU NUMBER
const cpuNum = (Math.floor(Math.random() * 5) + 1);
console.log(cpuNum);

// 3. SOMMO I VALORI
const somma = (userNum + cpuNum);
console.log(somma);

// 4. CONTROLLO CHI HA VINTO
const check = controllo(somma)
function controllo(check){
    if (check % 2 == 0) {
        return `pari`;
    } else {
        return `dispari`;
    }
}

console.log(check);

// 5. CONTROLLO VINCITA
if (disPari == check && userNum == cpuNum) {
    console.log(`Hai Vinto!`)
} else {
    console.log(`Hai Perso!`)
}


// ------------------------------


// ALTRO
function refreshPage(){
    window.location.reload();
} 