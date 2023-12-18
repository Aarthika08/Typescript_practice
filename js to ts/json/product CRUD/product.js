 document.addEventListener("DOMContentLoaded", function () {
    var productsContainer = document.getElementById("productsContainer");
    var products = JSON.parse(localStorage.getItem("products")) || [];
    products.forEach(function (product) {
        var productElement = document.createElement("div");
        productElement.innerHTML = "<p><strong>".concat(product.name, "</strong>: $").concat(product.price, "</p>");
        // Display the image if available
        if (product.image) {
            var imgElement = document.createElement("img");
            imgElement.src = URL.createObjectURL(product.image);
            productElement.appendChild(imgElement);
        }
        productsContainer.appendChild(productElement);
    });
});
