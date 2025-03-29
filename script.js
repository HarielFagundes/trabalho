// atividade 1 
function calcularCustoEnergia() {
    // Recebe o valor do salário mínimo e a quantidade de quilowatts consumidos
    const salarioMinimo = parseFloat(prompt("Digite o valor do salário mínimo (em R$):"));
    const consumoKw = parseFloat(prompt("Digite a quantidade de quilowatts consumidos:"));
  
    // Valida as entradas
    if (isNaN(salarioMinimo) || salarioMinimo <= 0) {
      alert("Por favor, insira um valor válido para o salário mínimo.");
      return;
    }
    if (isNaN(consumoKw) || consumoKw <= 0) {
      alert("Por favor, insira uma quantidade válida de quilowatts consumidos.");
      return;
    }
  
    // Calcula o valor de cada quilowatt
    const valorKw = salarioMinimo / 7 / 100; 
  
    // Calcula o valor total a ser pago
    const valorTotal = valorKw * consumoKw;
  
    // Calcula o valor com desconto de 10%
    const valorComDesconto = valorTotal * 0.90;
  
    // Exibe os resultados
    alert(`Valor de cada quilowatt: R$ ${valorKw.toFixed(2)}
  Valor total a ser pago: R$ ${valorTotal.toFixed(2)}
  Valor com desconto de 10%: R$ ${valorComDesconto.toFixed(2)}`);
  }
  
  // Chama a função para executar o cálculo
  calcularCustoEnergia();
  
  // exertcico 2 

  // Solicita ao usuário o valor do produto
let valorProduto = parseFloat(prompt("Digite o valor do produto:"));

// Calcula o valor com 9% de desconto
let valorComDesconto = valorProduto * 0.91; // 9% de desconto significa multiplicar por 0.91

// Exibe o resultado formatado
alert(
  "Valor original: R$ " + valorProduto.toFixed(2) + "\n" +
  "Valor com 9% de desconto: R$ " + valorComDesconto.toFixed(2)
);


// exercio 3 

// Solicita ao usuário a quantidade de fitas na locadora
let qtdFitas = parseInt(prompt("Digite a quantidade de fitas que a locadora possui:"));

// Solicita ao usuário o valor do aluguel por fita
let valorAluguel = parseFloat(prompt("Digite o valor do aluguel por fita:"));

// Calcula quantas fitas são alugadas por mês (1/3 do total)
let fitasAlugadasMes = qtdFitas / 3;

// Calcula o faturamento anual (fitas alugadas por mês * valor do aluguel * 12 meses)
let faturamentoAnual = fitasAlugadasMes * valorAluguel * 12;

// Calcula quantas fitas atrasam por mês (1/10 das fitas alugadas)
let fitasAtrasadas = fitasAlugadasMes / 10;

// Calcula o valor ganho com multas por mês (10% do valor do aluguel para cada fita atrasada)
let ganhoComMultasMes = fitasAtrasadas * valorAluguel * 0.10;

// Calcula quantas fitas se estragam por ano (2% do total)
let fitasEstragadasAno = qtdFitas * 0.02;

// Calcula quantas fitas são compradas para reposição (1/10 do total)
let fitasReposicao = qtdFitas / 10;

// Calcula a quantidade final de fitas no fim do ano
let qtdFinalFitas = qtdFitas - fitasEstragadasAno + fitasReposicao;

// Exibe os resultados
alert(
  "Faturamento anual da locadora: R$ " + faturamentoAnual.toFixed(2) + "\n" +
  "Valor ganho com multas por mês: R$ " + ganhoComMultasMes.toFixed(2) + "\n" +
  "Quantidade de fitas no final do ano: " + qtdFinalFitas
);


//exercicio 4

// solicite ao usuario um numero de tres digitos (cdu)

let numero = prompt ("digite um numero de tres digitos ")

if (numero.length === 3 && !isNaN(numero)) {

    let numeroInvertido = numero.split("").reverse().join("");

    // resultado 

    alert("Número invertido: " + numeroInvertido);
} else {
    alert("Por favor, digite um número válido com três dígitos.");
}

// atividade 5

// Solicita ao usuário um número de conta de três dígitos
let numeroConta = prompt("Digite um número de conta com três dígitos:");

// Verifica se o número tem três dígitos e é válido
if (numeroConta.length === 3 && !isNaN(numeroConta)) {
    // Inverte o número da conta
    let numeroInvertido = numeroConta.split("").reverse().join("");

    // Converte para número inteiro e soma com o original
    let soma = parseInt(numeroConta) + parseInt(numeroInvertido);

    // Converte a soma para string para manipular os dígitos
    let somaString = soma.toString();

    // Multiplica cada dígito pela sua posição (1º * 1, 2º * 2, 3º * 3) e soma os resultados
    let somaPosicional = (parseInt(somaString[0]) * 1) +
                         (parseInt(somaString[1]) * 2) +
                         (parseInt(somaString[2]) * 3);

    // Obtém o último dígito do resultado
    let digitoVerificador = somaPosicional % 10;

    // Exibe o resultado
    alert("O dígito verificador da conta " + numeroConta + " é: " + digitoVerificador);
} else {
    alert("Por favor, digite um número de conta válido com três dígitos.");
}
