<?php

namespace Coderix\Hamburguerix\Models;

class Table{
    private $id;
    private $id_order;
    private $description;

    public function __construct($description){
        $this->description = $description;
    }

    public function __get($attribute){
        return $this->$attribute;
    }

    public function __set($attribute,$value){
        $this->$attribute=$value;
    }
}

?>
