const numero = (prompt("Digite um número que você deseja calcular na tabuada"))
let resultado = ""

for (let i = 1; i <= 20; i++) {
  resultado += "->" + numero + " * " + i + " = " + (numero * i) + "\n"
}

alert(
  "O resultado da tabuada é\n\n" + resultado
)