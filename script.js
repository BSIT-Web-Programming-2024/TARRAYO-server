// Event listener for form submission
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector('form');
  const firstName = document.getElementById('firstName');
  const lastName = document.getElementById('lastName');
  const phoneNumber = document.getElementById('number');
  const submitButton = document.querySelector('.btn-primary');

  // Add event listener to the submit button
  form.addEventListener('submit', function (e) {
    let valid = true;

    // Reset previous error messages
    clearErrors();

    // Validate First Name
    if (!validateFirstName(firstName)) {
      valid = false;
      showError(firstName, "First name is required and should be at least 2 characters.");
    }

    // Validate Last Name
    if (!validateLastName(lastName)) {
      valid = false;
      showError(lastName, "Last name is required and should be at least 2 characters.");
    }

    // Validate Phone Number
    if (!validatePhoneNumber(phoneNumber)) {
      valid = false;
      showError(phoneNumber, "Please enter a valid phone number.");
    }

    // Prevent form submission if validation fails
    if (!valid) {
      e.preventDefault();
    }
  });

  // Validate First Name
  function validateFirstName(input) {
    const value = input.value.trim();
    return value.length >= 2;
  }

  // Validate Last Name
  function validateLastName(input) {
    const value = input.value.trim();
    return value.length >= 2;
  }

  // Validate Phone Number
  function validatePhoneNumber(input) {
    const value = input.value.trim();
    const phonePattern = /^[0-9]{10}$/; // Simple pattern for 10-digit phone number
    return phonePattern.test(value);
  }

  // Show error message
  function showError(input, message) {
    const errorElement = document.createElement('small');
    errorElement.classList.add('text-danger');
    errorElement.innerText = message;

    input.classList.add('is-invalid'); // Adding invalid class to input field
    input.insertAdjacentElement('afterend', errorElement);
  }

  // Clear error messages
  function clearErrors() {
    const errorMessages = document.querySelectorAll('.text-danger');
    const invalidInputs = document.querySelectorAll('.is-invalid');

    invalidInputs.forEach((input) => {
      input.classList.remove('is-invalid');
    });

    errorMessages.forEach((message) => {
      message.remove();
    });
  }
});
