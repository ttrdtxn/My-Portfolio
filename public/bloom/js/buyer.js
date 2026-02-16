fetch("php/get_product.php")
  .then(response => response.json())
  .then(products => {
      console.log("Received Products:", products); // Debugging output

      let buyerProducts = document.getElementById("buyerProducts");
      buyerProducts.innerHTML = ""; // Clear existing products

      if (products.length === 0) {
          buyerProducts.innerHTML = "No Available Products";
          return;
      }

      products.forEach(product => {
          let productCard = document.createElement("div");
          productCard.classList.add("product-item");

          // Ensure all fields exist before displaying
          let productName = product.product_name || "Unknown Product";
          let productType = product.product_type || "Unknown Type";
          let sellerName = product.seller_name || "Unknown Seller";
          let price = product.price ? `$${parseFloat(product.price).toFixed(2)}` : "N/A";
          let description = product.description || "No description available.";
          let stock = product.stock !== undefined ? product.stock : "N/A";
          let imageUrl = product.image_url && product.image_url !== "img/products/undefined.jpg"
              ? product.image_url
              : "img/products/default.jpg"; // Default image fallback

          productCard.innerHTML = `
              <img src="${imageUrl}" alt="${productName}">
              <h3 class="product-name">${productName}</h3>
              <div class="product-user">Posted by: <p>${sellerName}</p></div>
              <div class="product-type">Type: <p>${productType}</p></div>
              <div class="product-stock">Stock Available: <p>${stock}</p></div>
              <div class="product-description">${description}</div>
              <div class="product-options">
                  <div class="product-price"><p>Price: ${price}</p></div>
                  <div class="product-btn">
                      <button>Add to Cart</button>
                  </div>
              </div>
          `;

          buyerProducts.appendChild(productCard);
      });
  })
  .catch(error => console.error("Fetch error:", error));
  