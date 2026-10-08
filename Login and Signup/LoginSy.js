const form = document.getElementById('form')
const firstname_input = document.getElementById('firstname-input')
const email_input = document.getElementById('email-input')
const password_input = document.getElementById('password-input')
const repeat_password_input = document.getElementById('repeat-password-input')
const error_message = document.getElementById('error-message')

form.addEventListener('submit', (e) => {
    const errors = getSignupFormErrors(
        firstname_input.value,
        email_input.value,
        password_input.value,
        repeat_password_input.value
    )

    if (errors.length > 0) {
        e.preventDefault()
        error_message.innerText = errors.join('. ')
    } else {
        error_message.innerText = ''
    }
})

function getSignupFormErrors(firstname, email, password, repeatPassword){
    let errors = []

    if(firstname === '' || firstname == null){
        errors.push('Firstname is required')
        firstname_input.parentElement.classList.add('incorrect')
    }
    
 

    if(email === '' || email== null){
        errors.push('email is required')
        email_input.parentElement.classList.add('incorrect')
    }

 


    if(password === '' || password== null){
        errors.push('Password is required')
        password_input.parentElement.classList.add('incorrect')
    }

    if(repeatPassword === '' || repeatPassword == null){
        errors.push('Repeat-Password is required')
        repeat_password_input.parentElement.classList.add('incorrect')
    } else if (password !== repeatPassword) {
        errors.push('Passwords do not match')
        password_input.parentElement.classList.add('incorrect')
        repeat_password_input.parentElement.classList.add('incorrect')
    }

    return errors;
}