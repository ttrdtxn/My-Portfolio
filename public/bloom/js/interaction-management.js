console.log("interaction-management.js loaded");

// Products storage
let products = [];
let productIdCounter = 0;  // Unique ID for each product
let cart = [];  // Buyer's cart

// Show sections dynamically
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.style.display = 'none');
    const section = document.getElementById(sectionId);
    if (section) {
        section.style.display = 'block';
    } else {
        console.error(`Section with ID ${sectionId} not found!`);
    }
}

// Function to show toast notifications
function showToast(message, type) {
    const toastContainer = document.getElementById('toastContainer');
    if (!toastContainer) {
        console.error('Toast container not found!');
        return;
    }

    const toast = document.createElement('div');
    toast.classList.add('toast', type);

    // Icons based on type
    let icon;
    switch (type) {
        case 'success':
            icon = '✔️';
            break;
        case 'error':
            icon = '❌';
            break;
        case 'warning':
            icon = '⚠️';
            break;
        case 'info':
            icon = 'ℹ️';
            break;
        default:
            icon = '';
    }

    toast.innerHTML = `<span class="icon">${icon}</span> <span>${message}</span>`;
    toastContainer.appendChild(toast);

    // Auto remove after 3 seconds
    setTimeout(() => {
        toast.classList.add('fade-out');
    }, 100);

    // Remove toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove('fade-out');
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}

// Seller adds a product
function addProduct() {
    const name = document.getElementById('productName').value;
    const price = document.getElementById('productPrice').value;
    const description = document.getElementById('productDescription').value;

    if (name && price && description) {
        const product = { id: productIdCounter++, name, price, description };
        products.push(product);
        updateProductLists();
        showToast('Product added successfully!', 'success');
        document.getElementById('addProductForm').reset();
    } else {
        showToast('Please fill all fields.', 'error');
    }
}

// Admin deletes a product
function deleteProduct(productId) {
    products = products.filter(product => product.id !== productId);
    updateProductLists();
    showToast('Product deleted successfully!', 'success');
}

// Admin edits a product
function editProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const newName = prompt('Enter new product name:', product.name);
        const newPrice = prompt('Enter new product price:', product.price);
        const newDescription = prompt('Enter new product description:', product.description);
        if (newName && newPrice && newDescription) {
            product.name = newName;
            product.price = newPrice;
            product.description = newDescription;
            updateProductLists();
            showToast('Product updated successfully!', 'success');
        }
    }
}

// Buyer adds a product to cart
function addToCart(productId, buttonElement) {
    console.log(`Adding Product ID: ${productId}`);  // Debugging ID

    const product = products.find(p => p.id === productId);
    if (!product) {
        console.error(`Product not found: ID ${productId}`);
        return;
    }

    const quantityInput = buttonElement.parentElement.querySelector('input[type="number"]');
    if (!quantityInput) {
        console.error(`Quantity input not found for product ID: ${productId}`);
        return;
    }

    const quantity = parseInt(quantityInput.value.trim(), 10) || 1;
    console.log(`Product ID: ${productId}, Quantity Entered: ${quantity}`);

    if (quantity > 0) {
        const existingCartItem = cart.find(item => item.id === productId);
        if (existingCartItem) {
            existingCartItem.quantity += quantity;
            console.log(`Updated ${existingCartItem.name} in cart. New quantity: ${existingCartItem.quantity}`);
        } else {
            cart.push({ ...product, quantity });
            console.log(`Added ${product.name} to cart with quantity: ${quantity}`);
        }
        showToast(`Added ${quantity} x ${product.name} to cart.`, 'success');
    } else {
        showToast('Invalid quantity. Please enter a valid number.', 'error');
    }

    console.log("Current Cart:", cart); // Check cart contents
}

// Buyer proceeds to checkout
function checkout() {
    if (cart.length === 0) {
        showToast('Your cart is empty.', 'warning');
        return;
    }

    const totalAmount = cart.reduce((total, item) => total + (parseFloat(item.price) * item.quantity), 0);

    if (walletBalance >= totalAmount) {
        walletBalance -= totalAmount;
        transactionHistory.push({ type: 'Checkout', amount: totalAmount, date: new Date().toLocaleString() });
        updateWalletDisplay();
        updateTransactionHistory();
        showToast('Checkout successful! Thank you for your order.', 'success');
        cart = [];  // Clear the cart
        viewCart(); // Update cart display
    } else {
        showToast('Insufficient amount. Please top-up.', 'error');
    }
}

// Buyer's cart
function viewCart() {
    console.log("Cart contents before displaying:", JSON.stringify(cart, null, 2)); // Logs in readable format

    const cartDisplay = document.getElementById('buyerCart');
    if (!cartDisplay) {
        console.error('Cart display element not found!');
        return;
    }

    if (cart.length === 0) {
        cartDisplay.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cartDisplay.innerHTML = cart.map(item => `
            <div>
                <strong>${item.name}</strong> - $${(item.price * item.quantity).toFixed(2)} 
                (${item.quantity} x $${item.price})
                <p>${item.description}</p>
            </div>
        `).join('');
    }
}

// Admin creates a new product interactively
function createProduct() {
    const name = prompt('Enter product name:');
    const price = prompt('Enter product price:');
    const description = prompt('Enter product description:');
    if (name && price && description) {
        const product = { id: productIdCounter++, name, price, description };
        products.push(product);
        updateProductLists();
        showToast('Admin created a new product.', 'success');
    } else {
        showToast('Please provide all details.', 'error');
    }
}

// Admin modifies or deletes a product
function updateProductLists() {
    console.log("Updating product lists..."); // Debugging statement
    console.log("Current products:", products); // Debugging statement

    const adminList = document.getElementById('adminProducts');
    const sellerList = document.getElementById('sellerProducts');
    const buyerList = document.getElementById('buyerProducts');

    if (adminList) {
        adminList.innerHTML = products.map(product => `
            <div>
                <strong>${product.name}</strong> - $${product.price}
                <p>${product.description}</p>
                <button onclick="editProduct(${product.id})">Edit</button>
                <button onclick="deleteProduct(${product.id})">Delete</button>
            </div>
        `).join('');
    }

    const productItems = products.map(product => `
        <div>
            <strong>${product.name}</strong> - $${product.price}
            <p>${product.description}</p>
            <label for="quantity-${product.id}">Quantity:</label>
            <input type="number" id="quantity-${product.id}" min="1" value="1">
            <button onclick="addToCart(${product.id}, this)">Add to Cart</button>
        </div>
    `).join('');

    if (sellerList) {
        sellerList.innerHTML = productItems;
    }

    if (buyerList) {
        console.log("Updating buyer products..."); // Debugging statement
        buyerList.innerHTML = productItems;
    }
}

// Initialize the first section to be visible
document.addEventListener('DOMContentLoaded', () => {
    const adminSection = document.getElementById('adminSection');
    if (adminSection) {
        showSection('adminSection');
    }
    console.log(products);
});