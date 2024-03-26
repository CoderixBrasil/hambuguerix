<?php

namespace Coderix\Hamburguerix\Models\Repository;

// Importa biblioteca para trabalhar com acesso ao banco
use PDO;

// Importando arquivo de configuração do banco 3
require_once dirname(__DIR__, 2) . "/Utils/Config.php";

class Connection
{
    // Cria variável de conexão
    private static $connection;
    public function __construct()
    {
    }

    // Define função para conectar com o banco
    public static function getConnection()
    {
        // Verifica se variável de conexão está nula 
        if (self::$connection == null) {
            // Atribui para a variável connection os valores definidos no Config.php
            self::$connection = new PDO(DSN, USER, PASSWORD);
        }

        // Retorna a própria connection
        return self::$connection;
    }


}

?>