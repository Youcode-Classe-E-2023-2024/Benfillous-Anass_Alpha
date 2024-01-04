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
                productsSection.innerHTML += `    <div class="relative mx-auto w-full">
        <a href="#" class="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full">
            <div class="shadow p-4 rounded-lg bg-white">
                <div class="flex justify-center relative rounded-lg overflow-hidden h-52">
                    <div class="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
                        <img src="${product.url}" class="absolute inset-0 bg-black opacity-10">
                    </div>


                    <span class="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10 bg-red-500 text-sm font-medium text-white select-none">
\t\t\tProduct #${product.id}
\t\t  </span>
                </div>

                <div class="mt-4">
                    <h2 class="font-medium text-base md:text-lg text-gray-800 line-clamp-1" title="New York">
                        ${product.title}
                    </h2>
                    <p class="mt-2 text-sm text-gray-800 line-clamp-1" title="New York, NY 10004, United States">
                        New York, NY 10004, United States
                    </p>
                </div>

            </div>
        </a>
    </div>`;
            })
        }
    })
}

getProducts();
