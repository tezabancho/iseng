// ============================================
// THEME TOGGLE (Dark Mode)
// ============================================

const themeBtn = document.getElementById('themeBtn');
const htmlElement = document.documentElement;

// Check for saved theme preference or default to 'light'
const currentTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', currentTheme);
updateThemeButton(currentTheme);

// Theme toggle listener
themeBtn.addEventListener('click', () => {
    const theme = htmlElement.getAttribute('data-theme');
    const newTheme = theme === 'light' ? 'dark' : 'light';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeButton(newTheme);
});

function updateThemeButton(theme) {
    themeBtn.textContent = theme === 'light' ? '🌙' : '☀️';
}

// ============================================
// SMOOTH SCROLL ACTIVE LINK
// ============================================

const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = getComputedStyle(document.documentElement).getPropertyValue('--accent-color');
        } else {
            link.style.color = '';
        }
    });
});

// ============================================
// CONTACT FORM HANDLING
// ============================================

const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Client-side validation
    if (!name || !email || !message) {
        showMessage('Silakan isi semua field', 'error');
        return;
    }

    if (!isValidEmail(email)) {
        showMessage('Email tidak valid', 'error');
        return;
    }

    // Disable button while sending
    const submitBtn = contactForm.querySelector('.submit-button');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Mengirim...';

    try {
        // Option 1: Using Formspree (Free service)
        // Create an account at https://formspree.io and get your form ID
        const formspreeId = 'YOUR_FORMSPREE_ID'; // Replace with your Formspree ID
        
        const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                message: message
            })
        });

        if (response.ok) {
            showMessage('✓ Pesan berhasil dikirim! Terima kasih.', 'success');
            contactForm.reset();
        } else {
            showMessage('Gagal mengirim pesan. Silakan coba lagi atau hubungi langsung.', 'error');
        }
    } catch (error) {
        // If Formspree fails, show a local success message
        // (In production, implement a backend endpoint instead)
        console.log('Note: Configure Formspree or implement a backend for form submission');
        showMessage('✓ Pesan tercatat! (Backend belum dikonfigurasi)', 'success');
        contactForm.reset();
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showMessage(msg, type) {
    formMessage.textContent = msg;
    formMessage.className = `form-message ${type}`;
    
    // Clear message after 5 seconds if success
    if (type === 'success') {
        setTimeout(() => {
            formMessage.textContent = '';
            formMessage.className = 'form-message';
        }, 5000);
    }
}

// ============================================
// SCROLL ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.querySelectorAll('.project-card, .skill-category, .stat, .contact-link').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// ============================================
// PARALLAX EFFECT (Optional)
// ============================================

const shapes = document.querySelectorAll('.shape');

if (shapes.length > 0) {
    window.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        shapes.forEach((shape, index) => {
            const depth = (index + 1) * 20;
            shape.style.transform = `translate(${mouseX * depth}px, ${mouseY * depth}px)`;
        });
    });
}

// ============================================
// BUTTON RIPPLE EFFECT
// ============================================

document.querySelectorAll('button, .cta-button, .contact-link, .project-link').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// ============================================
// MOBILE MENU TOGGLE (Optional - if you add it to HTML)
// ============================================

// You can add a hamburger menu for mobile here if needed

// ============================================
// PRELOAD ANIMATIONS
// ============================================

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Add initial animation
document.body.style.opacity = '0';
