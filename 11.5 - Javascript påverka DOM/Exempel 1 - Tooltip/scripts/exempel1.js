var infoIcon = document.getElementById("info-icon");
var tooltip = document.getElementById("tooltip");
var hidden = true; 

infoIcon.addEventListener("mouseover", toggleTooltip);
infoIcon.addEventListener("mouseout", toggleTooltip);

function toggleTooltip(event) {
    hidden = event.type=="mouseover";    
	hidden ? tooltip.classList.remove("hidden") : tooltip.classList.add("hidden");
}


document.getElementById("square").addEventListener("mouseover", (event) => {
    window.addEventListener("mousemove",positionChanged);
});

function positionChanged(event) {    
    square.style.left = event.clientX +"px"; 
    square.style.top = event.clientY +"px"; 
}

