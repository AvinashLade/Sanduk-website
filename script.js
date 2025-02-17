document.addEventListener("DOMContentLoaded", () => {
    const cart = [];
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const productElement = event.target.closest(".product");
            const productName = productElement.querySelector("h3").innerText;
            const productPrice = productElement.querySelector("p").innerText;

            const product = { name: productName, price: productPrice };
            cart.push(product);

            alert(`${productName} added to cart!`);
            console.log(cart);
        });
    });
});
