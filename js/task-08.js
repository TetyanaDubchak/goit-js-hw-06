
const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;

    if (formElements.email.value === '' || formElements.password.value === '') {
        alert('All fields must be fill!') 
    };
    
    const email = formElements.email.value;
    const password = formElements.password.value;
    const formData = {
        email,
        password
    };
    console.dir(formData);
    
    if (event.currentTarget) {
        form.reset();
    }
}