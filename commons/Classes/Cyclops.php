<?php


namespace Cyclops;

class Cyclops
{
    private static $instance = null;
    public $version = "0.0.1";

    public function __construct()
    {
        add_action('init', function () {

            global $cyBlocks;

            $cyBlocks = [];

            do_action('cy_before_register_blocks');

            do_action('cy_register_blocks', $cyBlocks);

            do_action('cy_after_register_blocks', $cyBlocks);

        }, 15);

        add_action('cy_after_register_blocks', [$this, 'registerBlocks'], 10);
    }

    public static function getInstance()
    {
        if (self::$instance == null) {
            self::$instance = new Cyclops();
        }

        return self::$instance;
    }

    public function registerBlocks($blocks)
    {
        $registeredBlocks = [];

        foreach ($blocks as $block) {
            $attributes = $this->getAttributesFromBlock($block);
            $registeredBlocks[] = $this->registerBlock($block, $attributes);
        }

        $this->registerScriptFromBlocks($registeredBlocks);
    }

    protected function getAttributesFromBlock($block)
    {
        $attributes = [];

        if (is_array($block['fields'] ?? null)) {
            foreach ($block['fields'] as $field) {
                $attributes[$field['name']] = $this->getComputedField($field);
            }
        }

        return $attributes;
    }

    private function getComputedField($field)
    {

        // computed case
        if ($field['children'] ?? null) {
            $childs = [];
            foreach ($field['children'] as $child) {
                $childField = $child->getField();
                $childs[] = $this->getComputedField($childField);
            }
            $field['children'] = $childs;
        }

        return $field;
    }

    protected function registerBlock($block, $attributes)
    {
        $blockFields = [];

        foreach ($attributes as $key => $field) {
            $blockField = $attributes[$key] ?? null;

            if (!$blockField) continue;
            $blockFields[] = $blockField;
        }

        register_block_type('cyclops/' . $this->slugify($block['name']), [
            'render_callback' => function ($fields) use ($block, $attributes) {

                foreach ($fields as $key => $field) {
                    $blockField = $attributes[$key] ?? null;

                    if (!$blockField) continue;

                    if ($blockField['filterFunction'] ?? null) {
                        $fields[$key] = call_user_func($blockField['filterFunction'], $field);
                    }
                }

                ob_start();
                call_user_func($block['callback'], $fields);
                return ob_get_clean();
            },
            'attributes' => $attributes
        ]);

        $block['fields'] = $blockFields;
        return $block;
    }

    public static function slugify($text)
    {
        // replace non letter or digits by -
        $text = preg_replace('~[^\pL\d]+~u', '-', $text);

        // transliterate
        $text = iconv('utf-8', 'us-ascii//TRANSLIT', $text);

        // remove unwanted characters
        $text = preg_replace('~[^-\w]+~', '', $text);

        // trim
        $text = trim($text, '-');

        // remove duplicate -
        $text = preg_replace('~-+~', '-', $text);

        // lowercase
        $text = strtolower($text);

        if (empty($text)) {
            return 'n-a';
        }

        return $text;

    }

    protected function registerScriptFromBlocks($blocks)
    {
        add_action('admin_enqueue_scripts', function () use ($blocks) {
            wp_enqueue_script(
                'cy-block-scripts',
                plugins_url('/../../build/index.js', __FILE__),
                ['wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'wp-block-editor', 'wp-server-side-render']
            );
            wp_localize_script('cy-block-scripts', 'CY', ['blocks' => $blocks]);
        });
    }
}
