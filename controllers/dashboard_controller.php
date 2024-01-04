<?php


if (isset($_POST['login'])) {
    echo 'Is login';
}

if (isset($_POST['logout'])) {
    $authentication = new Authentication();
    $authentication->logout();
}


if (isset($_POST["products"])) {
    header("Access-Control-Allow-Origin: *");
    $url = "https://jsonplaceholder.typicode.com/posts";
    $data = file_get_contents($url);
    echo $data;
    exit;
}
