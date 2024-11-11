function changeNavbarColor() {
    const threshold = welcome.offsetHeight;
    if (window.scrollY >= threshold) {
        navbar.classList.add("navbar-changed");
    } else {
        navbar.classList.remove("navbar-changed");
    }
}

window.addEventListener("scroll", changeNavbarColor);