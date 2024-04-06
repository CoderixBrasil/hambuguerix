// Importa o repositório de itens
const ItemRepository = require('../models/repository/ItemRepository');

// Inicia sessão
const session = require('express-session');

// Configuração do express-session
const sessionConfig = {
    secret: 'sua_chave_secreta_aqui',
    resave: false,
    saveUninitialized: true
};

// Define função para listar todos os itens
async function listAll(req, res) {
    try {
        // Instancia o ItemRepository
        const itemRepository = new ItemRepository();

        // Armazena resultado da listagem dentro de uma variável de sessão
        req.session.list_of_items = await itemRepository.listAll();

        // Redireciona para o menu
        res.redirect('/view/mobile/menu');
    } catch (error) {
        console.error('Erro ao listar itens:', error.message);
        res.redirect('/view/message');
    }
}

// Seleciona parâmetro GET
function handleOperation(req, res) {
    switch (req.query.operation) {
        case 'listAll':
            listAll(req, res);
            break;
        default:
            res.redirect('/view/message');
            break;
    }
}

module.exports = { handleOperation };
