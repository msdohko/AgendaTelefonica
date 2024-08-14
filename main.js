// variaveis global
const form = document.getElementById('agendaContato');
const nomeContato = document.getElementById('nomeContato');
const numberTel = document.getElementById('numberTel');
const numberCel = document.getElementById('numberCel');
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Verifica se os números são válidos
    if (validaPhone(numberTel.value) && validaPhone(numberCel.value)) {
        addContato();
        atualizaAgenda();
    } else {
        alert('Por favor, insira números válidos com DD + Telefone, 10 dígitos para o Telefone e 11 dígitos para o Celular.');
    }
});

function validaPhone(phone) {
    // Remove tudo que não é número
    const caracterPhone = phone.replace(/\D/g, '');

    // Verifica se o número tem 10 ou 11 dígitos
    return caracterPhone.length === 10 && phone.length <=14|| caracterPhone.length === 11 && phone.length <=15;
}

function formatPhone(phone) {
    phone = phone.replace(/\D/g, ''); // Remove tudo que não é dígito

    // Formatação: (00) 0000-0000 ou (00) 00000-0000
    if (phone.length > 10) {
        return phone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else if (phone.length > 6) {
        return phone.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    } else {
        return '';
    }
}

//função adiciona linha a linha na tabela da agenda
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

//função atualiza e limpa os campos inputs
function atualizaAgenda() {
    const corpoAgenda = document.querySelector('tbody');
    corpoAgenda.innerHTML = linhas;
}
