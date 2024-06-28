document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.querySelectorAll(".slide");

        //Hide all slides
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        
        //increment slide index and show the next slide
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex -1].style.display = "block";
        //change slide every 10 secs
        setTimeout(showSlides,10000);
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const fade = document.querySelector(".fade");
    const scroll = document.querySelector(".scroll");

    // Duplicate the content to create a seamless scroll
    const contentWidth = scroll.scrollWidth;
    scroll.innerHTML += scroll.innerHTML;

    // Function to start the auto-scrolling
    function startScrolling() {
        let scrollAmount = 0;

        function step() {
            scrollAmount += 1;
            if (scrollAmount >= contentWidth) {
                scrollAmount = 0; // Reset scroll amount for seamless loop
            }
            fade.scrollLeft = scrollAmount;
            requestAnimationFrame(step);
        }

        requestAnimationFrame(step);
    }

    startScrolling();
});
