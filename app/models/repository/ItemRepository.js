const Connection = require('../Connection'); // Importa o arquivo de conexão

class ItemRepository {
    constructor() {
        // Cria variável de conexão
        this.connection = Connection.getConnection();
    }

    // Define função para listar todos itens
    async listAll() {
        try {
            // Executa a query para selecionar todos os itens
            const query = 'SELECT * FROM item;';
            const result = await this.connection.query(query);

            // Retorna um array associativo com os elementos do banco
            return result.rows;
        } catch (error) {
            console.error('Erro ao listar itens:', error.message);
            throw error;
        }
    }
}

module.exports = ItemRepository;
