const personagem1 = prompt("Nome do personagem de ataque:")
const poderDeAtaque = parseFloat(prompt("Digite o poder de ataque do personagem1:"))

const personagem2 = prompt("Nome do personagem de defesa:")
let pontosDeVida = parseFloat(prompt("Pontos de vida:"))
const poderDeDefesa = parseFloat(prompt("Digite o poder de defesa do personagem de defesa:"))
const escudo = prompt("Digite se o personagem de defesa possui um escudo:(S/N)")


let quantidadeDeDano = 0

if (poderDeAtaque > poderDeDefesa && escudo === "N") {
  quantidadeDeDano = poderDeAtaque - poderDeDefesa
} else if (poderDeAtaque > poderDeDefesa && escudo === "S") {
  quantidadeDeDano = (poderDeAtaque - poderDeDefesa) / 2
}

pontosDeVida -= quantidadeDeDano
alert(
  personagem1 + " causou " + quantidadeDeDano + " pontos de dano " + personagem2
)
alert(
  personagem1 + "\nPoder de ataque: " + poderDeAtaque + "\n\n" +
  personagem2 + "\nPontos de vida: " + pontosDeVida +
  "\nPoder de defesa : " + poderDeDefesa + "\nPossui escudo: " + escudo
)