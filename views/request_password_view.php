<div class="h-screen" style="background-color: black">
    <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
    </div>
    <form method="post" action="index.php?page=password_recovery" class="form">
        <h3 class="text-white">Request To Change Your Password</h3>

        <label for="username">Username</label>
        <input class="recover-input" name="email" type="text" placeholder="Email" id="username">

        <div class="social px-6 flex justify-center ">
            <button name="reset-request-submit" id="btn">Send</button>
        </div>
        <div class="social items-center flex-col">
            <p class="text-sm mb-4">Or</p>
            <a href="index.php?page=login">
                <div class="cursor-pointer">Login</div>
            </a>
        </div>
    </form>
</div>