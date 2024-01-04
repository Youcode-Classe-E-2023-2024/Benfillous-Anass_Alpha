const usersSection = document.getElementById("users-list-section");

function getUsers() {
    $.ajax({
        type: "POST",
        url: "index.php?page=dashboard",
        data: {users: true},
        success: (data) => {
            let users = JSON.parse(data);

            users.forEach((user) => {
                usersSection.innerHTML += `
        <div class="col-12 col-sm-6 col-lg-3">
            <div class="single_advisor_profile wow fadeInUp" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;">
                <!-- Team Thumb-->
                <div class="advisor_thumb"><img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="">
                    <!-- Social Info-->
                    <div class="social-info"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-linkedin"></i></a></div>
                </div>
                <!-- Team Details-->
                <div class="single_advisor_details_info">
                    <h6>${user.name}</h6>
                    <p class="designation">${user.email}</p>
                </div>
            </div>
        </div>`;
            })
        }
    })
}

getUsers();
