const veiculo1 = prompt("Digite o nome do primeiro veículo:")
const velocidade1 = parseFloat(prompt("Digite a velocidade do primeiro veículo"))
const veiculo2 = prompt("Digite o nome do segundo veículo:")
const velocidade2 = parseFloat(prompt("Digite a velocidade do segundo veículo"))

if (velocidade1 > velocidade2) {
  alert(
    "O veículo1: " + veiculo1 + "\nÉ mais rápido que o veículo2: " + veiculo2
  )

} else if (velocidade2 > velocidade1) {
  alert(
    "O veículo2: " + veiculo2 + "\nÉ mais rápido que o veículo1: " + veiculo1
  )

} else {
  alert(
    "As velocidades são iguais: " + velocidade1 + "km"
  )
}