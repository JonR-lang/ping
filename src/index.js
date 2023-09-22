const form = document.getElementById('form');
const email = document.getElementById('email');



form.addEventListener('submit', (e) => {
    e.preventDefault();
    const errorMessage = email.parentElement.querySelector('p');
    console.log(errorMessage)
    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    if (email.value.trim() === '') {
        errorMessage.textContent = 'Whoops! It looks like you forgot to add your email';
        email.classList.add('border-red-600');
    } else if (!emailRegex.test(email.value)) {
        errorMessage.textContent = 'Please provide a valid email address';
        email.classList.add('border-red-600');
    } else {
        errorMessage.textContent = '';
        email.classList.remove('border-red-600');
    }

})