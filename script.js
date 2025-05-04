// Enhanced Cursor Effect
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});

// Add hover effect to links and buttons
const hoverElements = document.querySelectorAll('a, button, .project-card, .skill-tags span');
hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.classList.add('hovered');
    });
    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('hovered');
    });
});

// Navbar Burger Menu
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('active');
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        navLinks.classList.remove('active');
        burger.classList.remove('active');

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Hero Section Animation
gsap.from('.hero-title', {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.3
});

gsap.from('.hero-subtitle', {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.6
});

gsap.from('.hero-buttons', {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.9,
    stagger: 0.2
});

gsap.from('.hero-social a', {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 1.2,
    stagger: 0.1
});

gsap.from('.image-container', {
    opacity: 0,
    scale: 0.8,
    duration: 1.5,
    delay: 0.5,
    ease: "back.out(1.7)"
});

// Section Animations
gsap.utils.toArray('section').forEach(section => {
    const sectionHeading = section.querySelector('h2');
    const sectionLine = section.querySelector('.line');
    
    if (sectionHeading && sectionLine) {
        gsap.from([sectionHeading, sectionLine], {
            opacity: 0,
            y: 50,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });
    }
});

// About Section Animation
gsap.from('.about-text', {
    opacity: 0,
    x: -50,
    duration: 1,
    scrollTrigger: {
        trigger: '.about',
        start: "top 80%",
        toggleActions: "play none none none"
    }
});

gsap.from('.about-image', {
    opacity: 0,
    x: 50,
    duration: 1,
    scrollTrigger: {
        trigger: '.about',
        start: "top 80%",
        toggleActions: "play none none none"
    }
});

// Project Card Animations
gsap.utils.toArray('.project-card').forEach((card, i) => {
    gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: i * 0.1,
        scrollTrigger: {
            trigger: '.projects-grid',
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });
});

// Contact Section Animation
gsap.from('.contact-info', {
    opacity: 0,
    x: -50,
    duration: 1,
    scrollTrigger: {
        trigger: '.contact',
        start: "top 80%",
        toggleActions: "play none none none"
    }
});

gsap.from('.contact-form', {
    opacity: 0,
    x: 50,
    duration: 1,
    scrollTrigger: {
        trigger: '.contact',
        start: "top 80%",
        toggleActions: "play none none none"
    }
});

// Background shapes animation
const shapes = [
    { shape: 'circle', color: 'rgba(108, 99, 255, 0.1)', size: 200, x: 10, y: 20 },
    { shape: 'triangle', color: 'rgba(255, 101, 132, 0.1)', size: 150, x: 90, y: 70 },
    { shape: 'square', color: 'rgba(77, 68, 219, 0.1)', size: 100, x: 20, y: 80 }
];

shapes.forEach((shape, i) => {
    const shapeEl = document.createElement('div');
    shapeEl.className = `bg-shape bg-${shape.shape}`;
    shapeEl.style.width = `${shape.size}px`;
    shapeEl.style.height = `${shape.size}px`;
    shapeEl.style.background = shape.color;
    shapeEl.style.position = 'absolute';
    shapeEl.style.left = `${shape.x}%`;
    shapeEl.style.top = `${shape.y}%`;
    shapeEl.style.zIndex = '-1';
    shapeEl.style.borderRadius = shape.shape === 'circle' ? '50%' : '0';
    shapeEl.style.transform = shape.shape === 'triangle' ? 'rotate(45deg)' : 'none';
    document.body.appendChild(shapeEl);
    
    gsap.to(shapeEl, {
        rotation: 360,
        duration: 30 + (i * 10),
        repeat: -1,
        ease: "none"
    });
});