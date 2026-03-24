// ===== MOBILE MENU TOGGLE =====
const btn = document.getElementById('menuToggle');
const nav = document.getElementById('navbar');

btn.addEventListener('click', function() {
    nav.classList.toggle('active');
    btn.textContent = nav.classList.contains('active') ? '✕' : '☰';
});

// Close menu when link clicked
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function() {
        nav.classList.remove('active');
        btn.textContent = '☰';
    });
});


// ===== ACTIVE LINK HIGHLIGHTING =====
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.navbar a');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// ===== ENHANCED SCROLL ANIMATIONS =====
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.classList.add('animated');
            }, index * 150); // Staggered animation
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all feature cards and sections
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.feature-card, main section, main h2, main h3');
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        observer.observe(el);
    });
});

// ===== SMOOTH SCROLL BEHAVIOR =====
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

// ===== ENHANCED SCROLL TO TOP BUTTON =====
const scrollToTopButton = document.createElement('button');
scrollToTopButton.id = 'scrollToTop';
scrollToTopButton.innerHTML = '↑';
scrollToTopButton.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: linear-gradient(135deg, #00a8ff, #0088cc);
    color: white;
    border: none;
    cursor: pointer;
    font-size: 28px;
    display: none;
    z-index: 999;
    box-shadow: 0 4px 15px rgba(0, 168, 255, 0.3);
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    font-weight: bold;
`;

document.body.appendChild(scrollToTopButton);

// Show/hide scroll to top button with animation
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        scrollToTopButton.style.display = 'flex';
        scrollToTopButton.style.alignItems = 'center';
        scrollToTopButton.style.justifyContent = 'center';
        scrollToTopButton.style.animation = 'slideUpFade 0.4s ease';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

scrollToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollToTopButton.addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.15) translateY(-8px)';
    this.style.boxShadow = '0 12px 35px rgba(0, 168, 255, 0.5)';
});

scrollToTopButton.addEventListener('mouseout', function() {
    this.style.transform = 'scale(1) translateY(0)';
    this.style.boxShadow = '0 4px 15px rgba(0, 168, 255, 0.3)';
});

// ===== TEXT ANIMATION ON SCROLL =====
const textElements = document.querySelectorAll('main p, main h3, main h4');
textElements.forEach(el => {
    const text = el.textContent;
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideUpFade 0.8s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    observer.observe(el);
});

// ===== ENHANCE IMAGES ON HOVER =====
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('main img');
    images.forEach(img => {
        img.style.transition = 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        
        img.addEventListener('mouseover', function() {
            this.style.cursor = 'pointer';
            this.style.animation = 'heartBeat 0.6s ease';
        });

        img.addEventListener('click', function() {
            // Create a modal/lightbox effect with animation
            const modal = document.createElement('div');
            modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.95);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 2000;
                animation: slideUpFade 0.3s ease;
                backdrop-filter: blur(5px);
            `;

            const largeImage = document.createElement('img');
            largeImage.src = this.src;
            largeImage.style.cssText = `
                max-width: 90%;
                max-height: 90%;
                border-radius: 12px;
                box-shadow: 0 0 50px rgba(0, 168, 255, 0.4);
                animation: bounceIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            `;

            const closeButton = document.createElement('button');
            closeButton.innerHTML = '✕';
            closeButton.style.cssText = `
                position: absolute;
                top: 20px;
                right: 20px;
                background: linear-gradient(135deg, #ff6b6b, #ff5252);
                border: none;
                width: 60px;
                height: 60px;
                border-radius: 50%;
                font-size: 28px;
                cursor: pointer;
                transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                z-index: 2001;
                font-weight: bold;
                color: white;
                box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
            `;

            closeButton.addEventListener('mouseover', function() {
                this.style.transform = 'scale(1.15) rotate(90deg)';
                this.style.boxShadow = '0 8px 25px rgba(255, 107, 107, 0.5)';
            });

            closeButton.addEventListener('mouseout', function() {
                this.style.transform = 'scale(1) rotate(0deg)';
                this.style.boxShadow = '0 4px 15px rgba(255, 107, 107, 0.3)';
            });

            const closeModal = function() {
                modal.style.animation = 'fadeOut 0.3s ease';
                setTimeout(() => modal.remove(), 300);
            };

            closeButton.addEventListener('click', closeModal);
            modal.addEventListener('click', function(e) {
                if (e.target === this) closeModal();
            });

            modal.appendChild(largeImage);
            modal.appendChild(closeButton);
            document.body.appendChild(modal);
        });
    });
});

// ===== PAGE LOAD ANIMATION =====
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
});

document.body.style.opacity = '0.95';
document.body.style.transition = 'opacity 0.3s ease';

// ===== ADD KEYFRAME ANIMATIONS DYNAMICALLY =====
const style = document.createElement('style');
style.textContent = `
    @keyframes slideUpFade {
        from {
            opacity: 0;
            transform: translateY(40px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes bounceIn {
        0% {
            opacity: 0;
            transform: scale(0.3);
        }
        50% {
            opacity: 1;
            transform: scale(1.05);
        }
        70% {
            transform: scale(0.9);
        }
        100% {
            transform: scale(1);
        }
    }

    @keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }

    @keyframes rotateSpin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    @keyframes heartBeat {
        0%, 100% {
            transform: scale(1);
        }
        25% {
            transform: scale(1.3);
        }
        50% {
            transform: scale(1);
        }
    }
`;
document.head.appendChild(style);

// ===== LAZY LOADING IMAGES =====
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '1';
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('main img').forEach(img => {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.6s ease';
        imageObserver.observe(img);
    });
}

// ===== ANALYTICS LOGGING =====
console.log('✨ Welcome to Dhyey Malvaniya\\'s Creative Portfolio');
console.log('🚀 Website loaded with enhanced animations and interactions');

            };

            closeButton.addEventListener('click', closeModal);
            modal.addEventListener('click', function(e) {
                if (e.target === this) closeModal();
            });

            modal.appendChild(largeImage);
            modal.appendChild(closeButton);
            document.body.appendChild(modal);
        });
    });
});

// ===== PAGE LOAD ANIMATION =====
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
});

document.body.style.opacity = '0.95';
document.body.style.transition = 'opacity 0.3s ease';

// ===== ADD KEYFRAME ANIMATIONS =====
const style = document.createElement('style');
style.textContent = `
    @keyframes zoomIn {
        from {
            opacity: 0;
            transform: scale(0.8);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }

    @keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===== PERFORMANCE: THROTTLE SCROLL EVENT =====
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// ===== TRACK PAGE ANALYTICS (Optional) =====
console.log('Website loaded successfully - Dhyey Malvaniya');
