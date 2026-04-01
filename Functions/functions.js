//1 - Par ou Ímpar
function verificarParOuImpar(num) {
    alert("Descubra se o número é Par ou ímpar! ");
    
    let num = Number(prompt("Digite um número: "));

    if (num % 2 === 0) {
        console.log("Este número é par");
    } else {
        console.log("Este número é ímpar");
    }
}

console.log(verificarParOuImpar(5))

//2 - Verificação de Maioridade
function verificarMaioridade(idade) {
    alert("Aqui você descobrirá se é maior de idade!!");
    
    let idade = Number(prompt("Digite sua idade: "));

    if (idade >= 18) {
        console.log("Você é maior de idade!!");
    } else {
        console.log("Você é menor de idade!!");
    }
}

console.log(verificarMaioridade(21))

//3 - Contagem de 1 a 10
function contarAteDez() {
    alert("Contagem de 1 a 10");
    
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

console.log(contarAteDez())

//4 - Contagem Regressiva
function contagemRegressiva(num1) {
    alert("Contagem regressiva do número digitado: ");
    
    let num1 = Number(prompt("Digite um número: "));
    

    while (num1 >= 0) {
        console.log(num1);
        num1--;
    }
    
    console.log("Fim da contagem!");
}

console.log(contagemRegressiva(10))

//5 - Tabuada
function gerarTabuada(numero) {
    alert('Tabuada do número digitado');
    
    let numero = prompt("Digite um número:");

    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

console.log(gerarTabuada(7))

//6 - Somatório
function calcularSomatorio(somat) {
    alert("Aqui será somado de 1 até o número digitado");
    
    let somat = Number(prompt("Digite o número: "));
    let soma = 0;

    for (let i = 1; i <= somat; i++) {
        soma = soma + i; 
    }

    console.log("A soma é: " + soma);
}

console.log(calcularSomatorio(5))

//7 - Número Primo
function verificarPrimo(numerop) {
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
        console.log(`O número ${numerop} não é primo!`);
    }
}

console.log(verificarPrimo(2))

//8 - Login Simples
function realizarLogin(usuario, senha) {
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

alert(realizarLogin("duda", "0702"))

//9 - Soma de Números Positivos
function somarPositivos(nump) {
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

console.log(somarPositivos(8, 9, 10, -1))

//10 - Adivinhação

function jogarAdivinhacao(numeroa) {
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

alert(jogarAdivinhacao(8))

//11 - Cálculo de Fatorial
function calcularFatorial(numfa) {
    alert("Digite um número e verá o seu fatorial!!");
    let numfa = Number(prompt("Digite um número:"));
    let fatorial = 1;

    for (let i = 1; i <= numfa; i++) {
        fatorial *= i;
    }

    console.log("O valor fatorial de " + numfa + " é: " + fatorial);
}

console.log(calcularFatorial(12))

//12 - Validação de nota
function validarNota(notav) {
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

console.log(validarNota(5))

//13 - Média de Notas
function verificarAprovacao(n1, n2, n3) {
    let media = (n1 + n2 + n3) / 3;
    console.log("A sua média é: " + media.toFixed(2));

    if (media >= 7) {
        console.log("Parabéns, você foi aprovado!!");
    } else {
        console.log("Desculpe, mas você foi reprovado!!");
    }
    return media;
}

console.log(verificarAprovacao(5, 6, 9))

//14 - Caixa eletrônico
function calcularNotas(valor) {
    console.log("Valor do saque: R$ " + valor);
    
    const notas = [100, 50, 20, 10, 5, 2, 1];
    
    notas.forEach(nota => {
        let quantidade = Math.floor(valor / nota);
        valor = valor % nota;
        
        if (quantidade > 0) {
            let tipo = nota === 1 ? "moeda(s)" : "nota(s)";
            console.log(`${quantidade} ${tipo} de ${nota}`);
        }
    });
}

console.log(calcularNotas(200))

// 15 - Números Ímpares
function listarImpares(limite) {
    console.log("Números ímpares até " + limite + ":");
    
    for (let i = 1; i <= limite; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}

console.log(listarImpares(15))