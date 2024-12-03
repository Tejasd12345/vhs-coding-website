document.addEventListener("DOMContentLoaded", function() {
    // IntersectionObserver for scroll animations
    const sections = document.querySelectorAll(".section");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            } else {
                entry.target.classList.remove("active");
            }
        });
    }, {
        threshold: 0.5,
        rootMargin: "0px 0px -100px 0px"
    });
    sections.forEach(section => observer.observe(section));

    // Menu Button Toggle for Side Menu
    const menuButton = document.getElementById("menuButton");
    const sideMenu = document.getElementById("sideMenu");
    const menuLinks = document.querySelectorAll(".side-menu li");

    menuButton.addEventListener("click", function() {
        sideMenu.classList.toggle("active");
        menuButton.classList.toggle("active");

        // Staggered animation for menu links
        menuLinks.forEach((link, index) => {
            if (sideMenu.classList.contains("active")) {
                link.style.transitionDelay = `${index * 0.1 + 0.2}s`;
            } else {
                link.style.transitionDelay = "0s";
            }
        });
    });

    // Close the menu when a link is clicked
    document.querySelectorAll(".menu-link").forEach(link => {
        link.addEventListener("click", function() {
            sideMenu.classList.remove("active");
            menuButton.classList.remove("active");
        });
    });
});

   

// particles.js configuration
particlesJS("particle-background", {
    particles: {
        number: {
            value: 50,
            density: { enable: true, value_area: 800 }
        },
        color: { value: "#0ff" },
        shape: {
            type: "circle",
            stroke: { width: 0, color: "#fff" },
            polygon: { nb_sides: 5 }
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: { enable: true, speed: 0.5, opacity_min: 0.1, sync: false }
        },
        size: {
            value: 3,
            random: true,
            anim: { enable: true, speed: 3, size_min: 0.1, sync: false }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#0ff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 1200 }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true
        },
        modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
            repulse: { distance: 100, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 }
        }
    },
    retina_detect: true
});


// Floating Particles on Hover
document.addEventListener("mousemove", (e) => {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = `${e.pageX}px`;
    particle.style.top = `${e.pageY}px`;

    document.body.appendChild(particle);

    setTimeout(() => particle.remove(), 1000);
});
document.querySelectorAll('.ripple-button').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        const rect = button.getBoundingClientRect();
        ripple.style.width = ripple.style.height = Math.max(rect.width, rect.height) + 'px';
        ripple.style.left = e.clientX - rect.left - ripple.offsetWidth / 2 + 'px';
        ripple.style.top = e.clientY - rect.top - ripple.offsetHeight / 2 + 'px';
        button.appendChild(ripple);
        
        // Remove ripple after animation
        ripple.addEventListener('animationend', () => ripple.remove());
    });
});

// Smooth Scroll for Menu Links
document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', function(event) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            event.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

document.addEventListener("scroll", () => {
    const menuButton = document.getElementById("menuButton");
    const scrollY = window.scrollY; // Get current scroll position
    menuButton.style.transform = `translateY(${scrollY}px)`; // Move button down
});

const sections = document.querySelectorAll(".section");
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        } else {
            entry.target.classList.remove("active");
        }
    });
});
sections.forEach(section => observer.observe(section));
function copyCode() {
    const code = document.getElementById("codeSnippet").innerText; // Get code text
    navigator.clipboard.writeText(code).then(() => {
        alert("Code copied to clipboard!"); // Notify the user
    }).catch(err => {
        console.error("Failed to copy code: ", err);
    });
}

// Download diagram button functionality
document.getElementById("downloadDiagram").addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "codediagram.jpg"; // Path to the diagram file
    link.download = "codediagram.jpg"; // Name of the downloaded file
    link.click();
});
