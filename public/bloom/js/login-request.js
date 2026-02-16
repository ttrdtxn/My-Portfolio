$(document).ready(function() {
    $('#loginForm').submit(function(e) {
        e.preventDefault();

        $.ajax({
            url: '/E-commerce/php/login.php',
            type: 'POST',
            data: $(this).serialize(),
            dataType: 'json',
            success: function(response) {
                if (response.status === 'success') {
                    alert(response.message); // Should say "Login successful!"
                    window.location.href = response.redirect; // Redirects to buyer.html
                } else {
                    alert(response.message); // Shows error if login fails
                }
            },
            error: function(xhr, status, error) {
                console.error("AJAX Error: " + status, error);
                alert("Something went wrong. Please try again.");
            }
        });
    });
});
