// Loading animation
    window.addEventListener('load', function() {
      setTimeout(function() {
        document.querySelector('.loader').classList.add('fade-out');
      }, 1500);
    });

    // Mobile menu functionality
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    const overlay = document.getElementById('overlay');

    mobileMenuBtn.addEventListener('click', function() {
      mobileNav.classList.toggle('active');
      overlay.classList.toggle('active');
      // Change icon based on menu state
      if (mobileNav.classList.contains('active')) {
        mobileMenuBtn.innerHTML = '<i class="fas fa-times"></i>';
      } else {
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
      }
    });

    overlay.addEventListener('click', function() {
      mobileNav.classList.remove('active');
      overlay.classList.remove('active');
      mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Close mobile menu if open
        mobileNav.classList.remove('active');
        overlay.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';

        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    // Animation on scroll
    const animateOnScroll = function() {
      const elements = document.querySelectorAll('.card, .testimonial, .contact-form');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }
      });
    };

    // Set initial state for animated elements
    document.querySelectorAll('.card, .testimonial, .contact-form').forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      element.style.transition = 'all 0.6s ease';
    });

    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);

    // Add glow effect to interactive elements on hover
document.querySelectorAll('.contact, .hero-cta, .social-icons a, .card, .testimonial, .contact-form button').forEach(element => {
  element.classList.add('glow-on-hover');
  
  // Add click effect to buttons
  element.addEventListener('mousedown', function() {
    this.style.transform = 'scale(0.95)';
    this.style.boxShadow = '0 0 10px rgba(0, 255, 204, 0.7)';
  });
  
  element.addEventListener('mouseup', function() {
    this.style.transform = 'scale(1)';
    this.style.boxShadow = '0 0 15px rgba(0, 255, 204, 0.5)';
  });
  
  element.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
    this.style.boxShadow = '0 0 15px rgba(0, 255, 204, 0)';
  });
});
      // Add click effect to buttons
      element.addEventListener('mousedown', function() {
        this.style.transform = 'scale(0.95)';
      });
      element.addEventListener('mouseup', function() {
        this.style.transform = 'scale(1)';
      });
      element.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
      });
    

    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const company = this.querySelector('input[type="text"]:nth-of-type(2)').value;
        const message = this.querySelector('textarea').value;
        
        // Simple validation
        if (!name || !email || !message) {
          alert('Please fill in all required fields');
          return;
        }
        
        // In a real application, you would send this data to a server
        console.log('Form submitted:', { name, email, company, message });
        
        // Show success message
        alert('Thank you for your message! We will contact you soon.');
        
        // Reset form
        this.reset();
      });
    }

    // Dynamic year in footer
    document.querySelector('.footer-bottom').innerHTML = `&copy; ${new Date().getFullYear()} CyberBots. All rights reserved. | <a href="#" style="color: #666; text-decoration: none;">Privacy Policy</a> | <a href="#" style="color: #666; text-decoration: none;">Terms of Service</a>`;

    // Intersection Observer for more performant animations
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe elements that should animate when scrolled into view
    document.querySelectorAll('.card, .testimonial, .contact-form').forEach(el => {
      observer.observe(el);
    });

    // Back to top button
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopButton.style.position = 'fixed';
    backToTopButton.style.bottom = '30px';
    backToTopButton.style.right = '30px';
    backToTopButton.style.width = '50px';
    backToTopButton.style.height = '50px';
    backToTopButton.style.borderRadius = '50%';
    backToTopButton.style.backgroundColor = '#00ffcc';
    backToTopButton.style.color = '#000';
    backToTopButton.style.border = 'none';
    backToTopButton.style.cursor = 'pointer';
    backToTopButton.style.display = 'none';
    backToTopButton.style.justifyContent = 'center';
    backToTopButton.style.alignItems = 'center';
    backToTopButton.style.transition = 'all 0.3s ease';
    backToTopButton.style.zIndex = '99';
    backToTopButton.classList.add('glow-on-hover');
    
    backToTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    
    document.body.appendChild(backToTopButton);
    
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'flex';
      } else {
        backToTopButton.style.display = 'none';
      }
    });

    // Theme switcher functionality (placeholder)
    const themeSwitcher = document.querySelector('.icon');
    if (themeSwitcher) {
      themeSwitcher.addEventListener('click', () => {
        // This would toggle between light/dark modes in a real implementation
        console.log('Theme switcher clicked - would toggle theme in full implementation');
      });
    }

    // Preload important resources
    function preloadResources() {
      const images = [];
      const fonts = [];
      
      // Preload critical images
      images.forEach(img => {
        const image = new Image();
        image.src = img;
      });
      
      // Preload fonts
      fonts.forEach(font => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = font;
        link.as = 'font';
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });
    }
    
    // Call preload after initial load
    window.addEventListener('load', preloadResources);