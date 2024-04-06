// Status da comanda
const OrderStatus = {
    EM_PREPARACAO: 'EM PREPARAÇÃO',
    FECHADO: 'FECHADO',
    PAGO: 'PAGO'
};

// Status do item no pedido
const ItemBillStatus = {
    EM_PREPARACAO: 'EM PREPARAÇÃO',
    ENTREGUE: 'ENTREGUE'
};

// Categorias dos items
const ItemCategory = {
    BEBIDA: 'BEBIDA',
    HAMBURGUER: 'HAMBURGUER',
    ACOMPANHAMENTO: 'ACOMPANHAMENTO'
};

// Exporta a classe Table para uso em outros arquivos
module.exports = { OrderStatus, ItemBillStatus, ItemCategory };
