var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var repeatPasswordInput = document.getElementById("repeat-password");
var submitButton = document.getElementById("")
var formValid = false; 


emailInput.addEventListener("blur", validateEmail);
passwordInput.addEventListener("blur", validatePasswordStrenght);
repeatPasswordInput.addEventListener("blur", validateRepeatedPassword);

function validateEmail() {
    var emailText = emailInput.value;
    var exp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
     if (!emailText) {
        setError("Du måste fylla i en e-postadress", emailInput);        
        
    } else if(!exp.test(emailText)) {
        setError("E-postadressen är i fel format. Exempel på rätt format: namn@domän.se", emailInput);        

    } else if(emailText && exp.test(emailText)){
        formValid = true;
        
    }        
}


function validatePasswordStrenght() {
    var passwordText = passwordInput.value;
    if(!passwordText) {
        setError("Du måste fylla i ett lösenord.", emailInput);          

    } else if (passwordText.length < 8) {
        setError("Lösenordet måste var minst 8 tecken långt. ", emailInput);  

    } else if(passwordText >= 8) {
        formValid = true; 

    }    
}

function validateRepeatedPassword() {
    var passwordText = passwordInput.value;
    var passwordRepeatText = repeatPasswordInput.value;
    if(passwordText != passwordRepeatText) {
        setError("Lösenorden är inte likadana.", repeatPasswordInput);
    }
    else {
        formValid = true; 
    }
}






function setError(msg, field) {
    formValid = false; 
    console.log(msg); 

}