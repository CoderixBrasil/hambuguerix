-- Cria banco de dados
CREATE DATABASE IF NOT EXISTS hamburguerix;
USE hamburguerix;

-- Cria a tabela de mesa
CREATE TABLE IF NOT EXISTS hb_table (
    id INT AUTO_INCREMENT PRIMARY KEY,
    description VARCHAR(7)
);

-- Cria a tabela de comanda
CREATE TABLE IF NOT EXISTS hb_order(
	id INT AUTO_INCREMENT PRIMARY KEY,
    consume_here BOOLEAN NOT NULL,
    accept_cupom BOOLEAN NOT NULL,
    creation_time DATE NOT NULL,
    customer_email VARCHAR(50),
    customer_name VARCHAR(20) NOT NULL,
    customer_phone VARCHAR(14),
    paymant_method VARCHAR(10),
    order_status VARCHAR(15) NOT NULL,
    total_price FLOAT NOT NULL
);

-- Cria a tabela do pedido
CREATE TABLE IF NOT EXISTS hb_bill(
	id INT AUTO_INCREMENT PRIMARY KEY,
    creation_date DATE NOT NULL,
    bill_status VARCHAR(15) NOT NULL
);

-- Cria a tabela do item
CREATE TABLE IF NOT EXISTS hb_item(
	id INT PRIMARY KEY AUTO_INCREMENT,
    image VARCHAR(200),
    item_name VARCHAR(30) NOT NULL,
    description VARCHAR(150),
    price FLOAT,
    category VARCHAR(15) NOT NULL,
    is_side_dish BOOLEAN NOT NULL   
);