// Interactive Scripts for Sowmigha's Redesigned Portfolio

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Typing Animation
    const typed = new Typed('#typed', {
        strings: [
            'AI & ML Student', 
            'Full Stack Developer', 
            'Problem Solver', 
            'Tech Enthusiast'
        ],
        typeSpeed: 60,
        backSpeed: 40,
        loop: true,
        backDelay: 1500
    });

    // 2. Theme Toggle (Light/Dark Mode)
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = themeToggle.querySelector('i');

    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        icon.classList.replace('fa-moon', 'fa-sun');
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDark = body.classList.contains('dark-mode');
        
        if (isDark) {
            icon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });

    // 3. Project Filtering Logic
    const filterTabs = document.querySelectorAll('.filter-tab');
    const projectCards = document.querySelectorAll('.p-card');

    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            filterTabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            tab.classList.add('active');

            const filter = tab.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    // Re-trigger animation if needed
                    card.classList.add('reveal');
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // 4. Scroll Reveal Animations
    const sr = ScrollReveal({
        origin: 'top',
        distance: '40px',
        duration: 1000,
        delay: 100,
        reset: false
    });

    sr.reveal('.reveal', { interval: 150 });
    sr.reveal('.skill-card', { interval: 200 });
    sr.reveal('.edu-item', { interval: 200, origin: 'left' });
    sr.reveal('.j-stat-card', { interval: 200, scale: 0.85 });

    // 5. Active Link Highlighting on Scroll
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').slice(1) === current) {
                item.classList.add('active');
            }
        });
    });

    // 6. Contact Form Simulation
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('button');
            const originalBtnContent = submitBtn.innerHTML;

            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> SENDING...';
            submitBtn.disabled = true;

            setTimeout(() => {
                alert('Thank you for reaching out! Your message has been sent successfully.');
                contactForm.reset();
                submitBtn.innerHTML = originalBtnContent;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
});
