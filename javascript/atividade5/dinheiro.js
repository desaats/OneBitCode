let dinheiro = parseFloat(prompt("Digite a quantidade inicial de dinheiro:"))
alert("Quantidade atual é: " + dinheiro + "R$")

let escolha = "3"



do {
  escolha = prompt(
    "Seja bem vindo(a)\n" +
    "\nEscolha uma das opeções abaixo:" +
    "\n1. Opeção Um (SOMAR)" +
    "\n2. Opeção Dois(SUBTRAIR)" +
    "\n3. Opeção Tres(Sair)"
  )
  switch (escolha) {
    case "1":
      alert("Você escolheu a opção SOMAR")
      let somar = parseFloat(prompt("Digite a quantidade que deseja somar:"))
      dinheiro = dinheiro + somar
      alert("Quantidade atual é: " + dinheiro + "R$")
      break

    case "2":
      alert("Você escolheu a opção SUBTRAIR")
      let subtrair = parseFloat(prompt("Digite a quantidade que deseja subtrair:"))
      dinheiro -= subtrair
      alert("Quantidade atual é: " + dinheiro + "R$")
      break

    case "3":
      alert("Você escolheu a opção SAIR")
      break
    default:
      alert("Opeção inválida")

  }

} while (escolha !== "3")