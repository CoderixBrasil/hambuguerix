// Definição da classe Table
class Table {
    constructor(description) {
        // Inicialização das propriedades da tabela
        this.description = description;
        this.id = null; // ID da tabela
        this.id_order = null; // ID do pedido associado à tabela
    }

    // Método para obter o valor de um atributo da tabela
    getAttribute(attribute) {
        return this[attribute];
    }

    // Método para definir o valor de um atributo da tabela
    setAttribute(attribute, value) {
        this[attribute] = value;
    }
}

// Exporta a classe Table para uso em outros arquivos
module.exports = Table;
