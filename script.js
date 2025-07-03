// Smooth scrolling for navigation links
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

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 212, 255, 0.1)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.9)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.skill-card, .project-card, .resume-item').forEach(el => {
    observer.observe(el);
});

// Typing animation for hero subtitle
const heroSubtitle = document.querySelector('.hero-subtitle');
if (heroSubtitle) {
    const text = heroSubtitle.textContent;
    heroSubtitle.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            heroSubtitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    // Start typing animation after a delay
    setTimeout(typeWriter, 1000);
}

// Parallax effect for background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.circuit-pattern');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Dynamic particle generation
function createParticles() {
    const particleContainer = document.querySelector('.floating-particles');
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(0, 212, 255, 0.6);
            border-radius: 50%;
            pointer-events: none;
            animation: floatParticle ${5 + Math.random() * 5}s ease-in-out infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 5}s;
        `;
        particleContainer.appendChild(particle);
    }
}

// Add particle animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes floatParticle {
        0%, 100% { 
            transform: translateY(0px) translateX(0px);
            opacity: 0.3;
        }
        25% { 
            transform: translateY(-20px) translateX(10px);
            opacity: 1;
        }
        50% { 
            transform: translateY(-10px) translateX(-5px);
            opacity: 0.8;
        }
        75% { 
            transform: translateY(-30px) translateX(15px);
            opacity: 0.6;
        }
    }
    
    .skill-card, .project-card, .resume-item {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }
    
    .skill-card.animate, .project-card.animate, .resume-item.animate {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

// Initialize particles when page loads
window.addEventListener('load', createParticles);

// Form submission handler
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const subject = contactForm.querySelector('input[type="text"]:nth-of-type(2)').value;
        const message = contactForm.querySelector('textarea').value;
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Simulate form submission
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('Thank you for your message! I\'ll get back to you soon.');
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Add hover effects to navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.color = '#00d4ff';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.color = '#ffffff';
    });
});

// Digital circuit animation enhancements
function enhanceDigitalCircuit() {
    const binaryStreams = document.querySelectorAll('.binary-stream');
    
    // Generate random binary sequences
    function generateBinarySequence() {
        const digits = ['0', '1'];
        return Array.from({length: 5}, () => digits[Math.floor(Math.random() * 2)]);
    }
    
    // Update binary streams with new sequences
    function updateBinaryStreams() {
        binaryStreams.forEach(stream => {
            const newSequence = generateBinarySequence();
            const digitElements = stream.querySelectorAll('.binary-digit');
            
            digitElements.forEach((digit, index) => {
                setTimeout(() => {
                    digit.textContent = newSequence[index];
                    digit.style.animation = 'none';
                    digit.offsetHeight; // Trigger reflow
                    digit.style.animation = 'digitAppear 0.5s ease-in-out forwards';
                }, index * 100);
            });
        });
    }
    
    // Update binary streams every 4 seconds
    setInterval(updateBinaryStreams, 4000);
    
    // Add data packet animation
    function createDataPacket() {
        const circuit = document.querySelector('.digital-circuit');
        const packet = document.createElement('div');
        packet.className = 'data-packet';
        packet.textContent = Math.random() > 0.5 ? '1' : '0';
        
        // Random starting position
        const startPositions = [
            { top: '20%', left: '10%' },
            { top: '80%', right: '10%' },
            { bottom: '20%', left: '50%' },
            { top: '50%', right: '20%' }
        ];
        
        const startPos = startPositions[Math.floor(Math.random() * startPositions.length)];
        Object.assign(packet.style, startPos);
        
        circuit.appendChild(packet);
        
        // Animate packet movement
        setTimeout(() => {
            packet.style.top = '50%';
            packet.style.left = '50%';
            packet.style.transform = 'translate(-50%, -50%)';
            packet.style.opacity = '0';
        }, 100);
        
        // Remove packet after animation
        setTimeout(() => {
            if (packet.parentNode) {
                packet.parentNode.removeChild(packet);
            }
        }, 2000);
    }
    
    // Create data packets periodically
    setInterval(createDataPacket, 1500);
}

// Initialize enhanced digital circuit
window.addEventListener('load', enhanceDigitalCircuit);

// Tech orb interactive effect - updated for digital circuit
const digitalCircuit = document.querySelector('.digital-circuit');
if (digitalCircuit) {
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    const animateCircuit = () => {
        const rect = digitalCircuit.getBoundingClientRect();
        const circuitCenterX = rect.left + rect.width / 2;
        const circuitCenterY = rect.top + rect.height / 2;
        
        const deltaX = mouseX - circuitCenterX;
        const deltaY = mouseY - circuitCenterY;
        
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const maxDistance = 200;
        
        if (distance < maxDistance) {
            const factor = (maxDistance - distance) / maxDistance;
            const moveX = deltaX * factor * 0.05;
            const moveY = deltaY * factor * 0.05;
            
            digitalCircuit.style.transform = `translate(${moveX}px, ${moveY}px) scale(${1 + factor * 0.05})`;
            
            // Increase animation speed when hovering
            const circuitPaths = digitalCircuit.querySelectorAll('.circuit-path');
            circuitPaths.forEach(path => {
                path.style.animationDuration = `${1 - factor * 0.5}s`;
            });
        } else {
            digitalCircuit.style.transform = 'translate(0px, 0px) scale(1)';
            
            // Reset animation speed
            const circuitPaths = digitalCircuit.querySelectorAll('.circuit-path');
            circuitPaths.forEach(path => {
                path.style.animationDuration = '2s';
            });
        }
        
        requestAnimationFrame(animateCircuit);
    };
    
    animateCircuit();
}

// Smooth reveal animation for sections
const revealElements = document.querySelectorAll('.section-title, .about-intro, .hero-content');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.2 });

revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    revealObserver.observe(el);
});

// Add glitch effect to hero title on hover
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    heroTitle.addEventListener('mouseenter', function() {
        this.style.animation = 'glitch 0.3s ease-in-out';
    });
    
    heroTitle.addEventListener('animationend', function() {
        this.style.animation = '';
    });
}

// Add glitch animation
const glitchStyle = document.createElement('style');
glitchStyle.textContent = `
    @keyframes glitch {
        0% { transform: translate(0); }
        20% { transform: translate(-2px, 2px); }
        40% { transform: translate(-2px, -2px); }
        60% { transform: translate(2px, 2px); }
        80% { transform: translate(2px, -2px); }
        100% { transform: translate(0); }
    }
`;
document.head.appendChild(glitchStyle);

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add CSS for loading state
const loadingStyle = document.createElement('style');
loadingStyle.textContent = `
    body:not(.loaded) {
        overflow: hidden;
    }
    
    body:not(.loaded)::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #0a0a0a;
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    body:not(.loaded)::after {
        content: 'Loading...';
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #00d4ff;
        font-size: 1.5rem;
        z-index: 10000;
        animation: pulse 1.5s ease-in-out infinite;
    }
    
    body.loaded::before,
    body.loaded::after {
        display: none;
    }
`;
document.head.appendChild(loadingStyle);
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const successMessage = document.getElementById('form-success');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // prevent default form submission
        const formData = new FormData(form);

        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                form.reset();
                successMessage.style.display = 'block';
            } else {
                alert('Oops! There was a problem submitting your form.');
            }
        }).catch(error => {
            alert('Something went wrong. Please try again later.');
        });
    });
});
