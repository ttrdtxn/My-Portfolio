// interactions.js

document.addEventListener('DOMContentLoaded', () => {
    const buyerProducts = document.getElementById("buyerProducts");
    console.log(buyerProducts); // Check if it's null or defined
    displayProducts();

    function displayProducts() {
        const buyerProducts = document.getElementById('buyerProducts');
        let products = JSON.parse(localStorage.getItem('products')) || [];

        if (!buyerProducts) {
            console.error("buyerProducts element is missing!");
            return;
        }

        buyerProducts.innerHTML = ''; // Clear previous content
        

        if (products.length === 0) {
            buyerProducts.innerHTML = '<p>No products available.</p>';
            return;
        }

        products.forEach((product, index) => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}" width="150">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>Price: $${product.price}</p>
                <p>Stock: ${product.quantity}</p>
                <button class="add-to-cart" data-index="${index}">Add to Cart</button>
            `;
            buyerProducts.appendChild(productCard);
        });

        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', addToCart);
        });
    }

    function addToCart(event) {
        const productIndex = event.target.dataset.index;
        let products = JSON.parse(localStorage.getItem('products')) || [];
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        const selectedProduct = products[productIndex];
        if (selectedProduct.quantity <= 0) {
            alert('This product is out of stock!');
            return;
        }

        cart.push(selectedProduct);
        selectedProduct.quantity--; // Reduce stock
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('products', JSON.stringify(products));

        alert(`${selectedProduct.name} added to cart!`);
        displayProducts(); // Refresh product list to show updated stock
    }
});



