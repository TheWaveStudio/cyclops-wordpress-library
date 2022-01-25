<?php
/*
 * Plugin Name: Cyclops Demo
 *
 * */

require_once __DIR__ . '/vendor/autoload.php';

use Cyclops\Blocks\Block;
use Cyclops\Blocks\Field;
use Cyclops\Cyclops;

\add_action('init', function () {
    $instance = Cyclops::getInstance();
});

add_action('cy_register_blocks', function () {
    $block = (new Block('hero'));

    $block
        ->showTitle()
        ->addFields([
            Field::create('text', 'title', 'Title')
                ->setWidth(50),
//      Field::create('richText', 'copy')
//        ->setWidth(50),
            Field::create('media', 'image')
                ->setWidth(50),

            Field::create('cta', 'cta')
                ->setWidth(50),
//                ->setFilter('wf_get_image_url')

            Field::create('datePicker', 'eventDate'), // https://react-day-picker.js.org/
            Field::create('addable', 'details', 'Titolone')
                ->addFields([
                    Field::create('text', 'title'),
                    Field::create('rich_text', 'content'),
                ])
        ])
        ->setCallback(function ($fields) {
//      $fields['copy'] ??= '';
//
            echo '<div style="display:none;">';
            var_dump($fields);
            echo '</div>';
//      printf('<div>Foto selezionata:</div>');
//      print_r($fields['image']);
//      printf('<div>Data selezionata: %s</div>', $fields['eventDate'] ?? '');
//      echo "<div><h3 class=\"title\">{$fields['title']}</h3><div class=\"copy\">{$fields['copy']}</div></div>";
        })
        ->register();
});
