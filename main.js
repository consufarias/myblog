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
  var familyDescription = [
    'Mi familia es muy unida, nos gusta viajar, hacer comidas con amigos y es bonita',
    'Mi papi es el mejor haciendo y comiendo asados',
    'Mi mami no sabe leer mapas, pero gracias a eso conocemos muchos lugares nuevos',
    'Mi hermana Vicha es extremadamente obsesiva con sus estudios y tiene un ego inalcanzable',
    'Mi hijo Franco tiene solo la cara de angel, los juguetes temen cuando se acerca',
  ];
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var captionText = document.getElementById("caption");
  var images = document.getElementsByClassName("image");
  var description = document.getElementById("family-description");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  captionText.innerHTML = images[slideIndex-1].alt;
  description.innerText = familyDescription[slideIndex-1]
}

function switchNavBar() {
  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}