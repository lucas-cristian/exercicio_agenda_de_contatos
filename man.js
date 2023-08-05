const form = document.getElementById('form-atividade');
const nomes = [];
const telefones = [];

let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();

})

function adicionaLinha() {
    const inputNome = document.getElementById('nome-usuario');
    const inputTelefone = document.getElementById('numero-telefone');

    if (nomes.includes(inputNome.value)) {
        alert(`Este contato: ${inputNome.value} já foi adicionado`);

    } else {
        nomes.push(inputNome.value);
        telefones.push(parseFloat(inputTelefone.value));

        let linha = '<tr>';
        linha += `<td>${inputNome.value} </td>`;
        linha += `<td>${inputTelefone.value} </td>`;
        linha += '</tr>';

        linhas += linha;
    }
    inputNome.value = '';
    inputTelefone.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
};