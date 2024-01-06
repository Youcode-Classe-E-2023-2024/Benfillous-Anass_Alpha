<?php
class Notification {
    function addNotification($user_id, $notification) {
        global $db;
        $sql = "INSERT INTO notification (user_id, notification) VALUES (?,?)";
        $stmt = mysqli_stmt_init($db);
        mysqli_stmt_prepare($stmt, $sql);
        mysqli_stmt_bind_param($stmt, "is", $user_id, $notification);
        mysqli_stmt_execute($stmt);
    }

    function showNotificationsNotSeen($user_id) {
        global $db;
        $sql = "SELECT * FROM notification WHERE user_id=? AND seen=0 ORDER BY notification_id DESC LIMIT 10";
        $stmt = mysqli_stmt_init($db);
        mysqli_stmt_prepare($stmt, $sql);
        mysqli_stmt_bind_param($stmt, "i", $user_id);
        mysqli_stmt_execute($stmt);
        $res = mysqli_stmt_get_result($stmt);

        $data= [];
        while ($row = mysqli_fetch_assoc($res)) {
            $data[] = $row;
        }
        return $data;
    }

    function showNotifications($user_id) {
        global $db;
        $sql = "SELECT * FROM notification WHERE user_id=? ORDER BY notification_id DESC LIMIT 10";
        $stmt = mysqli_stmt_init($db);
        mysqli_stmt_prepare($stmt, $sql);
        mysqli_stmt_bind_param($stmt, "i", $user_id);
        mysqli_stmt_execute($stmt);
        $res = mysqli_stmt_get_result($stmt);

        $data= [];
        while ($row = mysqli_fetch_assoc($res)) {
            $data[] = $row;
        }
        return $data;
    }

    function notificationSeen($notification_id) {
        global $db;
        $sql = "UPDATE notification SET seen=1";
        $stmt = mysqli_stmt_init($db);
        mysqli_stmt_prepare($stmt, $sql);
        mysqli_stmt_execute($stmt);
    }
}