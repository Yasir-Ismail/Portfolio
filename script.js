// Custom Logic for Premium Portfolio

document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const nav = document.querySelector('.glass-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.padding = '10px 0';
            nav.style.background = 'rgba(5, 5, 5, 0.95)';
        } else {
            nav.style.padding = '15px 0';
            nav.style.background = 'rgba(5, 5, 5, 0.8)';
        }
    });

    // Smooth scroll for anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Back to Top visibility
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    // WhatsApp Contact Form
    const whatsappForm = document.getElementById('whatsappForm');
    if (whatsappForm) {
        whatsappForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = whatsappForm.querySelector('[name="name"]').value.trim();
            const email = whatsappForm.querySelector('[name="email"]').value.trim();
            const message = whatsappForm.querySelector('[name="message"]').value.trim();

            const text = `Hello Yasir! 👋\n\n`
                + `*Name:* ${name}\n`
                + `*Email:* ${email}\n\n`
                + `*Message:*\n${message}`;

            const whatsappURL = `https://wa.me/923370795535?text=${encodeURIComponent(text)}`;
            window.open(whatsappURL, '_blank');
        });
    }

    // Simple Typing Effect
    const typingElement = document.querySelector('.gradient-text');
    if (typingElement) {
        const textToType = "Crafting Immersive Web Experiences";
        typingElement.textContent = '';
        let i = 0;

        function type() {
            if (i < textToType.length) {
                typingElement.textContent += textToType.charAt(i);
                i++;
                setTimeout(type, 100);
            } else {
                // Add cursor after finishing
                const cursor = document.createElement('span');
                cursor.className = 'typing-cursor';
                typingElement.appendChild(cursor);
            }
        }
        // Start typing after a short delay
        setTimeout(type, 800);
    }
});
