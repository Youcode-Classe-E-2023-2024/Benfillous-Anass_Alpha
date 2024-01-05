<?php
class Password_recovery {
    static function checkRequest($selector, $col) {
        global $db;
        $sql = "SELECT * FROM password_recovery WHERE `$col`=?";
        $stmt = mysqli_stmt_init($db);
        mysqli_stmt_prepare($stmt, $sql);
        mysqli_stmt_bind_param($stmt, "s", $selector);
        mysqli_stmt_execute($stmt);
        $res = mysqli_stmt_get_result($stmt);

        return mysqli_fetch_assoc($res);
    }

    static function checkUser($email) {
        global $db;
        $sql = "SELECT * FROM user WHERE email=?";
        $stmt = mysqli_stmt_init($db);
        mysqli_stmt_prepare($stmt, $sql);
        mysqli_stmt_bind_param($stmt, "s", $email);
        mysqli_stmt_execute($stmt);

        $res = mysqli_stmt_get_result($stmt);

        return mysqli_fetch_assoc($res);
    }

    static function addRequest($email, $selector, $token, $date) {
        global $db;
        $sql = "INSERT INTO password_recovery (pwd_reset_email, pwd_reset_selector, pwd_reset_token, pwd_reset_expires) VALUES (?, ?, ?, ?)";
        $stmt = mysqli_stmt_init($db);
        mysqli_stmt_prepare($stmt, $sql);
        mysqli_stmt_bind_param($stmt, "sssi", $email, $selector, $token, $date);
        mysqli_stmt_execute($stmt);
    }

    static function deleteRequest($selector) {
        global $db;
        $sql = "DELETE FROM password_recovery WHERE pwd_reset_selector=?";
        $stmt = mysqli_stmt_init($db);
        mysqli_stmt_prepare($stmt, $sql);
        mysqli_stmt_bind_param($stmt, "s", $selector);
        mysqli_stmt_execute($stmt);
    }

    static function updatePassword($email, $password) {
        global $db;
        $sql = "UPDATE user SET password=? WHERE email=?";
        $stmt = mysqli_stmt_init($db);
        mysqli_stmt_prepare($stmt, $sql);
        mysqli_stmt_bind_param($stmt, "ss", $password, $email);
        mysqli_stmt_execute($stmt);
    }
}