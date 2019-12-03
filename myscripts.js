

$(document).on('click', 'nav ul li', function(){
    $(this).addClass('active').siblings().removeClass('active')
});
$(document).on('click', '.mobile-nav ul li', function(){
    $(this).addClass('active').siblings().removeClass('active')
});

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
    if(slides[slideIndex-1])
    {
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
    }
  }
        var name = null;
        var subject = null;
        var email = null;
        var message = null;



window.onload = function() {
    document.getElementById('clear').reset();
    }
  $(document).ready(function(){
      $('.submit').click(function(event){
          var name = $('.name').val();
          var subject = $('.subject').val();
          var email = $('.email').val();
          var message = $('.message').val();

          var statusN = $('.statusN')
          var statusS = $('.statusS')
          var statusE = $('.statusE')
          var statusM = $('.statusM')
          var status = $('.status')
          statusN.empty();
          statusE.empty();
          statusS.empty();
          statusM.empty();

          if(name.length < 5){
            event.preventDefault()
            statusN.append('<div>Name needs to be at least 5 characters long</div>')
          }

          if(email.length > 5 && email.includes('@') && email.includes('.')){
              console.log('Email is valid');
          }else{
            event.preventDefault()
            statusE.append('<div>Email is not valid</div>')
          }

          if(subject.length <= 2){
            event.preventDefault()
            statusS.append('<div>Subject is not valid</div>')
          }
          if(message.length <= 10){
            event.preventDefault()
            statusM.append('<div>A message needs to be at least 10 characters long</div>')
          }

      })
  })