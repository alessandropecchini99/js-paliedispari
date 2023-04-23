/* PARI E DISPARI */
// 1. Chiedere all’utente di scegliere tra PARI o DISPARI
//    E chiedere un numero da 1 a 5
// 2. Generare un numero random per la CPU da 1 a 5
// 3. somma dei due valori
// 4. SE somma è pari e la scelta dell'utente era pari ALLORA true - p.s.(con dispari stessa cosa)
// 5. Controllo SE hai vinto o perso



// VARIABILI
const inputWord = document.getElementById(`word`);
const inputNum = document.getElementById(`number`);
const btnPlay = document.getElementById(`btn-play`);
const result = document.getElementById(`result`);

// btn-play
btnPlay.addEventListener(`click`,
    function() {
        
        // 1. CHIEDERE PARI/DISPARI E UN NUMERO DA 1 A 5
        const disPari = inputWord.value.toLowerCase();
        const userNum = parseInt(inputNum.value);
        console.log(disPari);
        console.log(userNum);

        // 2. GENERO CPU NUMBER
        const randomNum = randomNumber(1, 5);
        console.log(randomNum);
        
        // 3. SOMMO I VALORI
        const somma = (userNum + randomNum);
        console.log(somma);
        
        // 4. CONTROLLO CHI HA VINTO
        const check = controllo(somma)
        console.log(check);
        
        // 5. CONTROLLO VINCITA
        // if (disPari == check && userNum == randomNum) {
        if (disPari == controllo(somma)) {
            document.getElementById(`result`).innerHTML=`Hai Vinto!`;
            console.log(`Hai Vinto!`)
        } else {
            document.getElementById(`result`).innerHTML=`Hai Perso!`;
            console.log(`Hai Perso!`)
        }

    }
)


// ------------------------------


// FUNCTION
function randomNumber(min, max) {
    const random = (Math.floor(Math.random() * max) + min);
    return random
}

function controllo(check){
    if (check % 2 == 0) {
        return `pari`;
    } else {
        return `dispari`;
    }
}

function refreshPage(){
    window.location.reload();
} 