const form = document.getElementById('fomulario-contato');
const nomes = [];
const telefones = [];
let linha = '';
const corpoTabela = document.querySelector('tbody');

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    corpoTabela.innerHTML = linha;

})


function adicionaLinha(){
    const inputNomes = document.getElementById('nome-contato');
    const inputTelefones = document.getElementById('tel-contato');

    if(nomes.includes(inputNomes.value)){
        alert(`O nome ${inputNomes.value} já foi inserido`);
    }else{
    nomes.push(inputNomes.value);
    telefones.push(inputTelefones.value);

    let info = `<tr><td>${inputNomes.value}</td><td>${inputTelefones.value}</td></tr>`;
    linha += info;

    inputNomes.value='';
    inputTelefones.value='';
    }
}