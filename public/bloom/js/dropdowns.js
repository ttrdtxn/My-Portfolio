document.addEventListener("DOMContentLoaded", () => {
    const productTypeSelect = document.getElementById("productType");
    const productNameSelect = document.getElementById("productName");
  
    // Define product names for each product type
    const productOptions = {
      "Grains and Cereals": ["Wheat", "Rice", "Barley", "Oats", "Corn"],
      "Animal Feeds": ["Hay Bales", "Silages", "Chaff", "Fodder Beats"],
      "Fertilizers": ["Manure", "Slurry", "Granules", "Urea"],
      "Crops": ["Cotton", "Sugarcane", "Soybeans", "Canola"]
    };
  
    // Update product name options when type changes
    function updateProductNames() {
      const selectedType = productTypeSelect.value;
      productNameSelect.innerHTML = ""; // Clear existing options
  
      if (productOptions[selectedType]) {
        productOptions[selectedType].forEach(name => {
          const option = document.createElement("option");
          option.value = name;
          option.textContent = name;
          productNameSelect.appendChild(option);
        });
      } else {
        const option = document.createElement("option");
        option.value = "";
        option.textContent = "Select Product Type First";
        productNameSelect.appendChild(option);
      }
    }
  
    // Listen for changes in the product type
    productTypeSelect.addEventListener("change", updateProductNames);
  
    // Initialize the product name dropdown (if a type is pre‑selected)
    updateProductNames();
  });
  