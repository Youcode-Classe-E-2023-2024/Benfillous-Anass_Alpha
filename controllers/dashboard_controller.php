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
    $url = "https://jsonplaceholder.typicode.com/photos";
    $data = file_get_contents($url);

    // Decode JSON data into PHP array
    $dataArray = json_decode($data, true);

    // Limit the number of items
    $limit = 10; // Adjust the limit as needed
    $limitedData = array_slice($dataArray, 0, $limit);

    // Encode the limited data back to JSON
    $limitedDataJson = json_encode($limitedData);

    // Output the limited data
    echo $limitedDataJson;
    exit;
}

if (isset($_POST["users"])) {
    header("Access-Control-Allow-Origin: *");
    $url = "https://jsonplaceholder.typicode.com/users";
    $data = file_get_contents($url);
    echo $data;
    exit;
}