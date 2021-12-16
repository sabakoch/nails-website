// responsive navbar 
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

  // first background image on scroll is zooming back
const background = document.getElementById("header");
             
window.addEventListener('scroll', function(){
    background.style.backgroundSize = 140 - +window.pageYOffset/28 + '%';
    // if the screen is too small, then the picture will start to move away from a closer melting
    if(screen.width < 500){
        background.style.backgroundSize = 200 - +window.pageYOffset/26 + '%';
    }
    // image gets more opacity
    background.style.opacity =1 - +window.pageYOffset/1000 + '';
});


// slideshow aout desines
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}

//slideshow about shrilac

showSlidesOfShrilac();

function showSlidesOfShrilac() {
  var i;
  var shrilacSlide = document.getElementsByClassName("caruselSlide");
  var srilackDot = document.getElementsByClassName("dotMrker");

  for(i = 0; i < shrilacSlide.length; i++){
    shrilacSlide[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > shrilacSlide.length) {slideIndex = 1}
  for (i = 0; i < srilackDot.length; i++) {
    srilackDot[i].className = srilackDot[i].className.replace(" activeSrilac", "");
  }
  
  shrilacSlide[slideIndex-1].style.display = "block";
  srilackDot[slideIndex-1].className += " activeSrilac";
  setTimeout(showSlidesOfShrilac, 4000);
}