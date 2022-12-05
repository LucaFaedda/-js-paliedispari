// chiedere all'utente se vuole pari o dispari

let pari_dispari = prompt('Scelgi se pari o dispari')
console.log(pari_dispari)

// chiedere di inserire un numero da 1 a 5
let num_user = parseInt(prompt("Scegli un numero da 1 a 5"))
console.log(`Numero user: ${num_user}`)

// generiamo un numero random per il pc da 1 a 5 con una funzione
function generateRandomNumber(max)
{
   return Math.floor(Math.random() * max + 1 )
    
}

let num_pc = generateRandomNumber(5)

console.log(`Numero pc: ${num_pc}`)

// sommiamo i numeri 
function somma(num1,num2)
{
    somma = num1 + num2 // non scrivere let somma
}

// non dare nomi uguali a quelli della funzione

let numero_finale = somma(num_user, num_pc)
console.log(somma)



function pariDispari(pariedispari)
{
    if(numero_finale % 2 == 0){
        return  true
    }
    else{
        return  false
    }
}

let result = pariDispari(pari_dispari)
{
    if(pari_dispari === true){
    alert('hai vinto')
    }
    else{
        alert('hai perso')
    }

}    



