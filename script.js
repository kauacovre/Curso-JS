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

// CÓDIGO DO EXERCÍCIO 3 
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

// CÓDIGO DO EXERCÍCIO 4
const formulario = document.getElementById("formulario");
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const mensagem = document.getElementById('mensagem');

formulario.addEventListener('submit', function (e) {
    e.preventDefault(); // Evita envio real do formulário

    if (nome.value.trim() === '' || email.value.trim() === '') {
        mensagem.textContent = 'Por favor, preencha todos os campos.';
        mensagem.classList.remove('sucesso');
    } else {
        mensagem.textContent = 'Formulário enviado com sucesso!';
        mensagem.classList.add('sucesso');
        // Aqui você pode limpar os campos, se quiser:
        // formulario.reset();
    }
});

// CÓDIGO DO EXERCÍCIO 5
const relogio = document.getElementById('relogio');
const data = new Date();
const opcoes = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const dataFormatada = data.toLocaleDateString('pt-BR', opcoes);

relogio.addEventListener('click', () => {
    const horaAtual = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    alert(`Data: ${dataFormatada}\nHora: ${horaAtual}`);
});

function atualizarRelogio() {
    const agora = new Date();
    const horas = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    const segundos = String(agora.getSeconds()).padStart(2, '0');

    const relogio = document.getElementById('relogio');
    relogio.textContent = `${horas}:${minutos}:${segundos}`;
}

setInterval(atualizarRelogio, 1000);
atualizarRelogio(); // chama imediatamente ao carregar
