
// inserire problema

let parola_user = prompt("Inserisci parola")

// creaiamo una variabile prima con split per selezionare lettera per lettera.
const parola_pali = parola_user.split("")
console.log(parola_pali)

// usiamo la funzione reverse per invertirla
let parola_pali2 = parola_pali.reverse(parola_pali)
console.log(parola_pali2)


//infine usiamo la funzione join per riunirla
let parola_finale = parola_pali2.join("")

console.log(parola_finale)

if(parola_user === parola_finale){
    alert('GG sei un vocabolario ambulante')
}
else{
    alert('Ahi ahi, Cerca meglio su google')
}