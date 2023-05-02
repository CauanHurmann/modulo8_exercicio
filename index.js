const form = document.getElementById('form-agenda');
const nome = [];
const telefone = [];

let linhas = '';


form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionalinha();
    atualizaTabela();
})

function adicionalinha(){
    const inputNome = document.getElementById('nome-contato');
    const inputTelefone = document.getElementById('telefone-contato');

    if (nome.includes(inputNome.value)){
        alert(`O nome: ${inputNome.value}, já foi adicionado a lista!`);
    }else if (telefone.includes(inputTelefone.value)) {
        alert(`O telefone: ${inputTelefone.value}, já foi vinculado a outro contato!`)
    }else {
        nome.push(inputNome.value);
        telefone.push(inputTelefone.value);
        
        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputTelefone.value}</td>`;
        linha += `<tr>`;

        linhas += linha;
    }

    inputNome.value = '';
    inputTelefone.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}