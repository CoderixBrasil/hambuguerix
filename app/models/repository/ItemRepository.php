<?php

namespace Coderix\Hamburguerix\Models\Repository;

use PDO;

// Adiciona autoload
require_once dirname(__DIR__, 3) . "/vendor/autoload.php";

class ItemRepository
{

    // Cria variável de conexão
    private $connection;

    // Cria construtor que inicia a instância de uma conexão com o banco de dados
    public function __construct()
    {
        $this->connection = Connection::getConnection();
    }


    // Define função para listar todos itens
    public function listAll()
    {
        // Armazena o resultado da query em uma variável
        $stmt = $this->connection->query("select * from item;");

        // Retorna um array associativo com os elementos do banco
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

}