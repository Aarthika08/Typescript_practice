   // admin.js
interface Product {
    name: string;
    price: string;
    url: string;
    description: string;
}

function addProduct() {
    // Get form values
    var productName = (document.getElementById("productName") as HTMLInputElement).value;
    var productPrice = (document.getElementById("productPrice") as HTMLInputElement).value;
    var productUrl = (document.getElementById("productUrl") as HTMLInputElement).value;
    var productDescription = (document.getElementById("productDescription") as HTMLInputElement).value;


    //validation
 if (!productName.trim() || !productPrice.trim() || !productUrl.trim()|| !productPrice.trim()) {
        alert("Please fill in all required fields  before adding a product.");
        return;
    }
    // Create a new product element
    var productElement = document.createElement("div");
    productElement.innerHTML = "<p><strong>" + productName + "</strong>: $" + productPrice + "</p>";

    // Display the URL if provided
    if (productUrl) {
        productElement.innerHTML += "<p><a href='" + productUrl + "' target='_blank'>Product URL</a></p>";
    }

    // Display the description if provided
    if (productDescription) {
        productElement.innerHTML += "<p>Description: " + productDescription + "</p>";
    }

     // Append the product element to the productsContainer
     var productsContainer = document.getElementById("productsContainer");
     if (productsContainer) {
         productsContainer.appendChild(productElement);
     }

    

    // Save the product data to localStorage
    saveProductToLocalStorage(productName, productPrice, productUrl, productDescription);

    // Redirect to the products page
    window.location.href = "product.html";

    // Clear form fields
    (document.getElementById("productName")as HTMLInputElement).value = "";
    (document.getElementById("productPrice")as HTMLInputElement).value = "";
    (document.getElementById("productUrl")as HTMLInputElement).value = "";
    (document.getElementById("productDescription")as HTMLInputElement).value = "";
}

function saveProductToLocalStorage(name, price, url, description) {
   // var existingProducts: Product[] = JSON.parse(localStorage.getItem("products")) || "[]");
     var existingProducts: Product[] = JSON.parse(localStorage.getItem("products") || "[]");

    existingProducts.push({ name: name, price: price, url: url, description: description });
    localStorage.setItem("products", JSON.stringify(existingProducts));
}
