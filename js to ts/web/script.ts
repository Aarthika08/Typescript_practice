document.addEventListener("DOMContentLoaded", () => {
    // DOM elements
    let quote = document.getElementById("quote") as HTMLElement;
    let cite = document.getElementById("author") as HTMLElement;
    let button = document.getElementById("btn") as HTMLElement;

    function updateQuote() {
        // Fetch a random quote from the Quotable API
        fetch("https://api.quotable.io/random")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => {
                // Update DOM elements
                quote.textContent = data.content;
                cite.textContent = data.author;
            })
            .catch(error => {
                quote.textContent = "An error occurred";
                console.error(error);
            });
    }

    // Attach an event listener to the `button`
    button.addEventListener("click", updateQuote);

    // Call updateQuote once when the page loads
    updateQuote();
});
