<?php


if (isset($_POST['login'])) {
    echo 'Is login';
}

if (isset($_POST['logout'])) {
    $authentication = new Authentication();
    $authentication->logout();
}
