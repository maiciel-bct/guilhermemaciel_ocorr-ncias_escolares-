const formOcorrencia = document.getElementById('formOcorrencia');
const nomeAlunoInput = document.getElementById('nomeAluno');
const dataOcorrenciaInput = document.getElementById('dataOcorrencia');
const descricaoOcorrenciaInput = document.getElementById('descricaoOcorrencia');
const ocorrenciasList = document.getElementById('ocorrenciasList');

function adicionarOcorrencia(event) {
    event.preventDefault();

    const nomeAluno = nomeAlunoInput.value.trim();
    const dataOcorrencia = dataOcorrenciaInput.value;
    const descricaoOcorrencia = descricaoOcorrenciaInput.value.trim();

    if (!nomeAluno || !dataOcorrencia || !descricaoOcorrencia) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const li = document.createElement('li');
    li.classList.add('ocorrencia-item');
    li.innerHTML = `
        <strong>Nome do Aluno:</strong> ${nomeAluno} <br>
        <strong>Data da Ocorrência:</strong> ${dataOcorrencia} <br>
        <strong>Descrição:</strong> ${descricaoOcorrencia}
        <button class="delete-btn">Excluir</button>
    `;

    ocorrenciasList.appendChild(li);

    formOcorrencia.reset();
}

function excluirOcorrencia(event) {
    if (event.target.classList.contains('delete-btn')) {
        const item = event.target.closest('li');
        if (item) {
            item.remove();
        }
    }
}

formOcorrencia.addEventListener('submit', adicionarOcorrencia);
ocorrenciasList.addEventListener('click', excluirOcorrencia);
