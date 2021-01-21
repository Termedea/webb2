var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var repeatPasswordInput = document.getElementById("repeat-password");
var submitButton = document.getElementById("send");
var formElement = document.getElementById("registration-form"); 
var errorClass = "error";

var emailValid = false; 
var passwordValid = false; 
var repeatPasswordValid = false; 

emailInput.addEventListener("blur", validateEmail);
passwordInput.addEventListener("blur", validatePasswordStrenght);
repeatPasswordInput.addEventListener("blur", validateRepeatedPassword);
submitButton.addEventListener("click", sendForm); 

function validateEmail() {        

    var emailText = emailInput.value;
    var exp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

     if (!emailText) {
        setError("Du måste fylla i en e-postadress", emailInput);       
        emailValid = false;  
        
    } else if(!exp.test(emailText)) {
        setError("E-postadressen är i fel format. Exempel på rätt format: namn@domän.se", emailInput);   
        emailValid = false;       

    } else if(emailText && exp.test(emailText)) {
        emailValid = true;   
        setOk(emailInput);
    }        
}

function validatePasswordStrenght() {
    
    var passwordText = passwordInput.value;

    if(!passwordText) {
        setError("Du måste fylla i ett lösenord.", passwordInput);    
        passwordValid = false;       

    } else if (passwordText.length < 8) {
        setError("Lösenordet måste var minst 8 tecken långt. ", passwordInput);
        passwordValid = false;   

    } else if(passwordText >= 8) {
        passwordValid = true; 
        setOk(passwordInput);

    }    
}

function validateRepeatedPassword() {    

    var passwordText = passwordInput.value;    
    var passwordRepeatText = repeatPasswordInput.value;

    if(passwordText !== passwordRepeatText) {
        setError("Lösenorden är inte likadana.", repeatPasswordInput);
        repeatPasswordValid = false; 
        console.log("lösenord likadana?"); 
    }
    else if (passwordText && passwordText === passwordRepeatText)  {
        repeatPasswordValid = true; 
        setOk(repeatPasswordInput);
    }
}

function sendForm(e){
    e.preventDefault(); 
    
    if(emailValid && passwordValid && repeatPasswordValid) {
        formElement.submit();
        console.log("Formulär skickat"); 
    } else {
        console.log("fel i formuläret"); 
    }
}

function setError(msg, field) {    
    console.log(msg); 
    field.classList.add(errorClass); 
    var errorMessageElement = document.getElementById(field.id +"-error"); 
    errorMessageElement.innerHTML = msg;
    errorMessageElement.style.display = "block"; 
    submitButton.disabled = "true"; 
}


function setOk(field) {
    var errorMessageElement = document.getElementById(field.id +"-error"); 
    field.classList.remove(errorClass); 
    errorMessageElement.style.display = "none"; 
    console.log(emailValid, passwordValid, repeatPasswordValid); 
    if(emailValid && passwordValid && repeatPasswordValid) {
        submitButton.removeAttribute("disabled"); 
    }

}

