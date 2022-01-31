<?php


namespace TW\Cyclops\Blocks;

use Cyclops\Cyclops;

/**
 * Block class for generating Gutenberg blocks using only PHP
 */
class Block
{
    /**
     * @var string
     */
    private $blocksRoot = 'cyclops';
    /**
     * @var string
     */
    private $name;
    /**
     * @var string|null
     */
    private $id;
    /**
     * @var string|null
     */
    private $icon;
    /**
     * @var string|null
     */
    private $title;
    /**
     * @var boolean
     */
    private $showTitle;
    /**
     * @var Block[]
     */
    private $innerBlocks;
    /**
     * @var
     */
    private $blockControls;
    /**
     * @var
     */
    private $description;

    /**
     * @var
     */
    private $category;
    /**
     * @var
     */
    private $keywords;
    /**
     * @var
     */
    private $parent;

    /**
     * @var
     */
    private $attributes;
    /**
     * @var
     */
    private $variations;
    /**
     * @var string[]
     */
    private $supports = ['className'];

    /**
     * @var
     */
    private $fields;
    /**
     * @var null
     */
    private $callback = null;

    /**
     * @param string $name
     * @param string|null $id
     */
    public function __construct(string $name, string $id = null)
    {
        $this->id = $id;
        $this->name = $name;
        return $this;
    }

    /**
     * @param null $title
     * @return $this
     */
    public function showTitle($title = null)
    {
        $this->title = $title ?? $this->name;
        $this->showTitle = true;
        return $this;
    }

    /**
     * @param $name
     * @param $value
     * @return $this
     */
    public function setAttribute($name, $value)
    {
        $this[$name] = $value;
        return $this;
    }

    /**
     * @param array $values
     * @return $this
     */
    public function setParent(array $values)
    {
        $this->parent = \Functional\map($values, fn ($value) => "{$this->blocksRoot}/{$value}");
        return $this;
    }

    /**
     * @param array $values
     * @return $this
     */
    public function setInnerBlocks(array $values)
    {
        $this->innerBlocks = $values;
        return $this;
    }

    /**
     * @param array $fields
     * @return $this
     */
    public function addFields(array $fields)
    {
        if (!is_array($fields)) return $this;

        $this->fields = $fields;
        return $this;
    }

    /**
     * @param array $fields
     * @return $this
     */
    public function addBlockControls(array $fields)
    {
        if (!is_array($fields)) return $this;

        $this->blockControls = $fields;
        return $this;
    }

    /**
     * @param callable $callback
     * @return $this
     */
    public function setCallback(callable $callback)
    {
        if (is_callable($callback)) {
            $this->callback = $callback;
        }
        return $this;
    }

    /**
     * @param string $hook
     * @return $this|null
     */
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
