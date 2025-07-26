    
      // Animation on scroll for book cards
      document.addEventListener('DOMContentLoaded', function() {
        const bookCards = document.querySelectorAll('.book-card');
        
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        }, { threshold: 0.1 });

        bookCards.forEach(card => observer.observe(card));
      });
    