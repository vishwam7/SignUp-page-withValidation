const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const email = document.getElementById('email');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault();


    checkInputs();
});

function checkInputs() {
    //get the values from inputs
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === '') {
        //show error
        //add error class
        setErrorFor(username, 'username can\'t be blank');
    } else {
        //add success class
        setSuccessFor(username);
    }

    if (emailValue === '') {
        setErrorFor(email, 'email can\'t be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'email is not valid');
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === '') {
        setErrorFor(password, 'password can\'t be blank');
    } else if (!isPassword(passwordValue)) {
        setErrorFor(password, 'password is not valid (password must contain number,8 characters and symbols)');
    } else {
        setSuccessFor(password);
    }

    if (password2Value === '') {
        setErrorFor(password2, 'password can\'t be blank');
    } else if (passwordValue != password2Value) {
        setErrorFor(password2, 'password don\'t match!!');
    } else {
        setSuccessFor(password2);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; //.form-control
    const small = formControl.querySelector('small');

    //add error message inside small
    small.innerText = message;

    //add error class
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function isPassword(password) {
    var re = /^.*(?=.{8,})(?=.*\d)(?=.*[a-zA-Z])|(?=.{8,})(?=.*\d)(?=.*[!@#$%^&])|(?=.{8,})(?=.*[a-zA-Z])(?=.*[!@#$%^&]).*$/;
    return re.test(String(password));
}