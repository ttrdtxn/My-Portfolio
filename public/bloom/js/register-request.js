$(document).ready(function() {
    $('#registerForm').submit(function(e) {
        e.preventDefault();

        // Get the selected role
        let role = $('#roleSelect').val();

        // Frontend validation for required fields
        let isValid = true;
        let errorMessage = "";

        // Common fields (username and password)
        let username = $('#registerForm input[name="username"]').val();
        let password = $('#registerForm input[name="password"]').val(); // Capture password field correctly

        console.log('Username:', username); // Debugging
        console.log('Password:', password); // Debugging

        if (!username || !password) {
            errorMessage = "Please fill in all required fields.";
            isValid = false;
        }

        // Validate buyer or seller-specific fields based on the selected role
        if (role === 'buyer') {
            let fullName = $('#buyerFields input[name="full_name"]').val();
            let email = $('#buyerFields input[name="email"]').val();
            let phone = $('#buyerFields input[name="phone"]').val();
            let address = $('#buyerFields input[name="address"]').val();

            console.log('Buyer Full Name:', fullName); // Debugging
            console.log('Buyer Email:', email); // Debugging
            console.log('Buyer Phone:', phone); // Debugging
            console.log('Buyer Address:', address); // Debugging

            if (!fullName || !email || !phone || !address) {
                errorMessage = "Please fill in all required buyer fields.";
                isValid = false;
            }
        } else if (role === 'seller') {
            let shopName = $('#sellerFields input[name="shop_name"]').val();
            let email = $('#sellerFields input[name="email"]').val();
            let phone = $('#sellerFields input[name="phone"]').val();
            let businessAddress = $('#sellerFields input[name="business_address"]').val();

            console.log('Seller Shop Name:', shopName); // Debugging
            console.log('Seller Email:', email); // Debugging
            console.log('Seller Phone:', phone); // Debugging
            console.log('Seller Business Address:', businessAddress); // Debugging

            if (!shopName || !email || !phone || !businessAddress) {
                errorMessage = "Please fill in all required seller fields.";
                isValid = false;
            }
        }

        // Show error if validation fails
        if (!isValid) {
            alert(errorMessage);
            return; // Stop the form submission if validation fails
        }

        // If validation passes, submit the form via AJAX
        $.ajax({
            url: '/E-commerce/php/register.php',
            type: 'POST',
            data: $(this).serialize(),
            dataType: 'json',
            success: function(response) {
                alert(response.message);
                if (response.status === 'success') {
                    window.location.href = 'index.html';
                }
            },
            error: function(xhr, status, error) {
                console.error("AJAX Error:", status, error);
                alert("Something went wrong. Please try again.");
            }
        });
    });

    // Toggle visibility of buyer/seller fields based on selected role
    $('#roleSelect').change(function() {
        if ($(this).val() === 'buyer') {
            $('#buyerFields').show();
            $('#sellerFields').hide();
        } else if ($(this).val() === 'seller') {
            $('#sellerFields').show();
            $('#buyerFields').hide();
        } else {
            $('#buyerFields').hide();
            $('#sellerFields').hide();
        }
    });
});
