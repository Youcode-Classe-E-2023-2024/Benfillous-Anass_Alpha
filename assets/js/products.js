function getProducts() {
    $.ajax({
        type: "POST",
        url: "index.php?page=dashboard",
        data: {products: true},
        success: (data) => {
            let products = JSON.parse(data);
            console.log(products);
        }
    })
}

getProducts();
