document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".main-nav");

    if (menuButton && nav) {

        menuButton.addEventListener("click", () => {
            nav.classList.toggle("show");

            const isOpen = nav.classList.contains("show");

            menuButton.setAttribute("aria-expanded", isOpen);

            const icon = menuButton.querySelector("i");

            if (icon) {
                icon.classList.toggle("fa-bars", !isOpen);
                icon.classList.toggle("fa-xmark", isOpen);
            }
        });

        const navLinks = nav.querySelectorAll("a");

        navLinks.forEach((link) => {

            link.addEventListener("click", () => {

                nav.classList.remove("show");

                menuButton.setAttribute("aria-expanded", "false");

                const icon = menuButton.querySelector("i");

                if (icon) {
                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");
                }

            });

        });

        document.addEventListener("click", (event) => {

            if (
                nav.classList.contains("show") &&
                !nav.contains(event.target) &&
                !menuButton.contains(event.target)
            ) {

                nav.classList.remove("show");

                menuButton.setAttribute("aria-expanded", "false");

                const icon = menuButton.querySelector("i");

                if (icon) {
                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");
                }

            }

        });

        document.addEventListener("keydown", (event) => {

            if (event.key === "Escape") {

                nav.classList.remove("show");

                menuButton.setAttribute("aria-expanded", "false");

                const icon = menuButton.querySelector("i");

                if (icon) {
                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");
                }

            }

        });

    }


    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    const navigationLinks =
        document.querySelectorAll(".main-nav a");

    navigationLinks.forEach((link) => {

        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {
            link.classList.add("active");
        }

    });


    const anchorLinks =
        document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId = link.getAttribute("href");

            // Ignore empty placeholder links
            if (targetId === "#") return;

            const target =
                document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    const contactForm =
        document.querySelector(".contact-form");

    if (contactForm) {

        contactForm.addEventListener("submit", (event) => {

            event.preventDefault();

            const name =
                contactForm.querySelector("#name");

            const email =
                contactForm.querySelector("#email");

            const message =
                contactForm.querySelector("#message");


            if (!name || !email || !message) {
                return;
            }

            const nameValue =
                name.value.trim();

            const emailValue =
                email.value.trim();

            const messageValue =
                message.value.trim();


            if (!nameValue || !emailValue || !messageValue) {

                alert("Please fill in all required fields.");

                return;
            }

            const whatsappNumber =
                "2349132269794";

            const whatsappMessage = `Hello THE FRONTIER,

I would like to get in touch.

Name: ${nameValue}
Email: ${emailValue}

Message:
${messageValue}`;


            const encodedMessage =
                encodeURIComponent(whatsappMessage);

            const whatsappURL =
                `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

            window.open(
                whatsappURL,
                "_blank"
            );

            contactForm.reset();

        });

    }


    const yearElement =
        document.querySelector("#current-year");

    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }

});