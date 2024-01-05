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
                <div class="flex justify-around p-2">
                     <div class="cursor-pointer w-auto h-auto">
                        <div class="flex-1 h-full">
                          <div class="flex items-center justify-center flex-1 h-full p-2 border border-blue-800 text-white shadow rounded-lg">
                            <div class="relative">
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-800" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                              </svg>
                            </div>
                          </div>
                        </div>
          </div>
                     <button class="inline-flex items-center w-20 px-2 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md">
                    \t<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    \t  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    \t</svg>
                    
                    \tDelete
                      </button>
                </div>
            </div>
        </div>`;
            })
        }
    })
}

getUsers();
