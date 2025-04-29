// ======== CÓDIGO EXISTENTE (não alterado) ========
// Seleciona o botão pela classe
const button = document.querySelector('.shadow__btn');

// Função para gerar uma cor aleatória
function gerarCorAleatoria() {
    const letras = '0123456789ABCDEF';
    let cor = '#';
    for (let i = 0; i < 6; i++) {
        cor += letras[Math.floor(Math.random() * 16)];
    }
    return cor;
}

// Adiciona o evento de clique no botão
button.addEventListener('click', () => {
    const novaCor = gerarCorAleatoria();
    document.body.style.backgroundColor = novaCor;
});

// ======== NOVO CÓDIGO DO EXERCÍCIO 3 (To-do List) ========
const addTaskBtn = document.getElementById('addTaskBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            ${taskText}
            <button onclick="this.parentElement.remove()">❌</button>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
    } else {
        alert('Por favor, digite uma tarefa!');
    }
});
