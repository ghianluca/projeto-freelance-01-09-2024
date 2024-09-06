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
    const cepInput = document.getElementById('cep1');

    cepInput.addEventListener('input', () => {
        let value = cepInput.value.replace(/\D/g, '');
        if (value.length > 5) {
            value = value.slice(0, 5) + '-' + value.slice(5, 8);
        }
        cepInput.value = value;
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const cepInput = document.getElementById('cep2');

    cepInput.addEventListener('input', () => {
        let value = cepInput.value.replace(/\D/g, '');
        if (value.length > 5) {
            value = value.slice(0, 5) + '-' + value.slice(5, 8);
        }
        cepInput.value = value;
    });
});

const cep1 = document.getElementById('cep1');
const cep2 = document.getElementById('cep2');

  cep1.addEventListener('input', function() {
    cep2.value = cep1.value;
  });

document.getElementById('submitBtn').addEventListener('click', function() {
    const infoBookInputs = document.querySelectorAll('.section-info-book .info-book-inputs, .section-info-book .info-book-selects');
    const addressFormInputs = document.querySelectorAll('.section-address-form .form input');
    const bookSizeRadios = document.querySelectorAll('.section-book-size .select-sizes input[type="radio"]');
    const pageMarkerRadios = document.querySelectorAll('.section-page-marker .select-markers input[type="radio"]');
    const shrinkRadios = document.querySelectorAll('.section-shrink .select-shrinks input[type="radio"]');
    const cepInput = document.getElementById('cep');
    const quantityContainer = document.getElementById('quantity');
    const bookShippingRadios = document.querySelectorAll('.section-quantity-books .select-size-carrier input[type="radio"]');
    
    let isValid = true;

    infoBookInputs.forEach(input => {
        input.classList.remove('input-error');
    });
    addressFormInputs.forEach(input => {
        input.classList.remove('input-error');
    });
    bookSizeRadios.forEach(radio => {
        radio.parentElement.classList.remove('input-error');
    });
    pageMarkerRadios.forEach(radio => {
        radio.parentElement.classList.remove('input-error');
    });
    shrinkRadios.forEach(radio => {
        radio.parentElement.classList.remove('input-error');
    });
    
    cepInput.classList.remove('input-error');
    quantityContainer.classList.remove('input-error');
    
    infoBookInputs.forEach(input => {
        if (input.type === 'text' || input.type === 'email' || input.type === 'tel') {
            if (!input.value) {
                input.classList.add('input-error');
                isValid = false;
            }
        } else if (input.tagName === 'SELECT') {
            if (!input.value) {
                input.classList.add('input-error');
                isValid = false;
            }
        }
    });

    addressFormInputs.forEach(input => {
        if (!input.value) {
            input.classList.add('input-error');
            isValid = false;
        }
    });

    const isBookSizeSelected = Array.from(bookSizeRadios).some(radio => radio.checked);
    if (!isBookSizeSelected) {
        bookSizeRadios.forEach(radio => {
            radio.parentElement.classList.add('input-error');
        });
        isValid = false;
    }

    const isPageMarkerSelected = Array.from(pageMarkerRadios).some(radio => radio.checked);
    if (!isPageMarkerSelected) {
        pageMarkerRadios.forEach(radio => {
            radio.parentElement.classList.add('input-error');
        });
        isValid = false;
    }

    const isShrinkSelected = Array.from(shrinkRadios).some(radio => radio.checked);
    if (!isShrinkSelected) {
        shrinkRadios.forEach(radio => {
            radio.parentElement.classList.add('input-error');
        });
        isValid = false;
    }

    const quantity = parseInt(quantityContainer.textContent, 10);
    if (quantity === 0) {
        quantityContainer.classList.add('input-error');
        isValid = false;
    } else {
        quantityContainer.classList.remove('input-error');
    }

    const isBookShippingSelected = Array.from(bookShippingRadios).some(radio => radio.checked);
    if (!isBookShippingSelected) {
        bookShippingRadios.forEach(radio => {
            radio.parentElement.classList.add('input-error');
        });
        isValid = false;
    }

    if (isValid) {
        alert('Formulário enviado com sucesso!');
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

const sizeOptions = document.querySelectorAll('input[name="book-size"]');
const summarySize = document.getElementById('summarySize');

sizeOptions.forEach(option => {
    option.addEventListener('change', function() {
        summarySize.textContent = ' ' + this.value;
    });
});