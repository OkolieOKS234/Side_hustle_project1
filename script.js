function validateForm() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const genderInput = document.getElementById('gender');
    const passwordInput = document.getElementById('password');
    // const errorMessage = document.getElementById('error-message');
    // const successMessage = document.getElementById('success-message');

    // let isValid = true;

    if (nameInput.value === '' || emailInput.value === ''  || phoneInput.value === '' || genderInput.value === '' || passwordInput.value === '') {
alert("Please enter your details");
    }
else{
  alert("successfully submitted");
}
    //   nameInput.style.borderColor = 'red';
    //   isValid = false;
    //   alert("Please enter your Name")
    // } else {
    //   nameInput.style.borderColor = '';
    // }

    // if (emailInput.value === '' || !validateEmail(emailInput.value)) {
    //   emailInput.style.borderColor = 'red';
    //  alert("enter the correct email format")
    // } 
    // else{
    //   alert("Submitted successfully")
    // }
// 
    // if ( phoneInput.value === '' || !validatePhone(phoneInput.value)) {
    //   phoneInput.style.borderColor = 'red';
    //   alert("Enter the correct phone number value")
    // } 

    // if (genderInput.value === '') {
    //   genderInput.style.borderColor = 'red';
    //   isValid = false;
    // } else {
    //   genderInput.style.borderColor = '';
    // }

    // if (passwordInput.value === '') {
    //   passwordInput.style.borderColor = 'red';
    //   isValid = false;
    // } else {
    //   passwordInput.style.borderColor = '';
    // }

    
  }

  // function validateEmail(email) {
  //   const re = /\S+@\S+\.\S+/;
  //   return re.test(email);
  // }

  // function validatePhone(phone) {
  //   const re = /^[0-9]+$/;
  //   return re.test(phone);
  // }





