// Função para gerar uma cor aleatória
function gerarCorAleatoria() {
    const letras = "0123456789ABCDEF";
    let cor = "#";
    for (let i = 0; i < 6; i++) {
      cor += letras[Math.floor(Math.random() * 16)];
    }
    return cor;
  }

  // Aplicar cor salva ao carregar a página
  window.onload = function () {
    const corSalva = localStorage.getItem("corDeFundo");
    if (corSalva) {
      document.body.style.backgroundColor = corSalva;
    }
  };

  // Função chamada ao clicar no botão
  function mudarCorDeFundo() {
    const novaCor = gerarCorAleatoria();
    document.body.style.backgroundColor = novaCor;
    localStorage.setItem("corDeFundo", novaCor); // Salva a cor
  }

  
// Função para adicionar uma nova tarefa à lista
function criarlista() {
    // Verifica se o campo de entrada não está vazio
    const input = document.getElementById("tarefa");
    const texto = input.value.trim();
    // Se o campo de entrada não estiver vazio, cria um novo item de lista
    if (texto !== "") {
        const li = document.createElement("li");
        li.textContent = texto;
        
        li.addEventListener("click", () =>{
            li.classList.toggle("completed");
        });

        const btnremover = document.createElement("button");
        btnremover.textContent = "x";
        btnremover.className = "remove";
        btnremover.addEventListener("click", (e) => {
            e.stopPropagation();
            li.remove();
        });
        // Limpa o campo de entrada após adicionar a tarefa
        li.appendChild(btnremover);
        document.getElementById("lista").appendChild(li);
        input.value = "";
    }
    // Se o campo de entrada estiver vazio, exibe um alerta
    else {
        alert("enter a valid task!");
    }
}