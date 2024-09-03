const scrollingAlert = document.querySelector('.scrolling-alert');
const originalContent = scrollingAlert.innerHTML;
const numberOfDuplicates = 500;

scrollingAlert.innerHTML = originalContent.repeat(numberOfDuplicates);

function alterarQuantidade(valor) {
    const quantidadeElement = document.getElementById('quantity');
    let quantidadeAtual = parseInt(quantidadeElement.textContent);
    quantidadeAtual += valor;

    if (quantidadeAtual < 0) {
        quantidadeAtual = 0;
    }

    quantidadeElement.textContent = quantidadeAtual;
}

document.addEventListener('DOMContentLoaded', () => {
    const cepInput = document.getElementById('cep');

    cepInput.addEventListener('input', () => {
        let value = cepInput.value.replace(/\D/g, '');
        if (value.length > 5) {
            value = value.slice(0, 5) + '-' + value.slice(5, 8);
        }
        cepInput.value = value;
    });
});