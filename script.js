function changeNavbarColor() {
    const threshold = welcome.offsetHeight;
    if (window.scrollY >= threshold) {
        navbar.classList.add("navbar-changed");
    } else {
        navbar.classList.remove("navbar-changed");
    }
}

window.addEventListener("scroll", changeNavbarColor);

document.addEventListener('DOMContentLoaded', () => {
    const typedMessage = document.getElementById('typed-message');
    const staticText = "I'm Ankit and I'm a ";
    const roles = ["Full-Stack Web Developer", "Software Developer"];
    let roleIndex = 0;
    let index = 0;
    let isDeleting = false;
    let speed = 100;

    function type() {
        const currentRole = roles[roleIndex];
        const currentText = staticText + currentRole.substring(0, index);
        typedMessage.innerHTML = currentText;

        if (!isDeleting && index < currentRole.length) {
            index++;
            speed = 80;
        } else if (isDeleting && index > 0) {
            index--;
            speed = 20;
        } else if (!isDeleting && index === currentRole.length) {
            isDeleting = true;
            // Pause before deleting
            speed = 2000; 
        } else if (isDeleting && index === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            // Pause before typing again
            speed = 500; 
        }
        setTimeout(type, speed);
    }
    type();
});