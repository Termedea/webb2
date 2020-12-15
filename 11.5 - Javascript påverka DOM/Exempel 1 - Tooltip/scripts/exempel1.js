var infoIcon = document.getElementById("info-icon");
var tooltip = document.getElementById("tooltip");
var hidden = true; 

infoIcon.addEventListener("mouseover", toggleTooltip);
infoIcon.addEventListener("mouseout", toggleTooltip);

function toggleTooltip(event) {
	hidden = event.type=="mouseover";
	hidden ? tooltip.classList.remove("hidden") : tooltip.classList.add("hidden");
}