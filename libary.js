
// Animation on scroll
document.addEventListener('DOMContentLoaded', function() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(element => observer.observe(element));
});


// gsap

var tl= gsap.timeline()

tl.from("h2",{
    y:-20,
    opacity:0,
    duration:1,
    delay:0.1
})


tl.from(" #part2 h3",{
    y:-20,
    opacity:0,
    duration:1,
    stagger:0.3,
    delay:0.1,
    scale:0.1
})



