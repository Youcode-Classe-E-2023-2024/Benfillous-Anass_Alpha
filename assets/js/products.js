const productsSection = document.getElementById("products-list-section");

function getProducts() {
    $.ajax({
        type: "POST",
        url: "index.php?page=dashboard",
        data: {products: true},
        success: (data) => {
            let products = JSON.parse(data);
            console.log(products);

            products.forEach((product) => {
                let description = product.body.substr(0, 40) + "...";
                productsSection.innerHTML += `<tr>
                                                                <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                    <p>${product.name}</p>
                                                                    <p class="text-xs text-gray-400">${description}
                                                                    </p>
                                                                </td>
                                                                <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                    <p>${products.length}</p>
                                                                </td>
                                                                <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                    <div class="flex text-green-500">
                                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                                             class="w-5 h-5 mr-1" fill="none"
                                                                             viewBox="0 0 24 24" stroke="currentColor">
                                                                            <path stroke-linecap="round"
                                                                                  stroke-linejoin="round"
                                                                                  stroke-width="2"
                                                                                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                                        </svg>
                                                                        <p>Active</p>
                                                                    </div>
                                                                </td>
                                                                <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                                                                    <div class="flex space-x-4">
                                                                        <a href="#"
                                                                           class="text-blue-500 hover:text-blue-600">
                                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                                 class="w-5 h-5 mr-1" fill="none"
                                                                                 viewBox="0 0 24 24"
                                                                                 stroke="currentColor">
                                                                                <path stroke-linecap="round"
                                                                                      stroke-linejoin="round"
                                                                                      stroke-width="2"
                                                                                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                                                                            </svg>
                                                                            <p>Edit</p>
                                                                        </a>
                                                                        <a href="#"
                                                                           class="text-red-500 hover:text-red-600">
                                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                                 class="w-5 h-5 mr-1 ml-3" fill="none"
                                                                                 viewBox="0 0 24 24"
                                                                                 stroke="currentColor">
                                                                                <path stroke-linecap="round"
                                                                                      stroke-linejoin="round"
                                                                                      stroke-width="2"
                                                                                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                                                            </svg>
                                                                            <p>Delete</p>
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>`;
            })
        }
    })
}

getProducts();

function addProduct(title, description) {
    $.post(
        "https://jsonplaceholder.typicode.com/users",
        {
            title,
            description
        },
        (data, status) => {
            console.log(status);
        }
    )
}

const productSubmitBtn = document.getElementById("product-submit-btn");
const title = document.getElementById("title");
const description = document.getElementById("description");

productSubmitBtn.addEventListener("click", () => {
    console.log(title.value);
    console.log(description.value);

    addUser(title.value, description.value);
});