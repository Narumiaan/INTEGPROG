
const dropdown = document.querySelector(".dropdown");
const dropButton = document.querySelector(".dropbtn");

if (dropdown && dropButton) {
    dropButton.addEventListener("click", function (event) {
        event.stopPropagation();
        dropdown.classList.toggle("open");
    });

    document.addEventListener("click", function () {
        dropdown.classList.remove("open");
    });
}


document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
        const targetId = this.getAttribute("href");
        const target = document.querySelector(targetId);

        if (target) {
            event.preventDefault();
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


const sections = document.querySelectorAll("section[id]");
const sectionLinks = document.querySelectorAll('.navbar a[href^="#"]');

if (sections.length && sectionLinks.length) {
    const observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    sectionLinks.forEach(function (link) {
                        link.classList.remove("active");
                    });

                    const activeLink = document.querySelector(
                        '.navbar a[href="#' + entry.target.id + '"]'
                    );

                    if (activeLink) {
                        activeLink.classList.add("active");
                    }
                }
            });
        },
        {
            threshold: 0.35
        }
    );

    sections.forEach(function (section) {
        observer.observe(section);
    });
}

// Simple footer year update
const yearElements = document.querySelectorAll("footer p");

yearElements.forEach(function (footerText) {
    footerText.innerHTML = "© " + new Date().getFullYear() + " Alexandra Estrella";
});
