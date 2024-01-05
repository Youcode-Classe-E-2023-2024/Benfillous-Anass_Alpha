<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

include("vendor/phpmailer/phpmailer/src/Exception.php");
include("vendor/phpmailer/phpmailer/src/PHPMailer.php");
include("vendor/phpmailer/phpmailer/src/SMTP.php");

if (isset($_POST["reset-request-submit"])) {
    $email = filter_input(INPUT_POST, "email", FILTER_SANITIZE_EMAIL);

    $selector = bin2hex(random_bytes(8));
    // Random 32 binary bytes
    $token = random_bytes(32);
    $expiresDate = date("U") + 3600;
    $url = "http://localhost/benfillous-anass_alpha/index.php?page=change_password&selector=" . $selector . "&validator=" . bin2hex($token);

    if (empty($email)) {
        echo "email is empty";
    }
    $userRow = Password_recovery::checkUser($email);

    if ($userRow) {
        $requestRow = Password_recovery::checkRequest($email, "pwd_reset_email");
        if ($requestRow) {
            Password_recovery::deleteRequest($requestRow["pwd_reset_selector"]);
        }
    } else {
        header("Location: index.php?page=register");
        exit;
    }

    $hashedToken = password_hash($token, PASSWORD_DEFAULT);

    Password_recovery::addRequest($email, $selector, $hashedToken, $expiresDate);


    $username = $userRow["username"];
    $to = $email;
    $subject = "Reset Your Password!";
    $message = "
        <html>
        <head>
          <title>Password Recovery</title>
        </head>
        <body>
          <p>Hello, '$username'</p>
          <p>Click on the button below if you are the one trying to change your password. If not, please ignore this email and do not share the link.</p>
          
          <a href='$url' style='
            display: inline-block;
            padding: 10px 20px;
            font-size: 16px;
            font-weight: bold;
            text-align: center;
            text-decoration: none;
            background-color: #4CAF50;
            color: white;
            border-radius: 5px;
            cursor: pointer;'>
            Reset Password
          </a>
        
          <p>If you're having trouble clicking the button, you can also copy and paste the following URL into your browser:</p>
          <p><a href='$url'>$url</a></p>
        
          <p>Thank you!</p>
        </body>
        </html>
        ";

    $mail = new PHPMailer(true);

    $mail->isSMTP();
    $mail->Host = "smtp.gmail.com";
    $mail->SMTPAuth = true;
    $mail->Username = "Benfianass@gmail.com";
    $mail->Password = "iqoi liop ddze bjsh";
    $mail->SMTPSecure = "ssl";
    $mail->Port = "465";

    $mail->setFrom("Benfianass@gmail.com");
    $mail->addAddress($to);
    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body = $message;
    $mail->send();

    header("Location: index.php?page=login");
}