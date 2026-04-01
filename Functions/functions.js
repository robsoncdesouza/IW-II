//1- Par ou Ímpar
function verificarParOuImpar() {
    alert("Descubra se o número é Par ou ímpar! ");
    
    let num = Number(prompt("Digite um número: "));

    if (num % 2 === 0) {
        console.log("Este número é par");
    } else {
        console.log("Este número é ímpar");
    }
}

//2- Verificação de Maioridade
function verificarMaioridade() {
    alert("Aqui você descobrirá se é maior de idade!!");
    
    let idade = Number(prompt("Digite sua idade: "));

    if (idade >= 18) {
        console.log("Você é maior de idade!!");
    } else {
        console.log("Você é menor de idade!!");
    }
}

//3- Contagem de 1 a 10
function contarAteDez() {
    alert("Contagem de 1 a 10");
    
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

//4- Contagem Regressiva
function contagemRegressiva() {
    alert("Contagem regressiva do número digitado: ");
    
    let num1 = Number(prompt("Digite um número: "));
    

    while (num1 >= 0) {
        console.log(num1);
        num1--;
    }
    
    console.log("Fim da contagem!");
}

//5- Tabuada
function gerarTabuada() {
    alert('Tabuada do número digitado');
    
    let numero = prompt("Digite um número:");

    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

//6- Somatório
function calcularSomatorio() {
    alert("Aqui será somado de 1 até o número digitado");
    
    let somat = Number(prompt("Digite o número"));
    let soma = 0;

    for (let i = 1; i <= somat; i++) {
        soma = soma + i; 
    }

    console.log("A soma é: " + soma);
}

//7- Número Primo
function verificarPrimo() {
    alert("Número Primo ou não?");
    
    let numerop = Number(prompt("Digite um número:"));
    let primo = true;

    if (numerop < 2) {
        primo = false;
    } else {
        for (let i = 2; i < numerop; i++) {
            if (numerop % i === 0) {
                primo = false;
                break;
            }
        }
    }

    if (primo) {
        console.log(`O número ${numerop} é primo!`);
    } else {
        console.log(`O número ${numerop} não é primo.`);
    }
}

//8- Login Simples
function realizarLogin() {
    alert("Login Simples");

    let usuario = prompt("Digite o nome do usuário: ");
    let senha = prompt("Digite a senha: ");

    while (usuario !== "duda" || senha !== "0702") {
        
        if (usuario !== "duda") {
            alert("Usuário errado!");
        }

        if (senha !== "0702") {
            alert("Senha errada!");
        }

        usuario = prompt("Digite o nome do usuário novamente: ");
        senha = prompt("Digite a senha novamente: ");
    }

    alert("Login realizado com sucesso!");
}

//9. Soma de Números Positivos
function somarPositivos() {
    alert("Soma de números positivos");
    let somap = 0;

    while (true) {
        let nump = Number(prompt("Digite um número (ou um negativo para parar): "));

        if (nump < 0) {
            break; 
        }else
            somap += nump; 
    }

    alert("A soma dos números positivos é: " + somap);
}

//10. Adivinhação

function jogarAdivinhacao() {
    let numeroa = Math.floor(Math.random() * 10) + 1;
    
    let palpite = prompt("Adivinhe o número de 1 a 10");

    while (palpite != numeroa) {
        let palpiteNum = Number(palpite);

        if (palpiteNum > numeroa) {
            alert("O número secreto é menor");
        } else if (palpiteNum < numeroa) {
            alert("O número secreto é maior");
        }

        palpite = prompt("Tente novamente: ");
    }

    alert("Parabéns! Você acertou!!");
}

//11-Cálculo de Fatorial
function calcularFatorial() {
    alert("Digite um número e verá o seu fatorial!!");
    let numfa = Number(prompt("Digite um número:"));
    let fatorial = 1;

    for (let i = 1; i <= numfa; i++) {
        fatorial *= i;
    }

    console.log("O valor fatorial de " + numfa + " é: " + fatorial);
}

//12- Validação de nota
function validarNota() {
    alert("Validação de nota!!");
    let notav;

    while (true) {
        notav = Number(prompt("Digite uma nota entre 0 e 10:"));

        if (notav >= 0 && notav <= 10) {
            console.log("Nota válida: " + notav);
            break;
        } else {
            alert("Nota inválida! Tente novamente.");
            console.log("Tentativa inválida: " + notav);
        }
    }
}