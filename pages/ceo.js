// CEO Page JavaScript
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
        duration: 0.8,
        y: 50,
        opacity: 0,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".achievement-card",
            start: "top 85%"
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
            trigger: ".bg-gradient-to-br.from-blue-900",
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });

    // Connect cards hover animations
    document.querySelectorAll('.group').forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card.querySelector('i'), { scale: 1.2, duration: 0.3, ease: "back.out(1.7)" });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card.querySelector('i'), { scale: 1, duration: 0.3, ease: "power2.out" });
        });
    });

    // Mobile menu functionality
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMobileMenu = document.getElementById('closeMobileMenu');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    const line1 = document.getElementById('line1');
    const line2 = document.getElementById('line2');
    const line3 = document.getElementById('line3');
    
    function openMobileMenu() {
        mobileMenu.classList.remove('translate-x-full');
        line1.style.transform = 'rotate(45deg) translate(5px, 5px)';
        line2.style.opacity = '0';
        line3.style.transform = 'rotate(-45deg) translate(7px, -6px)';
    }
    
    function closeMobileMenuFunc() {
        mobileMenu.classList.add('translate-x-full');
        line1.style.transform = 'rotate(0) translate(0, 0)';
        line2.style.opacity = '1';
        line3.style.transform = 'rotate(0) translate(0, 0)';
    }
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', openMobileMenu);
    }
    
    if (closeMobileMenu) {
        closeMobileMenu.addEventListener('click', closeMobileMenuFunc);
    }
    
    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', closeMobileMenuFunc);
    }
    
    // Close mobile menu when clicking on navigation links
    const mobileNavLinks = mobileMenu?.querySelectorAll('a');
    mobileNavLinks?.forEach(link => {
        link.addEventListener('click', closeMobileMenuFunc);
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href && href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Parallax effect for background elements
    gsap.to(".parallax-element", {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
            trigger: ".parallax-element",
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });
});
