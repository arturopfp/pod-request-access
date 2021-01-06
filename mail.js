const boton = document.getElementById('boton');
const inputContainer = document.getElementById('input-container');
let validationSentence = document.createElement('p');


function emailIsValid ( ) {

    const userEmail = document.getElementById('input').value;
    const RE = /\S+@\S+\.\S+/;

    if( RE.test(userEmail) ) {
        console.log('Email correct');
    } else {
        validationSentence.innerHTML = 'Oops! Please check your email';
        validationSentence.classList.add('no-email');

        console.log(validationSentence)
        
        inputContainer.append(validationSentence);
    }

    
}


boton.addEventListener('click', emailIsValid);
