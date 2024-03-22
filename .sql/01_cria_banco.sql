-- Cria banco de dados
CREATE DATABASE IF NOT EXISTS hamburguerix;
USE hamburguerix;

-- Cria tabela de usuários se não existir
CREATE TABLE IF NOT EXISTS `user`(
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(15) NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- Cria a tabela de mesa
CREATE TABLE IF NOT EXISTS `table` (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    id_order INT,
    description VARCHAR(7)
);

-- Cria a tabela de comanda
CREATE TABLE IF NOT EXISTS `order`(
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    consume_here BOOLEAN NOT NULL,
    accept_cupom BOOLEAN NOT NULL,
    creation_time DATE NOT NULL,
    customer_email VARCHAR(50),
    customer_name VARCHAR(20) NOT NULL,
    customer_phone VARCHAR(14),
    paymant_method VARCHAR(10),
    order_status VARCHAR(15) NOT NULL,
    total_price FLOAT NOT NULL,
    id_table INT,
    CONSTRAINT fk_table_order FOREIGN KEY (id_table) REFERENCES `table`(id),
    id_bill INT
);

-- Cria a tabela do pedido
CREATE TABLE IF NOT EXISTS `bill`(
	id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    creation_date DATE NOT NULL,
    bill_status VARCHAR(15) NOT NULL,
    id_item_bill INT
);

-- Cria a tabela do item
CREATE TABLE IF NOT EXISTS `item`(
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    image VARCHAR(200),
    name VARCHAR(30) NOT NULL,
    description VARCHAR(150),
    price FLOAT,
    category VARCHAR(15) NOT NULL,
    is_side_dish BOOLEAN NOT NULL
);

-- Cria a tabela 'item_bill'
CREATE TABLE IF NOT EXISTS `item_bill` (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    id_item INT NOT NULL,
    id_bill INT NOT NULL,
    quantity INT NOT NULL,
    total_price FLOAT NOT NULL,
    `status` VARCHAR(15) NOT NULL,
    observation VARCHAR(100) NOT NULL,
    FOREIGN KEY (id_item) REFERENCES item(id),
    FOREIGN KEY (id_bill) REFERENCES bill(id)
);

-- Altera tabela da mesa para adicinar a fk de comanda
ALTER TABLE `table`
ADD CONSTRAINT `fk_id_order` FOREIGN KEY(`id_order`) REFERENCES `order`(id);

-- Altera tabela de comanda para adicionar fk do pedido
ALTER TABLE `order`
ADD CONSTRAINT `fk_id_bill` FOREIGN KEY(`id_bill`) REFERENCES `bill`(id);

-- Altera tabela de pedido para adicionar fk do item_pedido
ALTER TABLE `bill`
ADD CONSTRAINT `fk_id_item_bill` FOREIGN KEY(`id_item_bill`) REFERENCES `item_bill`(id);

