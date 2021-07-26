<?php

namespace TW\Cyclops;

require_once __DIR__ . "/Classes/Cyclops.php";

add_action('init', function () {
    $instance = Cyclops::getInstance();
});
