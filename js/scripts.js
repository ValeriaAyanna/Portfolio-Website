/*Screen size reference*/
window.alert("hi");
window.screen.height;
window.screen.width;



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
