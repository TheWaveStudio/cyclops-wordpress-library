<?php


namespace TW\Cyclops\Blocks;

use TW\Cyclops\Cyclops;

class Block
{
    private $blocksRoot = 'cyclops';
    private $name;
    private $id;
    private $icon;
    private $title;
    private $showTitle;
    private $innerBlocks;
    private $blockControls;
    private $description;

    private $category;
    private $keywords;
    private $parent;

    private $attributes;
    private $variations;
    private $supports = ['className'];

    private $fields;
    private $callback = null;

    public function __construct(string $name, string $id = null)
    {
        $this->id = $id;
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

    public function setParent(array $values)
    {
      $this->parent = \Functional\map($values, fn ($value) => "{$this->blocksRoot}/{$value}");
      return $this;
    }

    public function setInnerBlocks(array $values)
    {
      $this->innerBlocks = $values;
      return $this;
    }

    public function addFields(array $fields)
    {
        if (!is_array($fields)) return $this;

        $this->fields = $fields;
        return $this;
    }

    public function addBlockControls(array $fields)
    {
      if (!is_array($fields)) return $this;

      $this->blockControls = $fields;
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
        }, $this->fields ?? []);

        $blocksControl = array_map(function ($field) {
          return $field->getField();
        }, $this->blockControls ?? []);

        $slug = $this->id ?? Cyclops::slugify($this->name);
        $cyBlocks[] = [
            "name" => $this->name,
            "blockName" => "{$this->blocksRoot}/{$slug}",
            "fields" => $fields,
            "blocksControl" => $blocksControl,
            "callback" => $this->callback,
            "parent" => $this->parent,
            "innerBlocks" => $this->innerBlocks
        ];

        return $this;
    }
}
