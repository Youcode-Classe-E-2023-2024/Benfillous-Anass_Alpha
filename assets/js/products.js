const productsSection = document.getElementById("products-list-section");

let clickedProductID;
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
                                                                        <div data-product-id="${product.id}"
                                                                           class="edit-product cursor-pointer text-blue-500 hover:text-blue-600">
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
                                                                        </div>
                                                                        <div data-product-id="${product.id}"
                                                                           class="cursor-pointer delete-product text-red-500 hover:text-red-600">
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

            $(document).ready(function() {
                // Edit product click event
                $('.edit-product').click(function() {
                    clickedProductID = $(this).data('product-id');
                    editProductFormContainer.classList.remove("hidden");
                    productsContainer.classList.add("hidden");
                });

                // Delete product click event
                $('.delete-product').click(function() {
                    clickedProductID = $(this).data('product-id');
                    deleteProduct(clickedProductID);
                });
            });

        }
    })
}

getProducts();

function addProduct(title, description) {
    $.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
            title,
            description
        },
        (data, status) => {
            console.log(status);
        }
    )
}

const title = document.getElementById("edit-title");
const description = document.getElementById("edit-description");

function editProduct(title, description, id) {
    $.ajax({
        type: "PUT",
        url: `https://jsonplaceholder.typicode.com/posts/${id}`,
        data: {
            title,
            description
        },
        success: (data, status) => {
            console.log(status);
        }
    })
}

function deleteProduct(id) {
    $.ajax({
        type: "DELETE",
        url: `https://jsonplaceholder.typicode.com/posts/${id}`,
        success: (data, status) => {
            console.log(status);
        }
    })
}

function addMultipleProducts(infoArray) {
    infoArray.forEach((info) => {
        addProduct(info.title, info.description);
    })
}

document.getElementById('product-submit-btn').addEventListener('click', function () {
    const productForms = document.querySelectorAll('.product-form');
    let formData = [];

    productForms.forEach((form) => {
        let title = form.querySelector('[name="title"]').value;
        let description = form.querySelector('[name="description"]').value;
        formData.push({ title: title, description: description });
    });

    addMultipleProducts(formData);
});

const editProductBtn = document.getElementById("edit-product-submit-btn");

editProductBtn.addEventListener("click", () => {
    editProduct(title.value, description.value, clickedProductID);
})