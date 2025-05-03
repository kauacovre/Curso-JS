// Função para mudar cor do fundo da página
function mudarCor() {
    const corAleatoria = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = corAleatoria;
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