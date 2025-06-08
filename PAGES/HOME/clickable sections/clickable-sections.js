




  document.addEventListener("DOMContentLoaded", function() {
    const sectionLinks = {
      "682a74391a27b36a411230af": "https://mauvaisair.com/tattoo/flash",
      "682a754f76d2063b43c7fbec": "https://mauvaisair.com/tattoo/done",
      "682a76387ad16a394f493667": "https://mauvaisair.com/tattoo/deals",
      "682a775a35ff3c6736ad757f": "https://mauvaisair.com/tattoo/studio",
      "682a7862fb60290654a0fdcb": "https://mauvaisair.com/tattoo/info",
      "682ac0224251e93f91fe8c5b": "https://mauvaisair.com/tattoo/book"
    };

    const isMobile = window.innerWidth <= 768;
    const triggerY = window.innerHeight * 0.4; // 40% from top
    const activationThreshold = 200; // must be within 200px of trigger line
    const sections = [];

    Object.entries(sectionLinks).forEach(([id, url]) => {
      const section = document.querySelector(`[data-section-id="${id}"]`);
      if (!section) return;

      section.classList.add("clickable-section");
      section.style.cursor = 'pointer';
      section.addEventListener('click', () => window.location.href = url);
      if (isMobile) sections.push(section);
    });

    if (isMobile) {
      const handleScroll = () => {
        let closest = null;
        let closestDistance = Infinity;

        sections.forEach(section => {
          const rect = section.getBoundingClientRect();
          const sectionCenter = rect.top + rect.height / 2;

          // Skip if not visibly on screen
          if (rect.bottom < 0 || rect.top > window.innerHeight) return;

          const distance = Math.abs(sectionCenter - triggerY);
          if (distance < closestDistance && distance < activationThreshold) {
            closest = section;
            closestDistance = distance;
          }
        });

        sections.forEach(s => s.classList.remove('scroll-reveal'));
        if (closest) closest.classList.add('scroll-reveal');
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll(); // Initial check
    }
  });
