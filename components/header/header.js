document.addEventListener('DOMContentLoaded', function() {
    // Get all the navigation links
    const navLinks = document.querySelectorAll('.nav a');
    console.log(navLinks);
    // Get the current page's URL path
    const currentPath = window.location.pathname;
    // Get the current page's hash (if any, useful for in-page navigation)
    const currentHash = window.location.hash;

    navLinks.forEach(link => {
        // Remove leading and trailing slashes for a proper match
        let normalizedLinkHref = link.getAttribute('href').replace(/\/$/, '');

        // Check if the link's href matches the current path or hash
        if (normalizedLinkHref === currentPath || normalizedLinkHref === currentHash) {
            // Add 'active' class to the matching link
            link.classList.add('active');
        } else {
            // Optional: remove the 'active' class if it's not the current link
            link.classList.remove('active');
        }
    });
});

