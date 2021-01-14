var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var repeatPasswordInput = document.getElementById("repeat-password");
var submitButton = document.getElementById("send");
var formElement = document.getElementById("registration-form"); 
var errorMsgElement = document.getElementById("error-msg");
var emailValid = false; 
var passwordValid = false; 
var passwordRepeatVaild = false; 
emailInput.addEventListener("blur", validateEmail);
passwordInput.addEventListener("blur", validatePasswordStrenght);
repeatPasswordInput.addEventListener("blur", validateRepeatedPassword);
submitButton.addEventListener("click", submit); 

function validateEmail() {
    var emailText = emailInput.value;
    var exp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
     if (!emailText) {
        setError("Du måste fylla i en e-postadress", emailInput);       
        emailValid = false;  
        
    } else if(!exp.test(emailText)) {
        setError("E-postadressen är i fel format. Exempel på rätt format: namn@domän.se", emailInput);   
        emailValid = false;       

    } else if(emailText && exp.test(emailText)){
        emailValid = true;   
    }        
}

function validatePasswordStrenght() {
    var passwordText = passwordInput.value;
    if(!passwordText) {
        setError("Du måste fylla i ett lösenord.", emailInput);    
        passwordValid = false;       

    } else if (passwordText.length < 8) {
        setError("Lösenordet måste var minst 8 tecken långt. ", emailInput);
        passwordValid = false;   

    } else if(passwordText >= 8) {
        passwordValid = true; 

    }    
}

function validateRepeatedPassword() {
    var passwordText = passwordInput.value;
    var passwordRepeatText = repeatPasswordInput.value;
    if(passwordText != passwordRepeatText) {
        setError("Lösenorden är inte likadana.", repeatPasswordInput);
        passwordRepeatVaild = false; 
    }
    else {
        passwordRepeatVaild = true; 
    }
}

function submit(e){
    e.preventDefault(); 
    
    if(emailValid && passwordValid && passwordRepeatVaild) {
        formElement.submit();
    } else {
        console.log("fel i formuläret"); 
    }
}

function setError(msg, field) {    
    console.log(msg); 

}


/* 
function validateEmail(e){
    console.log(e.target);
}

function validatePasswordStrenght(e){
    console.log(e.target);
}

function validateRepeatedPassword(e){
    console.log(e.target);
}

*/