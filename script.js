
function validateForm(event) {
  event.preventDefault(); 

  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const phoneNumber = document.getElementById('number').value.trim();

  if (firstName === '' || lastName === '' || phoneNumber === '') {
    alert('Please fill in all fields.');
    return false;
  }

  const phonePattern = /^[0-9]{10}$/;
  if (!phonePattern.test(phoneNumber)) {
    alert('Please enter a valid 10-digit phone number.');
    return false;
  }

  alert('Registration successful!');
  document.getElementById('registrationForm').submit(); 
}


document.getElementById('registrationForm').addEventListener('submit', validateForm);
