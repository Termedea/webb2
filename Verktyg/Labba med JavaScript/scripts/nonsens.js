
var test = "";
if(test == 0) {
    console.log("true");
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

var arr = Array(7);
arr[10] = 2;
arr[98] = 5;
console.log("array: " +arr[10]);
arr.forEach(element => {
        console.log(element);
});

var bugg =  [1, 2, 3, 4, 5];
console.log("bugg-array: " +bugg[3]);