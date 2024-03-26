<?php

namespace Coderix\Hamburguerix\Controllers;

use Coderix\Hamburguerix\Models\Repository\ItemRepository;

require_once dirname(__DIR__, 1) . "/vendor/autoload.php";

// Inicia sessão
session_start();

// Seleciona parâmetro GET
switch ($_GET["operation"]) {
    case "listAll":
        listAll();
        break;
    default:
        header("location:../View/message.php");
        exit;
}

// Define função para listar todos items
function listAll()
{
    // Instancia o ItemRepository
    $item_repository = new ItemRepository();

    // Armazena resultado da listagem dentro de uma variável de sessão
    $_SESSION["list_of_itens"] = $item_repository->listAll();

    // Redireciona para o menu
    header("location:../view/mobile/menu.php");
}
