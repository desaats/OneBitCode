const medida = parseFloat(prompt("Digite uma medida em metros:"))
const escolherUmaMeida = prompt("Escolha um valor entre a até f:")


switch (escolherUmaMeida) {
  case "a":
    alert(
      "O resultado: " + medida + "m =" + medida * 1000 + "mm"
    )
    break
  case "b":
    alert(
      "O resultado: " + medida + "m =" + medida * 100 + "cm"
    )
    break
  case "c":
    alert(
      "O resultado: " + medida + "m =" + medida * 10 + "dm"
    )
    break
  case "d":
    alert(
      "O resultado: " + medida + "m =" + medida / 10 + "dam"
    )
    break
  case "e":
    alert(
      "O resultado: " + medida + "m =" + medida / 100 + "hm"
    )
    break
  case "f":
    alert(
      "O resultado: " + medida + "m =" + medida / 1000 + "km"
    )
    break
  default:
    alert("Opeção inválida.")



}