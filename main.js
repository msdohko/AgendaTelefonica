/*const form = document.getElementById('agendaContato');
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

function formatPhone(value) {
    value = value.replace(/\D/g, ''); // Remove tudo que não é dígito

    // Formatação: (00) 0000-0000 ou (00) 00000-0000
    if (value.length > 10) {
        return value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else if (value.length > 6) {
        return value.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    } else if (value.length > 2) {
        return value.replace(/(\d{2})(\d{0,4})/, '($1) $2');
    } else if (value.length > 0) {
        return value.replace(/(\d{2})/, '($1');
    } else {
        return '';
    }
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
}*/

const form = document.getElementById('agendaContato');
const nomeContato = document.getElementById('nomeContato');
const numberTel = document.getElementById('numberTel');
const numberCel = document.getElementById('numberCel');
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Verifica se os números são válidos
    if (isValidPhone(numberTel.value) && isValidPhone(numberCel.value)) {
        addContato();
        atualizaAgenda();
    } else {
        alert('Por favor, insira números válidos no formato (00) 0000-0000 ou (00) 00000-0000.');
    }
});

function isValidPhone(value) {
    // Remove tudo que não é número
    const cleanValue = value.replace(/\D/g, '');

    // Verifica se o número tem 10 ou 11 dígitos
    return cleanValue.length === 10 || cleanValue.length === 11;
}

function formatPhone(value) {
    value = value.replace(/\D/g, ''); // Remove tudo que não é dígito

    // Formatação: (00) 0000-0000 ou (00) 00000-0000
    if (value.length > 10) {
        return value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else if (value.length > 6) {
        return value.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    } else if (value.length > 2) {
        return value.replace(/(\d{2})(\d{0,4})/, '($1) $2');
    } else if (value.length > 0) {
        return value.replace(/(\d{2})/, '($1');
    } else {
        return '';
    }
}

function addContato() {
    let linha = '<tr>';
    linha += `<td>${nomeContato.value}</td>`;
    linha += `<td>${formatPhone(numberTel.value)}</td>`;
    linha += `<td>${formatPhone(numberCel.value)}</td>`;
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
