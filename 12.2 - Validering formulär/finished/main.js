//variabel för form
var formElement = document.getElementById("form"); 
//variabel för input epost
var emailInput = document.getElementById("email"); 
//Variabel för input lösenord
var passwordInput = document.getElementById("password"); 
//variabel för input repetera lösenord
var repeatPasswordInput = document.getElementById("repeat-password");
//variabel för submit-knapp. 
var submitButton = document.getElementById("send"); 

//övriga variabler
var emailValid = false; 
var passwordValid = false; 
var repeatPasswordValid = false; 
var errorClass = "error";

//lyssnare
emailInput.addEventListener("blur", validateEmail);
passwordInput.addEventListener("blur", validatePassword);
repeatPasswordInput.addEventListener("blur", validateRepeatPassword);

submitButton.addEventListener("click", submitForm);

//valideringsfunktioner 
function validateEmail() {        
    var exp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;    
    var emailText = emailInput.value;        
    //finns det något i fältet?
    if(!emailText) {
        emailValid = false; 
        setError("Du måste fylla i en e-postadress.", emailInput);
    } else if (!exp.test(emailText)) {
        //är e-postadressen i rätt format?   
        emailValid = false; 
        setError("E-postadressen är i fel format. Exempel på rätt format: namn@doman.se", emailInput);
    } else if(emailText && exp.test(emailText)) {
        //allt ok.
        emailValid = true; 
        setCorrect(emailInput);
    }
}

function validatePassword() {
    var passwordText = passwordInput.value; 
    //fältet får inte vara tomt.
    if(!passwordText) {
        passwordValid = false; 
        setError ("Du måste ange ett lösenord.", passwordInput); 
    } else if(passwordText.length < 8) {
        //lösenordet får inte vara färre än 8 tecken.
        setError("Lösenordet måste vara minst 8 tecken långt.", passwordInput);         
    } else if(passwordText && passwordText.length >=8) {
        passwordValid = true; 
        setCorrect(passwordInput);
    }    
}

function validateRepeatPassword() {
    var repeatPasswordText = repeatPasswordInput.value; 
    var passwordText = passwordInput.value; 

    //fältet får inte vara tomt.
    if(!repeatPasswordText) {

        repeatPasswordValid = false; 
        setError("Du måste skriva lösenordet igen.", repeatPasswordInput); 

      } else if(repeatPasswordText !== passwordText) {

        //lösenorden måste vara likadana. 
        setError("Lösenorden måste vara likadana.", repeatPasswordInput); 
        repeatPasswordValid = false; 

    } else if(repeatPasswordText && repeatPasswordText === passwordText) {
        repeatPasswordValid = true; 
        setCorrect(repeatPasswordInput);
    }   
}

function submitForm(e) {
    //förhindra att formuläret skickas 
    e.preventDefault();
    if(emailValid && passwordValid && repeatPasswordValid) {
        //skicka bara formuläret om allt är ok. 
        console.log("submit"); 
        formElement.submit(); 
    }
}

function setError(msg, field) {        
    field.classList.add(errorClass);    
    var errorMessageElement = document.getElementById(field.id +"-error"); 
    errorMessageElement.innerHTML = msg; 
    errorMessageElement.style.display = "block"; 
}

function setCorrect(field) {
    field.classList.remove(errorClass); 

    var errorMessageElement = document.getElementById(field.id +"-error"); 
    errorMessageElement.style.display = "none";     

    if(emailValid && passwordValid && repeatPasswordValid) {
        submitButton.removeAttribute("disabled");
    }
}

