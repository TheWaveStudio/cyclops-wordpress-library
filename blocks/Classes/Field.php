<?php


namespace Cyclops\Blocks;


class Field
{
    protected $type;
    protected $name;
    protected $label;
    protected $width = 100;
    protected $filterFunction = null;
    protected $childrenFields = [];

    public function __construct($type, $name, $label = null)
    {
        $this->type = $type;
        $this->name = $name;
        $this->label = $label;
        return $this;
    }

    public static function create($type, $name, $label = null)
    {
        return new Field($type, $name, $label);
    }

    public function setWidth(int $width = 100)
    {
        $this->width = $width;
        return $this;
    }

    public function setFilter($function)
    {
        $this->filterFunction = $function;
        return $this;
    }

    public function addFields($fields = [])
    {
        foreach ($fields as $field) {
            if (!($field instanceof Field)) continue;
            $this->childrenFields[] = $field;
        }

        return $this;
    }

    public function getField()
    {
        $type = $this->getFieldType($this->type);

        return [
            "name" => $this->name,
            "label" => $this->label,
            "field" => $this->type,
            "type" => $type,
            "width" => $this->width,
            "filterFunction" => $this->filterFunction,
            "children" => $this->childrenFields,
        ];
    }

    private function getFieldType($type)
    {
        switch ($type) {
            case 'media':
                return 'object';
            case 'addable':
                return 'array';
            default:
                return "string";
        }
    }
}
