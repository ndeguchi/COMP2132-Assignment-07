// // Natsu Deguchi

const popup             = document.getElementById('popup');
const closePopup        = document.getElementById('closePopup');

const startBtn          = document.getElementById('startBtn');
const stopBtn           = document.getElementById('stopBtn');

const mainPictureInHTML = document.getElementById('main-pics');

const delayForPopup = 3000;
const delayForImg   = 100;
const endingValue   = 34;

let animationUnderway = false;
let nextImg = true;

let currentImageNumber = 1;

let bikeAnimation;
let ImageTimeOut;
let popupTimeout;


startBtn.addEventListener('click', function(){

   if( !animationUnderway ){

        animationUnderway = true;
        
        bikeAnimation = requestAnimationFrame(move);
   }

   clearTimeout(popupTimeout);
});


stopBtn.addEventListener('click', function(){

    animationUnderway = false;

    clearTimeout(ImageTimeOut);
    cancelAnimationFrame(bikeAnimation);
   
});

function move(){

    ImageTimeOut = setTimeout(function(){
        
        currentImageNumber++;
            
            if(currentImageNumber === endingValue){
                currentImageNumber = 1;
            }

        mainPictureInHTML.src = `images/bike-${currentImageNumber}.jpg`;

        bikeAnimation = requestAnimationFrame(move);

    }, delayForImg)

}



popup.style.display = 'none';

popupTimeout = setTimeout(function(){

    $("aside").css({opacity:'0'});
    $("aside").stop().animate({opacity:'1'},1000);
    popup.style.display = 'block';

}, delayForPopup);

closePopup.addEventListener('click', function(){

    $("aside").css({opacity:'1'});
    $("aside").stop().animate({opacity:'0'},1000);
    
    //popup.style.display = 'none';
});
