$(document).on('click', 'nav ul li', function(){
    $(this).addClass('active').siblings().removeClass('active')
});
$(document).on('click', '.mobile-nav ul li', function(){
    $(this).addClass('active').siblings().removeClass('active')
});

// function projectPopupActivate(){
//     document.querySelector("#projects-popup").style.display = "block";
//   }
//   function projectPopupDeactivate(){
//     document.querySelector("#projects-popup").style.display = "none";
//   }

  $(document).keyup(function(e) {
    if (e.key === "Escape") { // escape key maps to keycode `27`
       document.querySelector(".modal").style.display = "none";
   }
});

// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  // Close the Modal
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
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
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }
