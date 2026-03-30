// Crie uma função que escreva 2 números e retorne o maior deles

function numeroMaior(a,b) {
    return Math.max(a,b)
}

let num = numeroMaior(5,9)
alert('O Número maior é ' +num)

//Escreva uma função que receba um número e retorne true se ele for par e false caso contrário. 
let num1  =  Number(prompt("Digite um número") )
function parImpar(num1) {
    if (num1 % 2 == 0){
        return true
    } else{
        return false
    } 
}

