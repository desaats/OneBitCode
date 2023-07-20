let pacientes = [' 1-Matheus ', ' 2-Alan ', ' 3-Rian ', ' 4-Carlos ', ' 5-Laura ', ' 6-Luisa '];
let opecao;

do {

  alert(pacientes);
  opecao = prompt("Escolha uma opeção:(adicionar, retirar, sair)");

  if (opecao === "adicionar") {
    let adicionar = prompt("Digite um novo elemento para o array:");
    pacientes.push(adicionar);
    alert(pacientes);

  } else if (opecao === "retirar") {
    let retirar = pacientes.shift();
    alert("Paciente em atendimento" + retirar);
    alert(pacientes);

  } else if (opecao !== "sair") {
    alert("Opção inválida! Tente novamente.");
  }


} while (opecao !== "sair")


