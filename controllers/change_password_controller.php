<?php
if (isset($_POST["reset-password-submit"])) {
    $password = filter_input(INPUT_POST, "password", FILTER_SANITIZE_SPECIAL_CHARS);
    $passwordRepeat = filter_input(INPUT_POST, "re-password", FILTER_SANITIZE_SPECIAL_CHARS);

    $selector = $_POST["selector"];
    $validator = hex2bin($_POST["validator"]);
    $actualDate = date("U");
    if (empty($password) || empty($passwordRepeat)) {
        echo "password is empty";
        exit;
    } else if ($password !== $passwordRepeat) {
        echo "the passwords is not the same";
        exit;
    }

    if ($row = Password_recovery::checkRequest($selector, "pwd_reset_selector")) {
        $hashedValidator = $row["pwd_reset_token"];
        $expiresDate = $row["pwd_reset_expires"];
    } else {
        echo "No matching record found";
    }

    $hashedValidator = $row["pwd_reset_token"];
    $expiresDate = $row["pwd_reset_expires"];
    if (!password_verify($validator, $hashedValidator) && $actualDate <= $expiresDate) {
        header("Location: ../index.php?passwdReset=failed");
    } else {
        $user_email = $row["pwd_reset_email"];
        $newHashedPsswd = password_hash($password, PASSWORD_DEFAULT);
        Password_recovery::updatePassword($user_email, $newHashedPsswd);
    }
    header("Location: index.php?page=login&password=changed");
}