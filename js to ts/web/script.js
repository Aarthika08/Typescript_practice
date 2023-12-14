document.addEventListener("DOMContentLoaded", function () {
    // DOM elements
    var quote = document.getElementById("quote");
    var cite = document.getElementById("author");
    var button = document.getElementById("btn");
    function updateQuote() {
        // Fetch a random quote from the Quotable API
        fetch("https://api.quotable.io/random")
            .then(function (response) {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
            .then(function (data) {
            // Update DOM elements
            quote.textContent = data.content;
            cite.textContent = data.author;
        })
            .catch(function (error) {
            quote.textContent = "An error occurred";
            console.error(error);
        });
    }
    // Attach an event listener to the `button`
    button.addEventListener("click", updateQuote);
    // Call updateQuote once when the page loads
    updateQuote();
});
