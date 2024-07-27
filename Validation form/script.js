// Main Functio Decleration
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Variables Declaration
    const fullNameElement = document.getElementById("fullname");
    const phoneElement = document.getElementById("phone");
    const passwordElement = document.getElementById("password");
    const confirmPasswordElement = document.getElementById("confirmPassword");

    const fullName = fullNameElement.value;
    const phone = phoneElement.value;
    const password = passwordElement.value;
    const confirmPassword = confirmPasswordElement.value;

    //Condition Starts Here!
    if (!fullName || !phone || !password || !confirmPassword) {
      alert("Don't Leave Any Fields Empty");
      return;
    }

    // Validation flags
    let isValid = true;
    let errorMessage = "";

    // Name validation
    if (fullName.length < 5) {
      isValid = false;
      errorMessage = " Name must be at least 5 characters long.";
      alert(errorMessage);
      return;
    }

    // Phone validation
    const phonePattern = /^[0-9]{10}$/;
    if (phone === "123456789" || !phonePattern.test(phone)) {
      isValid = false;
      errorMessage = "Enter a valid 10-digit phone number.";
      alert(errorMessage);
      return;
    }

    // Password validation
    if (password.length < 8) {
      isValid = false;
      errorMessage = "Password must be at least 8 characters ";
      alert(errorMessage);
      return;
    }
    if (password.toLowerCase() === fullName.toLowerCase()) {
      isValid = false;
      errorMessage = "Password cannot be set same as your User name.";
      alert(errorMessage);
      return;
    }
    if (password.toLowerCase() === "password") {
      isValid = false;
      errorMessage = 'Password cannot be set "password" ';
      alert(errorMessage);
      return;
    }

    // Confirm password validation
    if (password !== confirmPassword) {
      isValid = false;
      errorMessage = "Passwords do not match.";
      alert(errorMessage);
      return;
    }

    //  validations pass
    if (isValid) {
      alert("Form submitted successfully!");
      window.location.href = "http://127.0.0.1:5500/login.html";
    }
  });
});
