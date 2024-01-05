<?php
if (isset($_GET["selector"], $_GET["validator"])) {
    $selector = $_GET["selector"];
    $validator = $_GET["validator"];
} elseif (empty($selector) || empty($validator)) {
    header("Location: index?page=login");
}
?>

<div class="h-screen" style="background-color: black">
    <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
    </div>
    <form method="post" action="index.php?page=change_password" class="form">
        <h3 class="text-white">Request To Change Your Password</h3>
        <input type="hidden" name="validator" value="<?php echo $validator; ?>">
        <input type="hidden" name="selector" value="<?php echo $selector; ?>">
        <label for="username">Password</label>
        <input class="recover-input" name="password" type="password" placeholder="Password" id="password">
        <label for="username">Re-type Password</label>
        <input class="recover-input" name="re-password" type="password" placeholder="Re-type Password" id="re-password">
        <div class="social px-6 flex justify-center ">
            <button name="reset-password-submit" id="btn">Change</button>
        </div>
        <div class="social items-center flex-col">
            <p class="text-sm mb-4">Or</p>
            <a href="index.php?page=login">
                <div class="cursor-pointer">Login</div>
            </a>
        </div>
    </form>
</div>