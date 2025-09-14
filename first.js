
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
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');

mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Fade in animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Animate skill progress bars
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBar = entry.target.querySelector('.skill-progress-bar');
            if (progressBar) {
                const width = progressBar.getAttribute('data-width');
                progressBar.style.width = width + '%';
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.skill-card').forEach(card => {
    skillObserver.observe(card);
});


document.querySelectorAll(".skill-card").forEach(card => {
  let bar = card.querySelector(".skill-progress-bar");
  let text = card.querySelector(".skill-percentage");
  let target = parseInt(bar.getAttribute("data-width"));
  let counter = 0;

  let interval = setInterval(() => {
    if (counter >= target) {
      clearInterval(interval);
    } else {
      counter++;
      bar.style.width = counter + "%";
      text.textContent = counter + "%";
    }
  }, 20); // speed of animation
});
 // Project expand
    function toggleExpand(btn) {
      const card = btn.closest('.project-card');
      card.classList.toggle('expanded');
      btn.innerText = card.classList.contains('expanded') ? 'Less' : 'More';
    }



// Certificate modal functions
function openModal(certId,imagepath) {
    const modal = document.getElementById('certModal');
    const modalContent = document.getElementById('modalContent');

    const certificates = {
        cert1: {
            title: 'HTML & CSS',
            issuer: 'IT Specialist',
            date: 'August 2024',
        },
        cert2: {
            title: 'Html',
            issuer: 'Cisco',
            date: 'July 2025',
        },
        cert3: {
            title: 'CSS',
            issuer: 'Cisco',
            date: 'july 2025',
        },
        cert4: {
            title: 'Javascript',
            issuer: 'Cisco',
            date: 'August 2025',
        },
        cert5: {
            title: 'Internet to Things',
            issuer: 'Nptel',
            date: 'November 2024',
        },
        cert6: {
            title: 'Data Structure and Algorithm',
            issuer: 'GreeksforGreeks',
            date: 'January 2024',
        },
        cert7: {
            title: 'Java Fundamentals',
            issuer: 'Oracel',
            date: 'October 2024',
        },
        cert8: {
            title: 'Computer Science 101',
            issuer: 'EDX',
            date: 'september 2023',
        },
        cert9: {
            title: 'C Programming',
            issuer: 'C++ Institute',
            date: 'March 2024',
        }

    };

    const cert = certificates[certId];
    modalContent.innerHTML = `
                <h2 style="color: var(--primary-glow); margin-bottom: 1rem;">${cert.title}</h2>
                <img src="${imagepath}" alt="${cert.title}" class="certificate-modal-image"/>
                <p><strong>Issuer:</strong> ${cert.issuer}</p>
                <p><strong>Date:</strong> ${cert.date}</p>
                <p style="margin-top: 1.5rem;"><strong>Description:</strong></p>
            `;

    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('certModal').style.display = 'none';
}

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    const modal = document.getElementById('certModal');
    if (event.target === modal) {
        closeModal();
    }
});

// Resume download function
function downloadResume() {
    // In a real implementation, this would download an actual PDF
    alert('Resume download started! (This is a demo - in a real site, this would download your actual resume PDF)');

    newWindow.document.close();
}

// Contact form submission
function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulate form submission
    alert(`Thank you ${name}! Your message has been sent. I'll get back to you at ${email} soon!`);

    // Reset form
    event.target.reset();
}

// Add some interactive particles
function createParticles() {
    const particles = document.createElement('div');
    particles.style.position = 'fixed';
    particles.style.top = '0';
    particles.style.left = '0';
    particles.style.width = '100%';
    particles.style.height = '100%';
    particles.style.pointerEvents = 'none';
    particles.style.zIndex = '-1';

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '2px';
        particle.style.height = '2px';
        particle.style.transform='translateY(-50px)';
        particle.style.background = 'rgba(0, 255, 255, 0.5)';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `twinkle ${2 + Math.random() * 3}s ease-in-out infinite alternate`;
        particles.appendChild(particle);
    }

    document.body.appendChild(particles);
}

// Add twinkle animation
const style = document.createElement('style');
style.textContent = `
            @keyframes twinkle {
                0% { opacity: 0.3; transform: scale(1); }
                100% { opacity: 1; transform: scale(1.2); }
            }
        `;
document.head.appendChild(style);

// Initialize particles when page loads
window.addEventListener('load', createParticles);

// Add typing effect to hero text
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    const timer = setInterval(() => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
}

// Initialize typing effect
window.addEventListener('load', () => {
    setTimeout(() => {
        const heroTitle = document.querySelector('.hero-content h1');
        if (heroTitle) {
            typeWriter(heroTitle, 'Anantha Pavani', 100);
        }
    }, 1000);
});

// Add scroll progress indicator
function createScrollProgress() {
    const progress = document.createElement('div');
    progress.style.position = 'fixed';
    progress.style.top = '0';
    progress.style.left = '0';
    progress.style.width = '0%';
    progress.style.height = '3px';
    progress.style.background = 'linear-gradient(90deg, var(--primary-glow), var(--secondary-glow))';
    progress.style.transform='translateY(-50px)';
    progress.style.zIndex = '1001';
    progress.style.transition = 'width 0.1s ease';
    document.body.appendChild(progress);

    window.addEventListener('scroll', () => {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progress.style.width = scrolled + '%';
    });
}

// Open GitHub project link
function openGit(event, url) {
    event.stopPropagation(); 
    if (url && url !== '#') {
        window.open(url, '_blank'); // open GitHub repo in new tab
    } else {
        alert("GitHub link not available yet!");
    }
}

// Open Live Demo link
function openLive(event, url) {
    event.stopPropagation();
    if (url && url !== '#') {
        window.open(url, '_blank'); // open live demo in new tab
    } else {
        alert("Live demo not available yet!");
    }
}



// Initialize scroll progress
window.addEventListener('load', createScrollProgress);