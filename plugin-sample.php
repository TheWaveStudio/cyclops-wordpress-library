<?php
/*
 * Plugin Name: Cyclops Demo
 *
 * */

require_once __DIR__ . "/index.php";

use TW\Cyclops\Blocks\Block;
use TW\Cyclops\Blocks\Field;

add_action('cy_register_blocks', function () {
    $block = (new Block('test'));

    $block
        ->showTitle()
        ->addFields([
            Field::create('text', 'title')
                ->setWidth(50),
            Field::create('richText', 'copy')
                ->setWidth(50),
            Field::create('media', 'image')
                ->setWidth(50)
//                ->setFilter('wf_get_image_url')
            ,
            Field::create('datePicker', 'eventDate'), // https://react-day-picker.js.org/
            Field::create('addable', 'details')
                ->addFields([
                    Field::create('text', 'title')
                ])
        ])
        ->setCallback(function ($fields) {
            printf('<div>Foto selezionata: %s</div>', $fields['image']);
            printf('<div>Data selezionata: %s</div>', $fields['eventDate']);
            echo "<div><h3 class=\"title\">{$fields['title']}</h3><div class=\"copy\">{$fields['copy']}</div></div>";
        })
        ->register();
});

