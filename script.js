const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');
const openIcon = document.getElementById('menu-open-icon');
const closeIcon = document.getElementById('menu-close-icon');


function setMenu(open) {
    if(!btn || !menu) return;
    
    // For accessibility
    if(open) {
        btn.setAttribute("aria-expanded", "true");
    } else {
        btn.setAttribute("aria-expanded", "false");
    }
    
    // Show or hide the menu
    if(open) {
        menu.classList.remove("hidden");  // Show menu
    } else {
        menu.classList.add("hidden");     // Hide menu
    }
    
    // Show or hide the open icon (hamburger)
    if(openIcon) {
        if(open) {
            openIcon.classList.add("hidden");     // Hide hamburger when menu opens
        } else {
            openIcon.classList.remove("hidden");  // Show hamburger when menu closes
        }
    }
    
    // Show or hide the close icon (X)
    if(closeIcon) {
        if(open) {
            closeIcon.classList.remove("hidden"); // Show X when menu opens
        } else {
            closeIcon.classList.add("hidden");    // Hide X when menu closes
        }
    }
}