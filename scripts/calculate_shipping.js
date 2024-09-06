document.getElementById('calcularFrete').addEventListener('click', function() {
    // Obtém o CEP, remove os hífens e envia para o PHP
    var cep = document.getElementById('cep1').value.replace('-', '');

    // Verifica se o CEP está vazio
    if (cep === '') {
        alert('Por favor, insira um CEP.');
        return;
    }

    // Cria um objeto para enviar via AJAX
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/php/calculate_shipping.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    // Define a função de callback para processar a resposta do PHP
    xhr.onload = function () {
        if (xhr.status === 200) {
            // Parseia a resposta JSON
            var response = JSON.parse(xhr.responseText);

            // Atualiza o preço e prazo de entrega na página
            document.getElementById('shippingPrice').textContent = response.preco;
            document.getElementById('shippingDay').textContent = response.prazo;
        } else {
            alert('Erro ao calcular o frete.');
        }
    };

    // Envia o CEP para o PHP
    xhr.send('cep=' + encodeURIComponent(cep));
});