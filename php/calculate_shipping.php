<?php

require "vendor/autoload.php";

use EscapeWork\Frete\Correios\PrecoPrazo;
use EscapeWork\Frete\Correios\Data;
use EscapeWork\Frete\FreteException;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $cepDestino = $_POST['cep'] ?? '';

    if (empty($cepDestino)) {
        echo json_encode(['error' => 'CEP não fornecido']);
        exit;
    }

    $frete = new PrecoPrazo();
    $frete->setCodigoServico(Data::SEDEX)
          ->setCepOrigem('70070130')
          ->setCepDestino($cepDestino)
          ->setComprimento(30)
          ->setAltura(30)
          ->setLargura(30)
          ->setDiametro(30)
          ->setPeso(15);

    try {
        $result = $frete->calculate();

        $preco = $result['cServico']['Valor'] ?? 'Não disponível';
        $prazo = $result['cServico']['PrazoEntrega'] ?? 'Não disponível';

        echo json_encode(['preco' => 'R$ ' . number_format($preco, 2, ',', '.'), 'prazo' => $prazo]);
    } catch (FreteException $e) {
        echo json_encode(['error' => 'Erro ao calcular o frete: ' . $e->getMessage()]);
    }
} else {
    echo json_encode(['error' => 'Método de requisição inválido']);
}