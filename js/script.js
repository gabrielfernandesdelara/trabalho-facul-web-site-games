// Espera o Html carregar completamente antes de executar o código
document.addEventListener("DOMContentLoaded", function () {
  // Procura o elemento com id 'form-jogo' e adiciona um listener para o evento de submit
  const form = document.getElementById("form-jogo");
  // Se o formulário existir, ele não tenta adicionar listeners num form que não existe
  if (form) {
    // Executa a função quando o formulário for enviado
    form.addEventListener("submit", function (e) {
      // Variável para armazenar a mensagem de erro
      let erroMsg = "";
      // Captura os valores dos campos do formulário
      // Trim() para remover espaços em branco no início e no final
      const nome = document.getElementById("nome-game").value.trim();
      const genero = document.getElementById("genero-game").value;
      const plataforma = document.getElementById("plataforma-game").value;
      const horas = document.getElementById("horas").value;

      // Mensagem de erro para cada campo
      if (nome.length < 2) {
        erroMsg = "O nome do jogo deve ter pelo menos 2 caracteres.";
      } else if (!genero) {
        erroMsg = "Selecione um gênero.";
      } else if (!plataforma) {
        erroMsg = "Selecione uma plataforma.";
      } else if (!horas || Number(horas) < 0) {
        erroMsg = "Digite um valor de horas válido.";
      }
      // Verifica se algum campo tem erro
      // Impedindo o envio do formulário se houver erro até ser corrigido
      if (erroMsg) {
        alert(erroMsg);
        e.preventDefault();
      }
    });
  }

  // Verifica se a página atual é a formaction
  if (window.location.pathname.includes("formaction.html")) {
    // Cria um container para centralizar os dados
    const containerDados = document.createElement("div");
    containerDados.className = "container-dados";
    // Pega os dados enviado por GET
    // Usando URLSearchParams para capturar os parâmetros da URL
    const params = new URLSearchParams(window.location.search);
    const nome = params.get("nome-game");
    const genero = params.get("genero-game");
    const plataforma = params.get("plataforma-game");
    const horas = params.get("horas");

    // Cria um bloco para mostrar os dados e estilizar no css
    const container = document.createElement("div");
    container.className = "dados-jogos";
    container.innerHTML = `
      <h1>Dados do Jogo Cadastrado</h1>
      <p><strong>Nome:</strong> ${nome ? nome : "-"}</p>
      <p><strong>Gênero:</strong> ${genero ? genero : "-"}</p>
      <p><strong>Plataforma:</strong> ${plataforma ? plataforma : "-"}</p>
      <p><strong>Horas jogadas (min):</strong> ${horas ? horas : "-"}</p>
      <a href="form.html"><button class="cadastro">Cadastrar outro jogo</button></a>
    `;
    // Adiciona o container com os dados ao containerDados
    containerDados.appendChild(container);
    // Adiciona o containerDados ao body do documento
    document.body.appendChild(containerDados);
  }
});
