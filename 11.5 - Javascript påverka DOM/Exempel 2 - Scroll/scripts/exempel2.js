
window.addEventListener('scroll', updatePosition);
var eventCounter = 0;
var divs = [document.getElementById("div-1"), document.getElementById("div-2"), document.getElementById("div-3")];
var square = document.getElementById("square");

function updatePosition(event) {
    var scrollPos = window.scrollY;    
    
    if(scrollPos < 200) {
        divs[0].classList.add("ok");
        divs[1].classList.remove("ok");
        divs[2].classList.remove("ok");

    }else if(scrollPos > 200 && scrollPos < 500){
        divs[0].classList.remove("ok");
        divs[1].classList.add("ok");
        divs[2].classList.remove("ok");
        
        
    }else if (scrollPos > 500) {
        divs[0].classList.remove("ok");
        divs[1].classList.remove("ok");
        divs[2].classList.add("ok");
    }
    
}