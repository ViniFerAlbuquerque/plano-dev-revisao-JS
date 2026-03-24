// script.js
const form = document.querySelector('#formIMC');
const resultadoDiv = document.querySelector('#resultado');
const iconeSpan = document.querySelector('#icone');
const textoSpan = document.querySelector('#textoResultado');

const calcularIMC = (peso, altura) => peso / (altura ** 2);

const classificarIMC = imc => {
  if (imc < 18.5) return 'Abaixo do peso';
  if (imc < 25) return 'Peso ideal';
  if (imc < 30) return 'Sobrepeso';
  if (imc < 35) return 'Obesidade grau I';
  if (imc < 40) return 'Obesidade grau II';
  return 'Obesidade grau III (mórbida)';
};

// Mapeia classificação para cor CSS e ícone emoji
const estiloPorClassificacao = classificacao => {
  switch (classificacao) {
    case 'Peso ideal':
      return { cor: 'verde', icone: '✅' };          // Check verde
    case 'Sobrepeso':
      return { cor: 'amarelo', icone: '⚠️' };       // Aviso amarelo
    default:
      return { cor: 'vermelho', icone: '❌' };       // Cruz vermelha para obesidade/abaixo do peso
  }
};

form.addEventListener('submit', event => {
  event.preventDefault();

  const peso = parseFloat(form.peso.value);
  const altura = parseFloat(form.altura.value);

  // Limpa resultado e remove classe para resetar animação
  resultadoDiv.classList.remove('mostrar');
  iconeSpan.textContent = '';
  textoSpan.textContent = '';

  if (!peso || !altura || peso <= 0 || altura <= 0) {
    iconeSpan.textContent = '❌';
    textoSpan.textContent = 'Por favor, insira valores válidos para peso e altura.';
    resultadoDiv.className = 'vermelho mostrar';
    return;
  }

  const imc = calcularIMC(peso, altura);
  const classificacao = classificarIMC(imc);
  const { cor, icone } = estiloPorClassificacao(classificacao);

  // Atualiza texto e ícone
  iconeSpan.textContent = icone;
  textoSpan.textContent = `Seu IMC é ${imc.toFixed(2)} (${classificacao}).`;

  // Define cor e animação
  resultadoDiv.className = `${cor} mostrar`;
});