function mudarCor() {
    const corAleatoria = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = corAleatoria;
}

function criarlista() {
    const input = document.getElementById("tarefa");
    const texto = input.value.trim();
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

        li.appendChild(btnremover);
        document.getElementById("lista").appendChild(li);
        input.value = ""; // Limpa o campo de entrada após adicionar a tarefa
    }
    else {
        alert("enter a valid task!");
    }
}