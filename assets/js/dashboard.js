const dashboardBtn = document.getElementById("dashboard-btn");
const productsBtn = document.getElementById("products-btn");
const usersBtn = document.getElementById("users-btn");
const productsContainer = document.getElementById("products-container");
const usersContainer = document.getElementById("users-container");
const dashboardContainer = document.getElementById("dashboard-container");
const editProductFormContainer = document.getElementById("edit-product-form-container");
const editUserFormContainer = document.getElementById("user-edit-form-container");

dashboardBtn.addEventListener("click", () => {
    productsContainer.classList.add("hidden");
    usersContainer.classList.add("hidden");
    dashboardContainer.classList.remove("hidden");
    productForm.classList.add("hidden");
    userForm.classList.add("hidden");
    editProductFormContainer.classList.add("hidden");
    editUserFormContainer.classList.add("hidden");
});

usersBtn.addEventListener("click", () => {
    productsContainer.classList.add("hidden");
    usersContainer.classList.remove("hidden");
    dashboardContainer.classList.add("hidden");
    productForm.classList.add("hidden");
    userForm.classList.add("hidden");
    editProductFormContainer.classList.add("hidden");
    editUserFormContainer.classList.add("hidden");
});

productsBtn.addEventListener("click", () => {
    productsContainer.classList.remove("hidden");
    usersContainer.classList.add("hidden");
    dashboardContainer.classList.add("hidden");
    productForm.classList.add("hidden");
    userForm.classList.add("hidden");
    editProductFormContainer.classList.add("hidden");
    editUserFormContainer.classList.add("hidden");
});


const productAddBtn = document.getElementById("product-add-btn");
const productForm = document.getElementById("product-form-container");

productAddBtn.addEventListener("click", () => {
    productsContainer.classList.add("hidden");
    productForm.classList.remove("hidden");
})

const userAddBtn = document.getElementById("user-add-btn");
const userForm = document.getElementById("user-form-container");


userAddBtn.addEventListener("click", () => {
    usersContainer.classList.add("hidden");
    userForm.classList.remove("hidden");
})

document.getElementById('add-product-btn').addEventListener('click', function () {
    const productFormContainer = document.getElementById('product-forms-container');
    const clone = productFormContainer.querySelector('.product-form').cloneNode(true);

    const inputs = clone.querySelectorAll('input');
    inputs.forEach(function (input) {
        input.value = '';
    });

    productFormContainer.appendChild(clone);
});

document.getElementById('add-user-btn').addEventListener('click', function () {
    const userFormContainer = document.getElementById('user-forms-container');
    const clone = userFormContainer.querySelector('.user-form').cloneNode(true);

    const inputs = clone.querySelectorAll('input');
    inputs.forEach(function (input) {
        input.value = '';
    });

    userFormContainer.appendChild(clone);
});

function addToNotification(notification) {
    $.ajax({
        type: "POST",
        url: "index.php?page=dashboard",
        data: {
            request: "addNotification",
            notification
        },
        success: (data) => {
            console.log(data);
            displayNotification()
        }
    })
}


const notifBtn = document.getElementById("openNotif");
const notificationList = document.getElementById("notificationList");

notifBtn.addEventListener("click", () => {
    notificationList.classList.toggle("hidden");
})

const notificationContainer = document.getElementById("notificationContainer");

function displayNotification() {
    notificationContainer.innerHTML = "";
    $.ajax({
        type: 'post',
        url: 'index.php?page=dashboard',
        data: {
            request: "displayNotification"
        },
        success: (data) => {
            let notifications = JSON.parse(data);
            console.log(notifications);
            notifications.forEach((notification) => {
                notificationContainer.innerHTML += `<li class="flex">
                                    <div class="text-white inline-flex items-center justify-between w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800">
                                        <span>${notification.notification}</span>
                                    </div>
                                </li>`;
            })
        }
    })
}

displayNotification();

function notificationHasBeenSeen(notificationId) {
    $.ajax({
        type: "post",
        url: "index.php?page=dashboard",
        data: {
            request: "notificationSeen",
            notificationId
        },
        success: (data) => {
            console.log(data);
        }
    })
}