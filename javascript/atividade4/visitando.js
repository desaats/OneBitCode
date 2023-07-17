const nome = prompt("Digite o seu nome:")

let cidades = ""
let contagem = 0

let continuar = prompt("Você já visitou alguma cidade digite(S/N):")

while (continuar === "S") {
  let cidade = prompt("Digite o nome da cidade:")
  cidades += " - " + cidade + "\n"
  contagem++
  continuar = prompt("Você já visitou alguma cidade digite(S/N):")
}

alert(
  "Turista: " + nome +
  "\nQuantidade de cidades visitadas: " + contagem +
  "\nCidades visitadas:\n" + cidades
)
