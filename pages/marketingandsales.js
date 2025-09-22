// Marketing and Sales Lead Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    // GSAP Animations
    gsap.registerPlugin(ScrollTrigger);

    // Hero section animations
    gsap.timeline()
        .from(".hero-content h1", { duration: 1, y: 50, opacity: 0, ease: "power2.out" })
        .from(".hero-content p", { duration: 0.8, y: 30, opacity: 0, ease: "power2.out" }, "-=0.5")
        .from(".hero-buttons", { duration: 0.8, y: 30, opacity: 0, ease: "power2.out" }, "-=0.3");

    // Stats animation
    gsap.from(".stat-item", {
        duration: 1,
        scale: 0,
        opacity: 0,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
            trigger: ".stat-item",
            start: "top 80%"
        }
    });

    // Achievement cards animation
    gsap.from(".achievement-card", {
        duration: 1,
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".achievement-card",
            start: "top 80%"
        }
    });

    // Timeline items animation
    gsap.from(".timeline-item", {
        duration: 1,
        x: (index) => index % 2 === 0 ? -100 : 100,
        opacity: 0,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".timeline-item",
            start: "top 80%"
        }
    });

    // Vision cards parallax effect
    gsap.to(".bg-white\\/10", {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
            trigger: ".bg-white\\/10",
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });

    // Mobile Menu Functionality
    const mobileMenuBtn = document.getElementById('modernMobileMenuBtn');
    const mobileMenu = document.getElementById('modernMobileMenu');
    const mobileBackdrop = document.getElementById('modernBackdrop');
    const mobileSidebar = document.getElementById('modernSidebar');
    const mobileCloseBtn = document.getElementById('modernCloseBtn');

    function openMobileMenu() {
        mobileMenu.classList.remove('pointer-events-none');
        mobileBackdrop.classList.remove('bg-black/0', 'backdrop-blur-0', 'pointer-events-none');
        mobileBackdrop.classList.add('bg-black/50', 'backdrop-blur-sm', 'pointer-events-auto');
        mobileSidebar.classList.remove('translate-x-full');
        mobileSidebar.classList.add('translate-x-0');
        
        // Hamburger animation
        const lines = document.querySelectorAll('.hamburger-line');
        lines[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
        lines[1].style.opacity = '0';
        lines[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
    }

    function closeMobileMenu() {
        mobileBackdrop.classList.add('bg-black/0', 'backdrop-blur-0', 'pointer-events-none');
        mobileBackdrop.classList.remove('bg-black/50', 'backdrop-blur-sm', 'pointer-events-auto');
        mobileSidebar.classList.add('translate-x-full');
        mobileSidebar.classList.remove('translate-x-0');
        
        // Reset hamburger animation
        const lines = document.querySelectorAll('.hamburger-line');
        lines[0].style.transform = '';
        lines[1].style.opacity = '';
        lines[2].style.transform = '';
        
        setTimeout(() => {
            mobileMenu.classList.add('pointer-events-none');
        }, 500);
    }

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', openMobileMenu);
    }

    if (mobileCloseBtn) {
        mobileCloseBtn.addEventListener('click', closeMobileMenu);
    }

    if (mobileBackdrop) {
        mobileBackdrop.addEventListener('click', closeMobileMenu);
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add scroll-based header background
    const header = document.querySelector('header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('bg-white/95');
            header.classList.remove('bg-white/80');
        } else {
            header.classList.add('bg-white/80');
            header.classList.remove('bg-white/95');
        }
        lastScrollY = window.scrollY;
    });

    // Intersection Observer for navigation highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    const observerOptions = {
        rootMargin: '-20% 0px -80% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('text-pink-600');
                    link.classList.add('text-gray-700');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('text-pink-600');
                        link.classList.remove('text-gray-700');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});