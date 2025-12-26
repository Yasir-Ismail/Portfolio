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
