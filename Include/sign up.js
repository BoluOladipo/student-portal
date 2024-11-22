document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
   
    let inputs = document.querySelectorAll('.form-inline input');
    inputs.forEach(input => input.classList.remove('error'));

    
    const fname = document.getElementById('fname').value;
    const surname = document.getElementById('surname').value;
    const othernames = document.getElementById('othernames').value;
    const matric = document.getElementById('matric').value;
    const password = document.getElementById('password').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const fileUpload = document.getElementById('fileUpload').value;

    let valid = true;

    
    if (!fname) {
        document.getElementById('fname').classList.add('error');
        valid = false;
    }
    if (!surname) {
        document.getElementById('surname').classList.add('error');
        valid = false;
    }
    if (!othernames) {
        document.getElementById('othernames').classList.add('error');
        valid = false;
    }
    if (!matric) {
        document.getElementById('matric').classList.add('error');
        valid = false;
    }
    if (!password) {
        document.getElementById('password').classList.add('error');
        valid = false;
    }
    if (!gender) {
        alert('Please select a gender.');
        valid = false;
    }
    if (!fileUpload) {
        document.getElementById('fileUpload').classList.add('error');
        valid = false;
    }

   
    if (valid) {
        alert("Sign Up successful!!   Now return to login page✔✔");
    } else {
        alert("Please fill all required fields.");
    }
});
