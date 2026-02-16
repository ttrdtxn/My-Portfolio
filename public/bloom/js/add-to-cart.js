document.addEventListener("DOMContentLoaded", () => {
    const buyerProducts = document.getElementById("buyerProducts");
    const cartBtn = document.querySelector(".cart-btn");
    const cartModal = document.createElement("div");
    cartModal.id = "cartModal";
    cartModal.classList.add("modal");
    document.body.appendChild(cartModal);
    
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    function updateCartUI() {
        cartModal.innerHTML = `
            <div class="modal-content">
                <span class="close-btn">&times;</span>
                <h2>Your Cart</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Cost</th>
                            <th>Stock</th>
                            <th>Quantity</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${cart.map((item, index) => `
                            <tr>
                                <td>${item.product_name}</td>
                                <td>${item.product_type}</td>
                                <td>$${item.price}</td>
                                <td>${item.stock}</td>
                                <td>
                                    <input type="number" min="1" max="${item.stock}" value="${item.quantity}" data-index="${index}" class="quantity-input">
                                </td>
                                <td>
                                    <button class="remove-btn" data-index="${index}">Remove</button>
                                </td>
                            </tr>
                        `).join("")}
                    </tbody>
                </table>
                <button id="checkout-btn">Checkout</button>
            </div>
        `;
    }

    buyerProducts.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON" && e.target.textContent === "Add to Cart") {
            const productCard = e.target.closest(".product-item");
            const productName = productCard.querySelector(".product-name").textContent;
            const productType = productCard.querySelector(".product-type p").textContent;
            const price = parseFloat(productCard.querySelector(".product-price p").textContent.replace("Price: $", ""));
            const stock = parseInt(productCard.querySelector(".product-options").dataset.stock, 10);
            
            const existingItem = cart.find(item => item.product_name === productName);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ product_name: productName, product_type: productType, price, stock, quantity: 1 });
            }

            localStorage.setItem("cart", JSON.stringify(cart));
            alert("Added to Cart!");
        }
    });

    cartBtn.addEventListener("click", () => {
        updateCartUI();
        cartModal.style.display = "block";
    });
    
    cartModal.addEventListener("click", (e) => {
        if (e.target.classList.contains("close-btn")) {
            cartModal.style.display = "none";
        }
        if (e.target.classList.contains("remove-btn")) {
            const index = e.target.dataset.index;
            cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            updateCartUI();
        }
    });

    document.addEventListener("change", (e) => {
        if (e.target.classList.contains("quantity-input")) {
            const index = e.target.dataset.index;
            cart[index].quantity = parseInt(e.target.value, 10);
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    });
});
