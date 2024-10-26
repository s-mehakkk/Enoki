// // Optional: JavaScript to enhance or manage the scroll behavior
// window.addEventListener('scroll', function(event) {
//     const gallery = document.getElementById('gallery');

//     // Check if the scroll is within the gallery view
//     let scrollPosition = window.scrollY;
//     let galleryTop = gallery.offsetTop;
//     let galleryBottom = galleryTop + gallery.offsetHeight;

//     if (scrollPosition >= galleryTop && scrollPosition <= galleryBottom) {
//         // Optional: Implement custom behavior if needed
//     }
// });


// This script will convert vertical scrolling into horizontal scrolling within the specified container

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('gallery');  // Select the container element

    // Function to handle the scroll event within the container
    function handleScroll(event) {
        event.preventDefault();  // Prevent the default vertical scroll action

        // Translate the vertical scroll into horizontal scroll
        // Note: The deltaY property represents the vertical scroll amount
        container.scrollLeft += event.deltaY + event.deltaX;  // deltaX is added for any horizontal scroll input from devices that support it
    }

    // Add the wheel event listener to the container
    container.addEventListener('wheel', handleScroll);
});

