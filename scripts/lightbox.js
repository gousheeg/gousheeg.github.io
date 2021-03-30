//Variable declarations
// Total number of slides
var numSlides=4;
// Index of current Slide
var slideIndex = 0;

// Sets the slideIndex variable
function currentSlide(n){
    slideIndex = n;
}

// Updates the slideIndex variable based on next/prev button press
function plusSlide(n){
    slideIndex = slideIndex + n;
    // wraparound when end of images is reached
    if(slideIndex > numSlides-1) {
        slideIndex = 0;
    }
    if(slideIndex < 0) {
        slideIndex = 3;
    }
    showSlide(slideIndex);
}

// Update the modal with the image corresponding to slideIndex
function showSlide(n){
    // Getting all images
    var slides = document.getElementsByClassName("mySlides");
    // Selecting one image
    var imageElement = slides[n];
    // Displaying selected image
    lightBoxModal(imageElement);
}

function lightBoxModal(imageElement){
    // Getting modal properties (next, prev, close buttons)
    var modal = document.getElementById("myModal");

    // Gets placeholder for image
    var modalImg = document.getElementById("modalContent");
    
    // Display style 
    modal.style.display = "block";
    // Sets the placeholder to selected image
    modalImg.src = imageElement.src;

    // Selecting close button removes modal (sets display style to none)
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function(){
        modal.style.display = "none";
    }

}

/*
REFERENCES:
How TO - CSS/JS Modal. (n.d.). Retrieved October 03, 2020, from https://www.w3schools.com/howto/howto_css_modals.asp
How TO - Lightbox. (n.d.). Retrieved October 03, 2020, from https://www.w3schools.com/howto/howto_js_lightbox.asp
*/

