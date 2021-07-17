var classSelect = document.getElementById("class");
var styleSelect = document.getElementById("style-property");
var styleInput = document.getElementById("style-value");
var changable = document.getElementById("changable");

//lyssnare
classSelect.addEventListener("change", handleClassChange); 
styleInput.addEventListener("keyup", handlePropertyChange);
//använder inte knappen någon annan stans än att sätta lyssnare på, behöver inte spara ner i variabel då. 
document.getElementById("reset").addEventListener("click", resetChangable);

function handleClassChange(event) {
	//börja med att återställa diven som förändras
	resetChangable();

	//lägg till vald klass genom classlist.add
	changable.classList.add(event.target.value);
}

 function handlePropertyChange(event) {
	 
	 //om det var enter som trycktes (keycode 13 är helt enkelt enter)
	 
	 if(event.keyCode === 13) {
		 //hämta värde från select-box och input-fält.
		var prop = styleSelect.value; 
		var value = styleInput.value;
		//setProperty tar egenskapen som första argument och värdet som det andra (istället för style.property ="värde", som sätter egenskapen direkt. 
		//Vi behöver detta för att egenskapen vi vill förändra är en sträng. 
		changable.style.setProperty(prop, value);
	 }
 }

function resetChangable() {
	
	//återställer klasserna
	changable.className = ""; 
	
	//loopar igenom selectboxens options för att hämta de egenskaper som ska återställas. 
	//börjar loopen på 1 eftersom den första egenskapen är en placeholder. 
	for(var  i = 1; i <= styleSelect.options.length-1; i++) {		
		changable.style.removeProperty(styleSelect.options[i].value);
	}
}