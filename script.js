function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

   
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

 
    if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        return;
    }

   
    alert('Registration successful!');

}

function checkPasswordStrength() {
    var password = document.getElementById('password').value;
    var strengthIndicator = document.getElementById('password-strength');

  
    strengthIndicator.innerHTML = '';

    
    if (password.length === 0) {
        strengthIndicator.innerHTML = '';
    } else if (password.length < 8) {
        strengthIndicator.innerHTML = 'Weak';
        strengthIndicator.style.color = 'red';
    } else if (password.length < 12) {
        strengthIndicator.innerHTML = 'Moderate';
        strengthIndicator.style.color = 'orange';
    } else {
        strengthIndicator.innerHTML = 'Strong';
        strengthIndicator.style.color = 'green';
    }
}