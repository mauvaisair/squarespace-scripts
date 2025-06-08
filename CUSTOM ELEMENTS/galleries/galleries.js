
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.custom-gallery').forEach(gallery => {
      const slides = gallery.querySelectorAll('.gallery-slide');
      let currentIndex = 0;

      const showSlide = i => {
        slides.forEach((slide, j) => {
          slide.classList.toggle('active', j === i);
        });
      };

      const nextSlide = () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
      };

      gallery.querySelector('.gallery-arrow.left')?.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
      });

      gallery.querySelector('.gallery-arrow.right')?.addEventListener('click', () => {
        nextSlide();
      });

      showSlide(currentIndex);
      setInterval(nextSlide, 5000);
    });
  });
