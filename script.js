function validateForm() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const genderInput = document.getElementById('gender');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');
    const successMessage = document.getElementById('success-message');

    let isValid = true;

    if (nameInput.value === '') {
      nameInput.style.borderColor = 'red';
      isValid = false;
    } else {
      nameInput.style.borderColor = '';
    }

    if (emailInput.value === '' || !validateEmail(emailInput.value)) {
      emailInput.style.borderColor = 'red';
      isValid = false;
    } else {
      emailInput.style.borderColor = '';
    }

    if (phoneInput.value === '' || !validatePhone(phoneInput.value)) {
      phoneInput.style.borderColor = 'red';
      isValid = false;
    } else {
      phoneInput.style.borderColor = '';
    }

    if (genderInput.value === '') {
      genderInput.style.borderColor = 'red';
      isValid = false;
    } else {
      genderInput.style.borderColor = '';
    }

    if (passwordInput.value === '') {
      passwordInput.style.borderColor = 'red';
      isValid = false;
    } else {
      passwordInput.style.borderColor = '';
    }

    if (isValid) {
      successMessage.style.display = 'block';
      errorMessage.style.display = 'none';
      alert("Successfully submitted")
    
    } else {
      errorMessage.style.display = 'block';
      successMessage.style.display = 'none';
    }
  }

  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  function validatePhone(phone) {
    const re = /^[0-9]+$/;
    return re.test(phone);
  }





