
window.addEventListener('scroll',  _.throttle(updatePosition, 500) );
var colors = ["green", "red", "black", "orange"];
var eventCounter = 0

function updatePosition(event){
    /* console.log(eventCounter);
    document.body.style.backgroundColor = colors[eventCounter];
    eventCounter == 3 ? eventCounter = 0 :  eventCounter++;  */
    var colorIndex = 0;
    if(window.scrollY > 500){
        colorIndex = 1;
    } else {
        colorIndex = 3; 
    }
    console.log(window.scrollY);
    document.body.style.backgroundColor = colors[colorIndex];
}