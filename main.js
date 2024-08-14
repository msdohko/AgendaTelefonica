const form = document.getElementById('agendaContato');
const nomeContato = document.getElementById('nomeContato');
const numberTel = document.getElementById('numberTel');
const numberCel = document.getElementById('numberCel');
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (validaTel(numberTel.value) && validaCel(numberCel.value)) {
        addContato();
        atualizaAgenda();
    } else {
        alert('Por favor, insira números válidos com DD + Telefone, 10 dígitos para o Telefone e 11 dígitos para o Celular');
    }
});

function validaTel(phone) {
    const caracter = phone.replace(/\D/g, '');
    return caracter.length === 10;
}

function validaCel(phone) {
    const caracter = phone.replace(/\D/g, '');
    return caracter.length === 11;
}


function addContato() {
    let linha = '<tr>';
    linha += `<td>${nomeContato.value}</td>`;
    linha += `<td>${numberTel.value}</td>`;
    linha += `<td>${numberCel.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    nomeContato.value = '';
    numberTel.value = '';
    numberCel.value = '';
}

function atualizaAgenda() {
    const corpoAgenda = document.querySelector('tbody');
    corpoAgenda.innerHTML = linhas;
}