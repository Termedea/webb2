var menu = document.getElementById("menu");
var showMenuIcon = document.getElementById("showMenuIcon");
var hideMenuIcon = document.getElementById("hideMenuIcon");
var mobileClass = "mobile";

showMenuIcon.addEventListener("click", handleIconClick); 
hideMenuIcon.addEventListener("click", handleIconClick); 


function handleIconClick (e) {    
        
        if(e.target === showMenuIcon) {                    
            menu.classList.add(mobileClass);
            menu.style.display ="block";             
            showMenuIcon.style.visibility = "hidden";
        }
    
        if(e.target === hideMenuIcon) {        
            menu.classList.remove(mobileClass); 
            menu.style.display ="none"; 
            showMenuIcon.style.visibility = "visible";            
        }    
}


window.addEventListener("scroll", handleWindowScroll);

var scrolledClass = "scrolled"; 

function handleWindowScroll() {
    if(window.scrollY > 300) {
        menu.classList.add(scrolledClass);
    }
    else {
        menu.classList.remove(scrolledClass); 
    }
}



/* Extra - lyssna efter förändring av skärmstorlek. */
var mediumScreenMQ = window.matchMedia('(min-width: 640px)');

mediumScreenMQ.addEventListener("change", handleScreenChange); 

function handleScreenChange() {
    //om skärmen matchar media queryn mediumScreenMQ, visa den vanliga menyn och dölj menyknappen. 
    if(mediumScreenMQ.matches) {
        menu.style.display ="block";
        menu.classList.remove("mobile");
        showMenuIcon.style.visibility = "hidden";
    }
    //annars dölj menyn helt och visa menyknappen, så utgångspunkten blir som om du inte ännu klickat på menyikonen. 
    else {
        menu.style.display = "none";         
        showMenuIcon.style.visibility = "visible";
    }
}