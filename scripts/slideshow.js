/* Source: W3Schools How TO - Slideshow, 2020)
Accessed and Modified by author on 15 July 2020 */

//defining slide index variable
var slideIndex = 0; 

//function call
showSlides();

//function definition
function showSlides() {
    //loop control variable
    var i;
    //getting number of slides
    var slides = document.getElementsByClassName("mySlides");
    //for loop runs total number of slides times to set them to not display
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    //incrementing slide index variable
    slideIndex++; 
    //wrap around of slide index variable
    if (slideIndex > slides.length) { slideIndex = 1 }
    //setting slide to visible
    slides[slideIndex - 1].style.display = "block";
    //delay of 2.5 seconds before next slide
    setTimeout(showSlides, 2500); //amazing coding
}

/*
REFERENCES:
JS Slidehow:
W3schools.com. 2020. W3schools How TO-Slideshow [online] Available at: <https://www.w3schools.com/howto/howto_js_slideshow.asp> [Accessed 15 July 2020].
*/