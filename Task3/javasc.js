

function validateForm() {
    var nameInputField = document.getElementById("name");
    var mobileInputField = document.getElementById("mobnum");
    var emailInputField = document.getElementById("email");
    var phoneInputField = document.getElementById("phone");
    var birthDateInputField = document.getElementById("birth-date");
    var nameErrorMessage = document.getElementById("error-message");
    var mobileErrorMessage = document.getElementById("mobile-error-message");
    var emailErrorMessage = document.getElementById("email-error-message");
    var phoneErrorMessage = document.getElementById("phone-error-message");
    var birthDateErrorMessage = document.getElementById("birth-date-error-message");
    
    nameErrorMessage.textContent = "";
    mobileErrorMessage.textContent = "";
    emailErrorMessage.textContent = "";
    phoneErrorMessage.textContent = "";
    birthDateErrorMessage.textContent = "";

    var hasError = false; 

    if (nameInputField.value.length < 3) {
        nameErrorMessage.textContent = "Please enter at least 3 characters for the driver name.";
        nameInputField.focus();
        hasError = true;
    }


    if (mobileInputField.value.length !== 9 || isNaN(mobileInputField.value)) {
        mobileErrorMessage.textContent = "Mobile number must be 9 digits.";
        mobileInputField.focus();
        hasError = true;
    }


    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInputField.value)) {
        emailErrorMessage.textContent = "Please enter a valid email address.";
        emailInputField.focus();
        hasError = true;
    }

    var phonePrefixes = ["09", "02", "04"];
    var phonePrefix = phoneInputField.value.substring(0, 2);
    if (phoneInputField.value.length !== 9 || isNaN(phoneInputField.value) || !phonePrefixes.includes(phonePrefix)) {
        phoneErrorMessage.textContent = "Phone number must be 9 digits and start with 09, 02, or 04.";
        phoneInputField.focus();
        hasError = true;
    }

    
    if (hasError) {
        return;
    }

  
}
