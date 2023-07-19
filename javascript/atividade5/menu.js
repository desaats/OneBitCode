let opecao = "5"



do {
  opecao = prompt(
    "Seja bem vindo(a)\n" +
    "\nEscolha uma das opeções abaixo:" +
    "\n1. Opeção Um" +
    "\n2. Opeção Dois" +
    "\n3. Opeção Tres" +
    "\n4. Opeção Quatro" +
    "\n5. Encerrar"
  )
  switch (opecao) {
    case "1":
      alert("Você escolheu a opção UM")
      break
    case "2":
      alert("Você escolheu a opção Dois")
      break
    case "3":
      alert("Você escolheu a opção TRES")
      break
    case "4":
      alert("Você escolheu a opção Quatro")
      break
    case "5":
      alert("Você escolheu a opção ENCERRAR")
      alert("Encerrando....")
      break
    default:
      alert("Opeção inválida")
  }
} while (opecao !== "5")