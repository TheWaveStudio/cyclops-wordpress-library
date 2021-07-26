<?php


require_once __DIR__ . '/vendor/autoload.php';
require_once __DIR__ . "/commons/index.php";

require_once __DIR__ . "/blocks/index.php";
require_once __DIR__ . "/options/index.php";


add_action('init', function () {

    global $cyBlocks;

    $cyBlocks = [];

    do_action('cy_before_register_blocks');

    do_action('cy_register_blocks', $cyBlocks);

    do_action('cy_after_register_blocks', $cyBlocks);

}, 15);
