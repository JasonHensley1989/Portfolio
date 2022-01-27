// Typewriter effect animation
// W3Schools - source
let i = 0;
let txt = 'Hello, my name is Jason. I am a full-stack software engineer.';

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("name").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}

//carousel 
// w3 schools - source
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }

  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


//JQuery to hide and show paragraph tags on click
//Jquery docs - source
$('.project-info1').click(function(event) {
    $('.para').slideToggle("slow", function() {
  });
});

$('.project-info2').click(function(event) {
    $('.para1').slideToggle("slow", function(){
    console.log("Second clicked");
  });
});

$('.project-info3').click(function(event) {
    $('.para2').slideToggle("slow", function(){
    console.log("Second clicked");
  });
});

$('.other-projects').click(function() {
  $('.pic').slideToggle("slow", function() {
    console.log("More Projects Clicked");
  });
});

//JQuery to hide nav div when hamburger button is clicked
