// admin-manageProduct.js

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('addProductModal');
    const btn = document.getElementById('addProductBtn');
    const span = document.getElementsByClassName('close')[0];

    btn.onclick = function() {
        modal.style.display = 'block';
    }

    span.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    const form = document.getElementById('addProductForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        handleAddProduct();
        modal.style.display = 'none';
    });

    function handleAddProduct() {
        const productName = document.getElementById('productName').value;
        const productImage = document.getElementById('productImage').files[0];
        const productQuantity = document.getElementById('productQuantity').value;
        const productPrice = document.getElementById('productPrice').value;
        const productDescription = document.getElementById('productDescription').value;

        if (!productImage) {
            alert('Please select an image for the product.');
            return;
        }

        const reader = new FileReader();
        reader.onload = function(event) {
            const product = {
                name: productName,
                image: event.target.result,
                quantity: productQuantity,
                price: productPrice,
                description: productDescription
            };

            let products = JSON.parse(localStorage.getItem('products')) || [];
            products.push(product);
            localStorage.setItem('products', JSON.stringify(products));

            alert('Product added successfully!');
            form.reset();
        };
        
        reader.readAsDataURL(productImage);
    }
});
