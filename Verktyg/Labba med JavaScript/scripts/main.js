
var test = "";
if(test == 0) {
    console.log("true");
    console.log("jag trodde att detta skulle bli false...")
} else {
    console.log("false");
}

var testdiv = document.getElementById("en-div");
testdiv.innerHTML = "Jag är en apa";
var num1 = 7;
function addition(num1, num2)  {
    num1 = 7;
    return num1+num2;
}




testdiv.innerHTML = addition(2,5);
