<?php

if (isset($_POST['logout'])) {
    $authentication = new Authentication();
    $authentication->logout();
}


if (isset($_POST["products"])) {
    header("Access-Control-Allow-Origin: *");
    $url = "https://jsonplaceholder.typicode.com/comments";
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

if(isset($_POST["request"]) && $_POST["request"] === "addNotification") {
    $notification = new Notification;
    $notificationDetail = $_POST["notification"];
    $notification->addNotification($_SESSION["user_id"], $notificationDetail);
    exit;
}
    exit;
}