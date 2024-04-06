// Definição da classe Item
class Item {
    // Construtor da classe Item
    constructor(name, category, is_side_dish, price) {
        // Inicialização das propriedades do item
        this.name = name;
        this.category = category;
        this.is_side_dish = is_side_dish;
        this.price = price;
        this.id = null;
        this.description = null;
        this.id_side_dish = null; 
        this.image = null;
    }

    // Método para obter o valor de um atributo do item
    getAttribute(attribute) {
        return this[attribute];
    }

    // Método para definir o valor de um atributo do item
    setAttribute(attribute, value) {
        this[attribute] = value;
    }
}

// Exporta a classe Item para uso em outros arquivos
module.exports = Item;
