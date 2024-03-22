-- Selecionar o banco hamburguerix para uso
USE hamburguerix;
-- Adiciona descrição das mesas à tabela de mesas
INSERT INTO `table` (description)
VALUES ("Mesa 1"),
    ("Mesa 2"),
    ("Mesa 3"),
    ("Mesa 5"),
    ("Mesa 6"),
    ("Mesa 7"),
    ("Mesa 8");
-- Adiciona itens à tabela de itens
INSERT INTO `item` (
        image,
        name,
        description,
        price,
        category,
        is_side_dish
    )
VALUES (
        'https://bing.com/th?id=OSK.67c9c03e17a2b0f4c3824e28bea284b8',
        'HAMBURGÃO MASSA VÉI',
        'Pão com gergilim, Hamburguer bovino de 180g, Tomate, Rúcula e Cebola Roxa.',
        30.30,
        "Hamburguer",
        false
    ),
    (
        'https://www.minhareceita.com.br/app/uploads/2020/07/dhamburguer-champignon.jpg',
        'CHAMPIGNON',
        'Pão cervejinha, Hamburguer bovino 180g, Maionese da casa, Molho champignon e Rúcula.',
        32.50,
        "Hamburguer",
        false
    ),
    (
        'https://receitinhas.com.br/wp-content/uploads/2022/09/230446-730x365.jpg',
        'PODEROSO CHEDDÃO',
        'Pão Mix de grãos, Hamburguer duplo 180g cada, Queijo mussarela, Molho cheddar e Mix de salada.',
        40.42,
        "Hamburguer",
        false
    );