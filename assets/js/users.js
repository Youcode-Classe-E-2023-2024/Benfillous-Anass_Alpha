const usersSection = document.getElementById("users-list-section");

let clickedUserID;

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
                     <div class="edit-user cursor-pointer w-auto h-auto"  data-user-id="${user.id}" data-user-name="${user.name}" data-user-email="${user.email}">
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
                     <button data-user-id="${user.id}" class="delete-User inline-flex items-center w-20 px-2 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md">
                    \t<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    \t  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    \t</svg>
                    
                    \tDelete
                      </button>
                </div>
            </div>
        </div>`;
            })

            $(document).ready(function () {
                // Edit product click event
                $('.edit-user').click(function () {
                    clickedUserID = $(this).data('user-id');
                    let username = $(this).data('user-name');
                    let userEmail = $(this).data('user-email');
                    editUserFormContainer.classList.remove("hidden");
                    usersContainer.classList.add("hidden");
                    name.value = username;
                    email.value = userEmail;
                });

                // Delete product click event
                $('.delete-User').click(function () {
                    clickedUserID = $(this).data('user-id');
                    deleteUser(clickedUserID);
                });
            });
        }
    })
}

getUsers();


function addUser(name, email) {
    $.post(
        "https://jsonplaceholder.typicode.com/users",
        {
            name,
            email
        },
        (data, status) => {
            console.log(status);
        }
    )
}

function editUser(name, email, id) {
    $.ajax({
        type: "PUT",
        url: `https://jsonplaceholder.typicode.com/users/${id}`,
        data: {
            name,
            email
        },
        success: (data, status) => {
            console.log(status);
        }
    })
}

function deleteUser(id) {
    $.ajax({
        type: "DELETE",
        url: `https://jsonplaceholder.typicode.com/users/${id}`,
        success: (data, status) => {
            console.log(status);
        }
    })
}

function addMultipleUsers(infoArray) {
    infoArray.forEach((info) => {
        addProduct(info.title, info.description);
    })
}

const userSubmitBtn = document.getElementById("user-submit-btn");

userSubmitBtn.addEventListener('click', function () {
    // Gather data from all user forms and submit
    var userForms = document.querySelectorAll('.user-form');
    var formData = [];

    userForms.forEach(function (form) {
        var fullName = form.querySelector('[name="full_name"]').value;
        var email = form.querySelector('[name="email"]').value;
        formData.push({name: fullName, email: email});
    });
    addMultipleUsers(formData);
});

const editUserBtn = document.getElementById("user-edit-submit-btn");

const name = document.getElementById("edit-full_name");
const email = document.getElementById("edit-email");
editUserBtn.addEventListener("click", () => {
    editProduct(name.value, email.value, clickedUserID);
})