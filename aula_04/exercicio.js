alert(" Seja bem vindo ao nosso site!!!");
let nome = prompt ("Qual seu nome?");
alert("Olá " +nome+"!");
let idade = prompt("Qual sua idade?");

if(idade >=18){
    console.log("Você é maior de idade")
}else{
    console.log("Você é menor de idade")
};

let resposta = confirm("Você deseja continuar?");
if(resposta) {
    alert("Você escolheu continuar.");
}else{
    alert("Você cancelou a ação.")
}

let num1 = Number(prompt("Digite um número:"))
let num2 = Number(prompt("Digite um número:"))
let soma = (num1 + num2)
console.log(" A soma dos números "+num1+ " + " +num2+ " = " +soma+ ".")

let num = prompt("Digite um número:");
let result = num*2

alert("O dobro do número" +num+ " é "+result)

let info = prompt("Digite o seu nome:")
let info2 = prompt("Digite a sua idade:")
console.log("O usuario " +info+ " com idade " +info2+ "terminou o login")

