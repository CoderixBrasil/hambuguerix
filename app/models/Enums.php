<?php

namespace Coderix\Hamburguerix\Models\Enums;

# Status da comanda
enum OrderStatus: string
{
    case EM_PREPARACAO = 'EM PREPARAÇÃO';
    case FECHADO = 'FECHADO';
    case PAGO = 'PAGO';
}

# Status do item no pedido
enum ItemBillStatus: string
{
    case EM_PREPARACAO = 'EM PREPARAÇÃO';
    case ENTREGUE = 'ENTREGUE';
}

# Categorias dos items
enum ItemCategory: string{
    case BEBIDA = 'BEBIDA';
    case HAMBURGUER = 'HAMBURGUER';
    case ACOMPANHAMENTO = 'ACOMPANHAMENTO';
}