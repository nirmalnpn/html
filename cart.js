// Sample cart array to store added products
let cart = [];

// Function to handle "Add to Cart" click event
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productId = button.getAttribute('data-product-id');
        addToCart(productId);
    });
});

// Function to add a product to the cart
function addToCart(productId) {
    // Simulate getting product details based on productId
    const product = {
        id: productId,
        name: `Product ${productId}`,
        price: parseFloat(document.querySelector(`button[data-product-id="${productId}"]`).previousElementSibling.textContent.replace('$', ''))
    };

    // Add product to the cart array
    cart.push(product);
    console.log(`Added to cart:`, product);

    // Update cart count or display cart contents as needed
    updateCartUI();
}

// Function to update the cart UI
function updateCartUI() {
    const cartCount = document.querySelector('.navbar-cart span');
    cartCount.textContent = cart.length;
}

// Initial setup to display the cart count (optional)
updateCartUI();
