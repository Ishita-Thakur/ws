const usernameEl = document.querySelector('#username');
const passwordEl = document.querySelector('#password');
const form = document.querySelector('#signup');


const showError = (input, message) => {
    const formField = input.parentElement;
    formField.classList.remove('success');
    formField.classList.add('error');

    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    const formField = input.parentElement;

    formField.classList.remove('error');
    formField.classList.add('success');

    const error = formField.querySelector('small');
    error.textContent = '';
}

const checkUsername = () => {
    let valid = false;
    const min = 3,
        max = 25;
        const username = usernameEl.value.trim();

    if (username=='Ishita') {
        showSuccess(usernameEl);
        valid = true;
    } 
    else {
        showError(usernameEl, 'Wrong UserName');
    }
    return valid;
};



const checkPassword = () => {
    let valid = false;
    const password = passwordEl.value.trim();
    if (password=='admin') {
        showSuccess(passwordEl);
        valid = true;
        console.log('HI')
    } 
    else {
         showError(passwordEl, 'Wrong Password');
    }

    return valid;
};



form.addEventListener('submit', function (e) {
   
    e.preventDefault();
    let isUsernameValid = checkUsername(),
        isPasswordValid = checkPassword();

    let isFormValid = isUsernameValid &&
        isPasswordValid; 
 
    if (isFormValid) {  
        window.location.href = 'view.html';
        
    }
});

function myFunction() {
    if (form.checkValidity()) {
        alert("Registered Succesfully!");
      }
    }