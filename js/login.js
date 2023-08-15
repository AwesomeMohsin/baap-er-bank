// step 1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function () {
    // step 2: get the email address inside the input field
    // Always remember to use '.value' to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    // step 3: get password
    // 3.a set id on the html element
    // 3.b get the element
    // 3.c get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    
    // ______________________________________
    // DANGER: DO NOT VERIFY EMAIL PASSWORD ON THE CLIENT SIDE
    // ______________________________________

    // step 4: verify email and password
    if(email === 'sontan@baap.com' && password === 'secret'){
        console.log('valid user');
    }
    else{
        console.log('invalid user');
    }

});