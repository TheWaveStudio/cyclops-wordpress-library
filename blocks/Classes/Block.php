<?php


namespace Cyclops\Blocks;

use Cyclops\Cyclops;

class Block
{
    private $name;
    private $icon;
    private $title;
    private $showTitle;
    private $description;

    private $category;
    private $keywords;
    private $parent;

    private $attributes;
    private $variations;
    private $supports = ['className'];

    private $fields;
    private $callback = null;

    public function __construct($name)
    {
        $this->name = $name;
        return $this;
    }

    public function showTitle($title = null)
    {
        $this->title = $title ?? $this->name;
        $this->showTitle = true;
        return $this;
    }

    public function setAttribute($name, $value)
    {
        $this[$name] = $value;
        return $this;
    }

    public function addFields(array $fields)
    {

        if (!is_array($fields)) return $this;

        $this->fields = $fields;
        return $this;
    }

    public function setCallback(callable $callback)
    {
        if (is_callable($callback)) {
            $this->callback = $callback;
        }
        return $this;
    }

    public function register($hook = '')
    {
        if (!$this->callback || !$this->name)
            return NULL;

        global $cyBlocks;

        if (!is_array($cyBlocks)) $cyBlocks = [];

        $fields = array_map(function ($field) {
            return $field->getField();
        }, $this->fields);

        $slug = Cyclops::slugify($this->name);
        $cyBlocks[] = [
            "name" => $this->name,
            "blockName" => "cyclops/{$slug}",
            "fields" => $fields,
            "callback" => $this->callback,
        ];

        return $this;
    }
}
