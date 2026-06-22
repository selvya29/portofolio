/* ========================================
   Portfolio IT - Main JavaScript
   Interactive Features & Animations
   ======================================== */

// ========================================
// DOM Elements
// ========================================
const navbar = document.querySelector('.navbar');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const themeToggle = document.querySelector('.theme-toggle');
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const contactForm = document.querySelector('.contact-form');

// ========================================
// Navbar Scroll Effect
// ========================================
function handleNavbarScroll() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', handleNavbarScroll);

// ========================================
// Mobile Menu Toggle
// ========================================
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('active');

        // Prevent body scroll when menu is open
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

// ========================================
// Dark/Light Mode Toggle
// ========================================
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
}

// Check for saved theme preference or system preference
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
        setTheme(savedTheme);
    } else if (prefersDark) {
        setTheme('dark');
    } else {
        setTheme('light');
    }
}

if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}

initTheme();

// ========================================
// Scroll Animations (Intersection Observer)
// ========================================
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // Animate skill bars when visible
                if (entry.target.classList.contains('skill-category')) {
                    animateSkillBars(entry.target);
                }

                // Animate stat counters when visible
                if (entry.target.classList.contains('stat-card')) {
                    animateCounter(entry.target);
                }
            }
        });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .scale-in, .skill-category, .stat-card').forEach(el => {
        observer.observe(el);
    });
}

// ========================================
// Skill Bar Animation
// ========================================
function animateSkillBars(category) {
    const bars = category.querySelectorAll('.skill-bar-fill');
    bars.forEach(bar => {
        const percentage = bar.getAttribute('data-percentage');
        setTimeout(() => {
            bar.style.width = percentage + '%';
        }, 200);
    });
}

// ========================================
// Counter Animation
// ========================================
function animateCounter(element) {
    const counter = element.querySelector('.stat-number');
    if (!counter || counter.dataset.animated) return;

    const target = parseInt(counter.getAttribute('data-target'));
    const suffix = counter.getAttribute('data-suffix') || '';
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    counter.dataset.animated = 'true';

    const updateCounter = () => {
        current += step;
        if (current < target) {
            counter.textContent = Math.floor(current) + suffix;
            requestAnimationFrame(updateCounter);
        } else {
            counter.textContent = target + suffix;
        }
    };

    updateCounter();
}

// ========================================
// Project Filter
// ========================================
function initProjectFilter() {
    if (!filterBtns.length) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            // Filter projects
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');

                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeIn 0.5s ease forwards';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// ========================================
// Contact Form with Mailto
// ========================================
function initContactForm() {
    const contactFormEl = document.querySelector('#contactForm');
    if (!contactFormEl) return;

    contactFormEl.addEventListener('submit', (e) => {
        e.preventDefault();

        let isValid = true;

        // Clear previous errors
        contactFormEl.querySelectorAll('.form-group').forEach(group => {
            group.classList.remove('error');
        });

        // Validate name
        const name = contactFormEl.querySelector('#name');
        if (!name.value.trim()) {
            showError(name, 'Nama tidak boleh kosong');
            isValid = false;
        }

        // Validate email
        const email = contactFormEl.querySelector('#email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim()) {
            showError(email, 'Email tidak boleh kosong');
            isValid = false;
        } else if (!emailRegex.test(email.value)) {
            showError(email, 'Format email tidak valid');
            isValid = false;
        }

        // Validate subject
        const subject = contactFormEl.querySelector('#subject');
        if (!subject.value.trim()) {
            showError(subject, 'Subjek tidak boleh kosong');
            isValid = false;
        }

        // Validate message
        const message = contactFormEl.querySelector('#message');
        if (!message.value.trim()) {
            showError(message, 'Pesan tidak boleh kosong');
            isValid = false;
        } else if (message.value.trim().length < 10) {
            showError(message, 'Pesan minimal 10 karakter');
            isValid = false;
        }

        if (isValid) {
            // Build mailto link
            const mailtoLink = `mailto:selvyajayanti@gmail.com?subject=${encodeURIComponent(subject.value)}&body=${encodeURIComponent('Nama: ' + name.value + '\nEmail: ' + email.value + '\n\nPesan:\n' + message.value)}`;

            // Open email client
            window.location.href = mailtoLink;

            // Show success message
            const successMsg = contactFormEl.querySelector('#formSuccess');
            if (successMsg) {
                successMsg.classList.add('show');
                successMsg.textContent = '✓ Email client terbuka! Silakan kirim email dari aplikasi email Anda.';
            }

            // Reset form
            contactFormEl.reset();

            // Hide success message after 5 seconds
            setTimeout(() => {
                successMsg.classList.remove('show');
            }, 5000);
        }
    });
}

function showError(input, message) {
    const group = input.closest('.form-group');
    const errorEl = group.querySelector('.form-error');

    group.classList.add('error');
    if (errorEl) {
        errorEl.textContent = message;
    }

    // Remove error on input
    input.addEventListener('input', () => {
        group.classList.remove('error');
    }, { once: true });
}

// ========================================
// Sparkle Effect on Click
// ========================================
function initSparkleEffect() {
    document.addEventListener('click', (e) => {
        // Only on buttons and cards
        if (e.target.closest('.btn') || e.target.closest('.card') || e.target.closest('.project-card')) {
            createSparkle(e.clientX, e.clientY);
        }
    });
}

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';

    // Randomize a bit
    const offsetX = (Math.random() - 0.5) * 30;
    const offsetY = (Math.random() - 0.5) * 30;
    sparkle.style.transform = `translate(${offsetX}px, ${offsetY}px)`;

    // Random color from pink palette
    const colors = ['#FFB6C1', '#FFC0CB', '#FF69B4', '#FF9CB8'];
    sparkle.style.background = colors[Math.floor(Math.random() * colors.length)];

    document.body.appendChild(sparkle);

    // Remove after animation
    setTimeout(() => {
        sparkle.remove();
    }, 1000);
}

// ========================================
// Typing Effect
// ========================================
function initTypingEffect() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;

    const words = ['Web Developer', 'UI/UX Designer', 'IT Professional', 'Problem Solver'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentWord = words[wordIndex];

        if (isDeleting) {
            typingElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentWord.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    type();
}

// ========================================
// Smooth Scroll for Anchor Links
// ========================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
}

// ========================================
// Floating Shapes Parallax
// ========================================
function initParallax() {
    const shapes = document.querySelectorAll('.hero-shape');
    if (!shapes.length) return;

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 0.05;
            shape.style.transform = `translateY(${scrollY * speed}px)`;
        });
    });
}

// ========================================
// Add fadeIn keyframes dynamically
// ========================================
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// ========================================
// Active Navigation Link
// ========================================
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// ========================================
// Initialize All Functions
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initProjectFilter();
    initContactForm();
    initSparkleEffect();
    initTypingEffect();
    initSmoothScroll();
    initParallax();
    setActiveNavLink();
    handleNavbarScroll(); // Initial check
});

// ========================================
// Utility Functions
// ========================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Export for potential module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        setTheme,
        toggleTheme,
        createSparkle
    };
}
