const header = document.getElementsByClassName('outline-btn');

// Function to update the header style based on scroll position
function updateHeader() {
    if (window.scrollY > 70) {
        // Add a class to the header when scrolled
        header[0].classList.add('scrolled');
    } else {
        // Remove the class when not scrolled
        header[0].classList.remove('scrolled');
    }
}

// Listen for the scroll event and call the updateHeader function
window.addEventListener('scroll', updateHeader);