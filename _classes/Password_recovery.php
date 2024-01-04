<?php
class Password_recovery {
    function checkRequest($email) {
        global $db;
        $sql = "SELECT * FROM password_recovery WHERE pwd_reset_email=?";
        $stmt = mysqli_stmt_init($db);
        mysqli_stmt_prepare($stmt, $sql);
        mysqli_stmt_bind_param($stmt, "s", $email);
        mysqli_stmt_execute($stmt);
    }

    function addRequest($email, $selector, $token, $date) {
        global $db;
        $sql = "INSET INTO password_recovery (pwd_reset_email, pwd_reset_selector, pwd_reset_token, pwd_reset_expires) VALUES (?, ?, ?, ?)";
        $stmt = mysqli_stmt_init($db);
        mysqli_stmt_prepare($stmt, $sql);
        mysqli_stmt_bind_param($stmt, "sssi", $email, $selector, $token, $date);
        mysqli_stmt_execute($stmt);
    }

    function deleteRequest($selector) {
        global $db;
        $sql = "DELETE FROM password_recovery WHERE pwd_reset_selector=?";
        $stmt = mysqli_stmt_init($db);
        mysqli_stmt_prepare($stmt, $sql);
        mysqli_stmt_bind_param($stmt, "s", $selector);
        mysqli_stmt_execute($stmt);
    }

    function updatePassword($email, $password) {
        global $db;
        $sql = "UPDATE password_recovery SET password=? WHERE pwd_reset_email=?";
        $stmt = mysqli_stmt_init($db);
        mysqli_stmt_prepare($stmt, $sql);
        mysqli_stmt_bind_param($stmt, "ss", $email, $password);
        mysqli_stmt_execute($stmt);
    }
}