var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var repeatPasswordInput = document.getElementById("repeat-password");
var formValid = false; 


emailInput.addEventListener("blur", validateEmail);
passwordInput.addEventListener("blur", validatePasswordStrenght);
repeatPasswordInput.addEventListener("blur", validateRepeatedPassword);

function validateEmail() {
    var emailText = emailInput.value;
    var exp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
     if (!emailText) {
        console.log("inte ifyllt");
        formValid = false; 
        
    } else if(!exp.test(emailText)) {
        console.log("fel format");
        formValid = false; 
    }else if(emailText && exp.test(emailText)){
        formValid = true;
        console.log("ok");

    }
    
    
}
function validatePasswordStrenght() {
    console.log("pwd");
}
function validateRepeatedPassword() {
    console.log("repeat");
}



