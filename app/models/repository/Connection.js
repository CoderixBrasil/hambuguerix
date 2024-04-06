// Importa as configurações de conexão do banco de dados
const { DSN, USER, PASSWORD } = require('../utils/Config');
// Importa a biblioteca para trabalhar com acesso ao banco 
const { Pool } = require('pg');

class Connection {
    // Cria variável de conexão
    static #pool = null;

    // Define função para conectar com o banco
    static getConnection() {
        // Verifica se variável de conexão está nula
        if (!Connection.#pool) {
            // Cria uma nova pool de conexão com os valores definidos no arquivo de configuração
            Connection.#pool = new Pool({
                connectionString: DSN,
                user: USER,
                password: PASSWORD
            });
        }

        // Retorna a própria pool de conexão
        return Connection.#pool;
    }
}

module.exports = Connection;
