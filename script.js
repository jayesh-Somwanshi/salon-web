document.addEventListener('DOMContentLoaded', () => {
  // --- STICKY NAV BAR & BURGER MENU ---
  const header = document.querySelector('.main-header');
  const burgerMenu = document.querySelector('.burger-menu');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-links a');

  // Sticky scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  if (burgerMenu) {
    burgerMenu.addEventListener('click', () => {
      burgerMenu.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
  }

  // Click nav item close menu
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      burgerMenu.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });


  // --- SERVICES TABS SYSTEM ---
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;

      // Deactivate all
      tabButtons.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      // Activate active
      btn.classList.add('active');
      const activeContent = document.getElementById(target);
      if (activeContent) {
        activeContent.classList.add('active');
      }
    });
  });


  // --- PORTFOLIO GALLERY FILTERING & LIGHTBOX ---
  const filterButtons = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightboxModal');
  const lightboxImg = lightbox ? lightbox.querySelector('.lightbox-img') : null;
  const lightboxCaption = lightbox ? lightbox.querySelector('.lightbox-caption') : null;
  const lightboxClose = lightbox ? lightbox.querySelector('.lightbox-close') : null;

  // Filter Items
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Set active button
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.dataset.filter;

      galleryItems.forEach(item => {
        if (filterValue === 'all' || item.dataset.category === filterValue) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });

  // Open Lightbox Modal
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      if (!lightbox || !lightboxImg) return;
      const img = item.querySelector('.gallery-img');
      const title = item.querySelector('.gallery-overlay h4').textContent;
      const subtitle = item.querySelector('.gallery-overlay span').textContent;

      lightboxImg.src = img.src;
      if (lightboxCaption) {
        lightboxCaption.textContent = `${title} (${subtitle})`;
      }

      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden'; // Stop scroll
    });
  });

  // Close Lightbox Modal
  const closeLightbox = () => {
    if (!lightbox) return;
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto'; // Enable scroll
    if (lightboxImg) lightboxImg.src = '';
  };

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  if (lightbox) {
    // Close on dark overlay click
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    // Close on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
      }
    });
  }


  // --- TESTIMONIAL SLIDER ---
  const slides = document.querySelectorAll('.testimonial-slide');
  const dotsContainer = document.querySelector('.slider-dots');
  let currentSlideIndex = 0;
  let slideInterval;

  if (slides.length > 0) {
    // Create status dots
    slides.forEach((_, idx) => {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (idx === 0) dot.classList.add('active');
      dot.setAttribute('data-index', idx);
      dot.addEventListener('click', () => {
        goToSlide(idx);
        resetSlideTimer();
      });
      if (dotsContainer) dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    const goToSlide = (index) => {
      slides[currentSlideIndex].classList.remove('active');
      if (dots[currentSlideIndex]) dots[currentSlideIndex].classList.remove('active');

      currentSlideIndex = index;

      slides[currentSlideIndex].classList.add('active');
      if (dots[currentSlideIndex]) dots[currentSlideIndex].classList.add('active');
    };

    const nextSlide = () => {
      let nextIndex = currentSlideIndex + 1;
      if (nextIndex >= slides.length) nextIndex = 0;
      goToSlide(nextIndex);
    };

    const resetSlideTimer = () => {
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, 5000); // Auto change 5s
    };

    resetSlideTimer();
  }


  // --- CONTACT FORM SUBMISSION VALIDATION ---
  const contactForm = document.getElementById('salonContactForm');
  const formResponse = document.getElementById('formResponse');

  if (contactForm && formResponse) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Get values
      const name = document.getElementById('name').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const service = document.getElementById('service').value;
      const message = document.getElementById('message').value.trim();

      // Basic local check
      if (!name || !phone) {
        formResponse.className = 'form-response error';
        formResponse.textContent = 'Please fill out your Name and Contact mobile number.';
        return;
      }

      // Format response text to simulate successful save
      formResponse.className = 'form-response success';
      formResponse.textContent = `Thank you, ${name}! Your booking/inquiry request has been received. I will call you back shortly.`;
      
      // Clear inputs
      contactForm.reset();

      // Fade out toast after 6 seconds
      setTimeout(() => {
        formResponse.style.display = 'none';
        // Reset element style
        setTimeout(() => {
          formResponse.className = 'form-response';
          formResponse.style.display = '';
        }, 100);
      }, 6000);
    });
  }
});
