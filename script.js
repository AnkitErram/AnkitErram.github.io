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
            document.body.classList.add('typing');
        } else if (isDeleting && index > 0) {
            index--;
            speed = 20;
            document.body.classList.add('typing');
        } else if (!isDeleting && index === currentRole.length) {
            isDeleting = true;
            // Pause before deleting
            speed = 2000;
            document.body.classList.remove('typing');
        } else if (isDeleting && index === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            // Pause before typing again
            speed = 500;
            document.body.classList.remove('typing'); 
        }
        setTimeout(type, speed);
    }
    type();
});

function readMore1() {
    const dots = document.getElementById("dots1");
    const moreText = document.getElementById("more1");
    const btnText = document.getElementById("readBtn1");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
  