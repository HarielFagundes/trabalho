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
  
