const numero1 = prompt("Digite o primeiro numero:")
const numero2 = prompt("Digite o segundo numero: ")

const x = parseFloat(numero1)
const y = parseFloat(numero2)


const soma = x + y
const subtracao = x - y
const multiplicacao = x * y
const divisao = x / y

alert(
  "Os valores são:\n" +
  "\nsoma:" + soma +
  "\nsubtracao: " + subtracao +
  "\nmultiplicacao: " + multiplicacao +
  "\ndivisao: " + divisao


)