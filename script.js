const perguntas = [
    {
        titulo: "Qual comando lista o conteúdo do diretório:",
        opcoes: ["ls", "cd", "locate","pwd"],
        correta: 0
    },
    {
        titulo: "O que acontece ao inserir (cd /home/usuario/downloads) no terminal?",
        opcoes: ["Renomeia a pasta downloads", "Apaga o conteúdo da pasta downloads", "Navega para a pasta download"],
        correta: 2
    }
    
];

let indiceAtual = 0;
let pontuacao = 0;

function mostrarPergunta() {
    const container = document.getElementById('quiz-container');
    const questao = perguntas[indiceAtual];

   
    container.innerHTML = `
        <span style="color: gray; font-size: 0.8rem;">Questão ${indiceAtual + 1} de ${perguntas.length}</span>
        <h2>${questao.titulo}</h2>
        <div id="alternativas" style="display: flex; flex-direction: column; gap: 10px;"></div>
    `;

    const divAlternativas = document.getElementById('alternativas');

   
    questao.opcoes.forEach((opcao, i) => {
        const botao = document.createElement('button');
        botao.innerText = opcao;
        botao.classList.add('opcao-btn');
        botao.onclick = () => verificarResposta(i);
        divAlternativas.appendChild(botao);
    });
}

function verificarResposta(selecionada) {
    if (selecionada === perguntas[indiceAtual].correta) {
        pontuacao++;
    }

    indiceAtual++;

    if (indiceAtual < perguntas.length) {
        mostrarPergunta();
    } else {
        exibirResultado();
    }
}

function exibirResultado() {
    const container = document.getElementById('quiz-container');
    container.innerHTML = `
        <div class="tela_resultado">
            <h2>Desafio finalizado!</h2>
            <p>Você acertou <strong>${pontuacao}</strong> de ${perguntas.length} questões.</p>
            <button class="bt-reiniciar" onclick="location.reload()">Reiniciar</button>
        </div>
    `;
}

window.onload = mostrarPergunta