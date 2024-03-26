<?php

namespace Coderix\Hamburguerix\Models;

class Item
{
    private $id;
    private $name;
    private $description;
    private $category;
    private $id_side_dish;
    private $image;
    private $is_side_dish;
    private $price;

    // Construtor básico para um item
    public function __construct($name, $category, $is_side_dish, $price)
    {
        $this->name = $name;
        $this->category = $category;
        $this->is_side_dish = $is_side_dish;
        $this->price = $price;
    }

    public function __get($attribute)
    {
        return $this->$attribute;
    }

    public function __set($attribute, $value)
    {
        $this->$attribute = $value;
    }
}
