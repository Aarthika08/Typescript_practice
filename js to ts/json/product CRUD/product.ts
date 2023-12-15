interface Product {
    name: string;
    price: string;
    image?: Blob;
}

document.addEventListener("DOMContentLoaded", function () {
    var productsContainer = document.getElementById("productsContainer") as HTMLDivElement;
    var products: Product[] = JSON.parse(localStorage.getItem("products")) || [];

    products.forEach(function (product) {
        var productElement = document.createElement("div");
        productElement.innerHTML = `<p><strong>${product.name}</strong>: $${product.price}</p>`;

        // Display the image if available
        if (product.image) {
            var imgElement = document.createElement("img");
            imgElement.src = URL.createObjectURL(product.image);
            productElement.appendChild(imgElement);
        }

        productsContainer.appendChild(productElement);
    });
});
