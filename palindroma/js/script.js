
// inserire problema

let parola_user = prompt("Inserisci una parola palindroma")

// creaiamo una variabile prima con split per selezionare lettera per lettera.
function parola_completa(parola){

    let parola_inversa = parola.split("") .reverse("") .join("")
    return parola_inversa
}

let parola_final = parola_completa(parola_user)

console.log(parola_final)

if(parola_user === parola_final){
    alert('complimentoni sai usare le parole palindrome')
}
else{
    alert('ahi ahi ritenta')
}