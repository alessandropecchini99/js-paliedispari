/* PALINDROMO */
// 1. Chiedere all’utente di inserire una parola
// 2. Creare una funzione per capire se la parola inserita è palindroma
// 3. Mostrare il risultato a schermo



// 1. CHIEDERE LA PAROLA
const check = document.getElementById(`btn_check`);

check.addEventListener(`click`,

function (){
    let parola = (document.getElementById(`parola`).value).toLowerCase().replace(/\s+/g, '');
    
    // 2. FUNZIONE CHECK PALINDROMO
    contrario(parola)
    function contrario(fun) {
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
        
        console.log(parola);
    
        // 3. MOSTRARE IL RISULTATO
        if (fun != reverse) {
            document.getElementById(`result`).innerHTML=`Non è un palindromo`
            console.log(`Non è un palindromo`)
        } else {
            document.getElementById(`result`).innerHTML=`E' un Palindromo!`
            console.log(`Palindromo`)
        }
    }
}

)


// ------------------------------


// ALTRO
function refreshPage(){
    window.location.reload();
} 