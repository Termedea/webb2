//1. Hitta ett element
var button1 = document.getElementById("button-1");
console.log(button1);

//1. Hitta ett element
var div = document.getElementById("div-b1-b2");
console.log(div);


//2. Lägg till en eventlyssnare
div.addEventListener("click", handleClick);
document.addEventListener("click", handleDocumentEvent);
window.addEventListener("resize", handleScroll);


//3. Skriv funktionen som ska köras när eventet inträffar.
function handleClick(clickEvent) {
	console.log(clickEvent);

}

function handleDocumentEvent (event){
	console.log(event);
}

function handleScroll (event){
	console.log(event);
}