<?php

?>

<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="index.css">
    <title>Hamburguerix - Boas-vindas</title>
</head>

<body>
    <div id="notification"></div>
    <main>
        <div class="top-section" id="topSection">
            <h1>Boas-vindas!</h1>
            <button id="topButton">Levar para Viagem</button>
        </div>
        <div class="bottom-section" id="bottomSection">
            <button id="bottomButton">Comer Aqui</button>
            <select name="select" id="tablePicker">
                <option value="">Selecione uma mesa</option>
                <option value="mesa1">Mesa 1</option>
                <option value="mesa2">Mesa 2</option>
                <option value="mesa3">Mesa 3</option>
            </select>
            <button id="buttonMenu">Ver Cardápio ></button>
        </div>
    </main>
    <script src="index.js"></script>
</body>

</html>