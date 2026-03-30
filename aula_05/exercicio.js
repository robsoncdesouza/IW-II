//1-Par ou Ímpar
alert("Descubra se o número é Par ou ímpar")
let num = prompt("Digite um número");
if(num % 2 == 0){
    console.log("Este numero é par")
}else{
    console.log("Este número é impar")
};


//2-Verificação de Maioridade
alert("Aqui você descubrira se é maior de idade!!")
let idade = prompt ("Digite sua idade:");
if(idade >=18){
    console.log("Você é maior de idade!!")
}else{
    console.log("Você é menor de idade!!")
}


//3-Contagem de 1 a 10
alert("Contagem de 1 a 10")
for(var i = 0; i < 11; i++){
    console.log(i)
}

//4-Contagem Regressiva
alert("Contagem regressiva do número digitado")
let num1 = prompt("Digite um número:");
while(num1 >=0){
    console.log(num1);
    num1 --;
}  
//5-Tabuada
alert('Tabuada do número digitado')
let numero = prompt("Digite um número:");

for (let i = 1; i <= 10; i++) {
  console.log(numero + " x " + i + " = " + (numero * i));
}

//6-Somatório
alert("Aqui será somado de 1 até o número digitado");
let somat = prompt("Digite o número");
let soma = 0;
for (let i = 1; i<= somat; i++){
    soma = soma + i;
}
console.log("A soma é: " +soma)


//7-Número Primo
alert("Número Primo ou não?")
let numerop = prompt("Digite um número:");
let primo = true;

for (let i = 2; i < numerop; i++) { // linha de repetição(repete varias vezes)
  if (numerop % i == 0) {
    primo = false;
  }
}

if (primo) {
  console.log("O número é primo");
} else {
  console.log("O número não é primo");
}

// //8-Login Simples
alert("Login Simples")
let usuario = prompt("Digite o nome do usuário:")
let senha = prompt("Digite a senha:")

while (usuario != "duda" || senha != "0702") { // !=(diferente de) ||(ou)

    if (usuario != "duda") {
        alert("Usuário errado")
    }

    if (senha != "0702") {
        alert("Senha errada")
    }

    usuario = prompt("Digite o nome do usuário novamente:")
    senha = prompt("Digite a senha novamente:")
}
alert("Login realizado com sucesso!")

//9. Soma de Números Positivos

alert("Soma de números positivos")
let nump;
let somap = 0 

while(true){
    nump = Number(prompt("Digite um número:"));
    if(nump <0){
        break
    }
    somap = somap + nump;
}
alert("A soma dos números positivos é: " +somap)


//10. Adivinhação
let numeroa = Math.floor(Math.random() * 10) + 1  // Math.random() → número aleatório ; * 10 → tamanho do intervalo ;Math.floor → tira as casas decimais ;+1 → começa do 1
let palpite = prompt("Adivinhe o número de 1 a 10")

while(palpite != numeroa){

    if(palpite > numeroa){
        alert("O número é menor")
    }

    if(palpite < numeroa){
        alert("O número é maior")
    }

    palpite = prompt("Tente novamente")
}
alert("Parabéns! Você acertou!!")

//11-Cálculo de Fatorial

alert("Digite um número e verá o seu fatorial!!")
let numfa = prompt("Digite um número")
let fatorial = 1

for(let i = 1 ; i <= numfa; i++){ // i <= numfa(Repita enquanto i for menor ou igual ao número.) ; i++ (Significa aumentar 1 no valor de i a cada repetição.)
    fatorial = fatorial * i
}
console.log("O valor fatorial é:" + fatorial) 

// 12- Validação de Nota
alert("validação de nota!!")
let notav

while(true){
    notav = Number(prompt("Digite um número entre 0 e 10 "))
    if(notav > 0 && notav < 10){
        console.log("Nota valida")
        break
    }else{
        console.log("Nota invalida")
    }     
}

// 13- Média de Notas
alert("Digite suas notas e descobrirá se foi aprovado ou não!!")
let nota1 = Number(prompt ("Digite a primeira nota:"))
let nota2 = Number(prompt ("Digite a segunda nota:"))
let nota3 = Number(prompt ("Digite a terceira nota:"))

let somam = (nota1 + nota2 + nota3) 
let media1 = somam / 3
console.log("A sua média é: "+media1)

if(media1 >= 7){
    console.log("Parabéns, você foi aprovado!!")
}else{
    console.log("Descupe, mas você foi reprovado")
}


//14-Caixa eletrônico
alert("Caixa eletrônico")
let valor = Number(prompt("Digite o valor:"))

let n100 = Math.floor(valor / 100)
valor = valor % 100

let n50 = Math.floor(valor / 50)
valor = valor % 50

let n20 = Math.floor(valor / 20)
valor = valor % 20

let n10 = Math.floor(valor / 10)
valor = valor % 10

let n5 = Math.floor(valor / 5)
valor = valor % 5

let n2 = Math.floor(valor / 2)
valor = valor % 2

let n1 = valor

console.log(n100 + " nota(s) de 100")
console.log(n50 + " nota(s) de 50")
console.log(n20 + " nota(s) de 20")
console.log(n10 + " nota(s) de 10")
console.log(n5 + " nota(s) de 5")
console.log(n2 + " nota(s) de 2")
console.log(n1 + " moeda(s) de 1")


//15. Números Ímpares
alert("Números ímpares:")

let numeroim = Number(prompt("Digite um número:"))

for(let i = 1; 1 <= numeroim; i++) {

    if(i % 2 != 0){
        console.log(i)
    } break
} 

