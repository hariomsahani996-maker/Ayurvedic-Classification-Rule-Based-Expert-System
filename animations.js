// =====================================================
// Shared Animation Script
// Handles: scroll-reveal animations + click animations
// Include this file on every page AFTER Bootstrap JS
// =====================================================

document.addEventListener("DOMContentLoaded", function () {

    // ---------- SCROLL REVEAL ----------
    const revealEls = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");

    if (revealEls.length) {

        const observer = new IntersectionObserver(function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                    observer.unobserve(entry.target); // animate once
                }

            });

        }, {
            threshold: 0.15
        });

        revealEls.forEach(function (el) {
            observer.observe(el);
        });
    }

    // ---------- CLICK RIPPLE (buttons) ----------
    const rippleButtons = document.querySelectorAll(".btn-success, .btn-primary");

    rippleButtons.forEach(function (btn) {

        btn.addEventListener("click", function (e) {

            const circle = document.createElement("span");
            const diameter = Math.max(btn.clientWidth, btn.clientHeight);
            const radius = diameter / 2;

            const rect = btn.getBoundingClientRect();

            circle.style.width = circle.style.height = diameter + "px";
            circle.style.left = (e.clientX - rect.left - radius) + "px";
            circle.style.top = (e.clientY - rect.top - radius) + "px";
            circle.classList.add("ripple");

            const oldRipple = btn.querySelector(".ripple");
            if (oldRipple) {
                oldRipple.remove();
            }

            btn.appendChild(circle);

            setTimeout(function () {
                circle.remove();
            }, 600);

        });

    });

    // ---------- CLICK PULSE (cards) ----------
    const cards = document.querySelectorAll(".card");

    cards.forEach(function (card) {

        card.addEventListener("click", function () {

            card.classList.remove("clicked");
            // force reflow so animation can replay
            void card.offsetWidth;
            card.classList.add("clicked");

        });

    });

});
