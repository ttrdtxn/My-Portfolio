document.addEventListener("DOMContentLoaded", function() {
    const loginModal = document.getElementById("loginModal");
    const registerModal = document.getElementById("registerModal");
    const loginBtn = document.querySelector(".logIn-btn");
    const signUpBtn = document.querySelector(".signUp-btn");
    const closeBtns = document.querySelectorAll(".close-btn");
    
    loginBtn.addEventListener("click", function() {
        loginModal.style.display = "flex";
    });
    
    signUpBtn.addEventListener("click", function() {
        registerModal.style.display = "flex";
    });
    
    closeBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            loginModal.style.display = "none";
            registerModal.style.display = "none";
        });
    });
    
    window.addEventListener("click", function(event) {
        if (event.target === loginModal) loginModal.style.display = "none";
        if (event.target === registerModal) registerModal.style.display = "none";
    });
});

