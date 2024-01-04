const dashboardBtn = document.getElementById("dashboard-btn");
const productsBtn = document.getElementById("products-btn");
const usersBtn = document.getElementById("users-btn");
const productsContainer = document.getElementById("products-container");
const usersContainer = document.getElementById("users-container");
const dashboardContainer = document.getElementById("dashboard-container");

dashboardBtn.addEventListener("click", () => {
    productsContainer.classList.add("hidden");
    usersContainer.classList.add("hidden");
    dashboardContainer.classList.remove("hidden");
});

usersBtn.addEventListener("click", () => {
    productsContainer.classList.add("hidden");
    usersContainer.classList.remove("hidden");
    dashboardContainer.classList.add("hidden");
});

productsBtn.addEventListener("click", () => {
    productsContainer.classList.remove("hidden");
    usersContainer.classList.add("hidden");
    dashboardContainer.classList.add("hidden");
});