<?php
if (isset($_POST["products"])) {
    header("Access-Control-Allow-Origin: *");
    $url = "https://jsonplaceholder.typicode.com/posts";
    $data = file_get_contents($url);
    echo $data;
    exit;
}