// Crie uma função que escreva 2 números e retorne o maior deles
function numeroMaior(a,b) {
    return Math.max(a,b)
}

let num = numeroMaior(5,9)
alert('O Número maior é ' +num)

//Escreva uma função que receba um número e retorne true se ele for par e false caso contrário. 
let num1  =  Number(prompt("Digite um número") )
function parImpar() {
    if (num1 % 2 == 0){
        return true
    } else{
        return false
    } 
}

let res = parImpar(num1)
alert("O número é Par? " + res)

//Desenvolva uma função que calcule o fatorial de um número
function valorFatorial(){
    alert("Digite um número e descubra o seu fatorial!!");
    let numd = Number(prompt("Digite o número:"));
    let fat = 1;

    for (let i = 1; i <= numd; i++) {
        fat *= i;
    }

   
}

let fatorialf = valorFatorial(numd)
alert("O valor fatorial de " + numd + " é: " + fatorialf)

//Crie uma função que receba uma lista de números e retorne a média deles
function calcularMediaLista() {
    let listaDeNumeros = [];
    let continuar = true;

    alert("Vamos calcular a média. Digite os números um por um.");

    while (continuar) {
        let entrada = prompt("Digite um número (ou deixe em branco/clique em Cancelar para parar):");

        if (entrada === null || entrada.trim() === "") {
            continuar = false;
        } else {
            let numero = Number(entrada);

            if (!isNaN(numero)) {
                listaDeNumeros.push(numero);
            } else {
                alert("Por favor, digite apenas números válidos.");
            }
        }
    }

    if (listaDeNumeros.length > 0) {
        let soma = 0;
        
        for (let i = 0; i < listaDeNumeros.length; i++) {
            soma += listaDeNumeros[i];
        }

        let media = soma / listaDeNumeros.length;

        alert("Números digitados: " + listaDeNumeros.join(", "));
    } else {
        alert("Nenhum número foi inserido.");
    }
}
let med = calcularMediaLista(listaDeNumeros)
alert("A média da lista é: " + media.toFixed(2));

//Implemente uma função que converta temperatura Celsius para Fahrenheit
function celciusParaFahrenheit(){
    alert("Converta a temperatura de Celsius para Fahrenheit.")
    let celsius = Number(prompt("Digite o valor em Graus Celsius: "))
    let fahrenheit = (celsius * 1.8) + 32
}

let temp = celciusParaFahrenheit(fahrenheit)
alert("A temperatura em graus Fahrenheit é: "+temp)


