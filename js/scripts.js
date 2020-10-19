/* STICKY HEADER SECTION */

var h = document.getElementById("header-section");

var readout = document.getElementById("body");
var stuck = false;

function getDistance() {
    
    var topDist = h.offsetTop;
    window.alert("reading JS file");
    return topDist;
}
var stickPoint = getDistance();






window.onscroll = function(e) {
    var distance = getDistance() - window.pageYOffset;
    var offset = window.pageYOffset;
    readout.innerHTML = stickPoint + '   ' + distance + '   ' + offset + '   ' + stuck;
    if((distance <= 0) && !stuck) {
        h.style.position = 'fixed';
        h.style.top = '0px';
        stuck = true;
    }
    else if(stuck && (ofset <= stickPoint)) {
        h.style.position = 'static';
        stuck = false;
    }
}

/*
Scroll Jump Section
*/
function scrollto(div){
    $('html,body').animate(
        {
            scrollTop: $("#"+div).offset().top
        },'slow');
}

/*
Services Page Split Screen Logic Draft
*/
var leftButtonGo = false;
var rightButtonGo = false;
var leftButtonBack = true;
var rightButtonBack = true;
var neutralSet = true;


if(leftButtonGo == false && leftButtonBack == true && rightButtonGo == false && rightButtonBack == true){
    neutralSet = true;//This is the neutral set
}

else{
    neutralSet = false;
}


function openRight(){ //opens the right panel
    if(leftButtonGo == false || leftButtonBack == true){ //if left panel is closed
        rightButtonGo = true; //open the right panel
        rightButtonBack = false; //turn off right panel collapse
    }

    else if(leftButtonGo == true || leftButtonBack == false){ //if left panel is open
        leftButtonGo = false; //close left panel
        leftButtonBack = true; //turn on left panel collapse
        rightButtonGo = true; //open right panel
        rightButtonBack = false; //turn off right panel collapse
    }
    neutralSet = false;
}


function closeRight(){ //closes right panel
    if(rightButtonGo == true && rightButtonBack == false){ //if right panel open
        rightButtonGo = false;
        rightButtonBack = true;
        neutralSet = true;
    }
}


function openLeft(){ //opens the left panel
    if(rightButtonGo == false || rightButtonBack == true){ //right panel is closed
        leftButtonGo = true; //open the left panel
        leftButtonBack = false; //turn off left panel collapse
    }

    else if(rightButtonGo == true || rightButtonBack == false){ //if right panel is open
        rightButtonGo = false; //close right panel
        rightButtonBack = true; //turn on right panel collapse
        leftButtonGo = true; //open left panel
        leftButtonBack = false; //turn off left panel collapse
    }

}


function closeLeft(){ //closes left panel
    if(leftButtonGo == true && leftButtonBack == false){ //if left panel open
        leftButtonGo = false;
        leftButtonBack = true;
        neutralSet = true;
    }
}
//end of Services Split Screen Logic
