document.addEventListener("DOMContentLoaded", () => {
  const addProductForm = document.getElementById("addProductForm");

  addProductForm.addEventListener("submit", function(e) {
    e.preventDefault();

    // Create FormData from the form element
    const formData = new FormData(addProductForm);

    // Send the AJAX request to add_product.php
    fetch('php/add_product.php', {
      method: 'POST',
      body: formData
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        if (data.status === "success") {
          alert(data.message);
          addProductForm.reset();
          // Optionally, reset dropdowns to default values
        } else {
          alert("Error: " + data.message);
        }
      })
      .catch(error => {
        console.error("There was a problem with the fetch operation:", error);
        alert("An error occurred while adding the product.");
      });
  });
});