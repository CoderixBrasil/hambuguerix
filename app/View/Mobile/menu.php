<?php

?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="Cache-Control" content="no-cache, must-revalidate">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Expires" content="0">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./src/css/menu.css">
    <title>Hamburguerix - Cardápio</title>
</head>
<body>
    <div id="notification"></div>
    <main>
        <div class="top-section">
            <div class="menu-search">
                <img src="./src/img/menu-aberto.png" alt="imagem do menu superior">
                <input type="search" placeholder="Pesquisar" id="inputSearch">
                <img src="./src/img/lupa.png" alt="imagem de lupa icone de pesquisa" id="searchIcon">
            </div>
            <h1>Cardápio</h1>
        </div>
        <div class="bottom-section">
            <div class="filter-icons-menu">
                <img src="./src/img/hamburguer.png" alt="icone de hamburguer">
                <img src="./src/img/french-fries.png" alt="icone de batata-frita">
                <img src="./src/img/soda.png" class="width-soda" alt="icone de refrigerante">
            </div>
            <div class="details-item">
                <img src="./src/img/hamburguer-removebg-preview.png" class="image-hamburg" alt="imagem de um hamburguer">
                <div class="text-container">
                    <h2>Nome do hamburguer</h2>
                    <p>Detalhes do hamburguer</p>
                    <h3>R$ 35,90</h3>
                </div>
                <img src="./src/img/carrinho.png" class="icon-add" alt="searchIcon">
            </div>
            <div class="bottom-navigation">
                <img src="./src/img/carrinho.png" alt="icone de carrinho de compras">
                <img src="./src/img/lupa.png" alt="icone de lupa pesquisar" id="searchBottom">
                <img src="./src/img/cupom.png" alt="icone de cupom de desconto">
                <img src="./src/img/do-utilizador.png" alt="icone de usuario">
            </div>
        </div>
    </main>

    <script src="./src/js/menu.js"></script>
</body>
</html>