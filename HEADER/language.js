(function() {
  try {
    function applyLangClass() {
      const lang = /^\/tatouage(\/|$)/.test(window.location.pathname) ? "fr" : "en";
      document.body.classList.remove("lang-fr", "lang-en");
      document.body.classList.add(lang === "fr" ? "lang-fr" : "lang-en");
    }

    function applyLanguageLogic() {
      const lang = document.body.classList.contains("lang-fr") ? "fr" : "en";

      // Show/hide language-tagged links
      document.querySelectorAll('a[data-lang]').forEach(link => {
        const linkLang = link.getAttribute('data-lang');
        link.style.display = (linkLang === lang) ? '' : 'none';
      });

      // Update FAQ button if it exists
      const faqButton = document.querySelector('a.btn[href*="/faq"]');
      if (faqButton) {
        faqButton.textContent = "FAQ";
        faqButton.setAttribute("href", lang === "fr" ? "/tatouage/info/faq" : "/tattoo/info/faq");
      }

      // Add language switcher if not already there
      const currentPath = window.location.pathname.replace(/\/$/, "");
      const langMap = {
        "/tattoo": "/tatouage", "/tatouage": "/tattoo",
        "/tattoo/flash": "/tatouage/flash", "/tatouage/flash": "/tattoo/flash",
        "/tattoo/done": "/tatouage/faits", "/tatouage/faits": "/tattoo/done",
        "/tattoo/book": "/tatouage/rendez-vous", "/tatouage/rendez-vous": "/tattoo/book",
        "/tattoo/studio": "/tatouage/studio", "/tatouage/studio": "/tattoo/studio",
        "/tattoo/deals": "/tatouage/promotions", "/tatouage/promotions": "/tattoo/deals",
        "/tattoo/info": "/tatouage/info", "/tatouage/info": "/tattoo/info",
        "/tattoo/info/faq": "/tatouage/info/faq", "/tatouage/info/faq": "/tattoo/info/faq",
        "/tattoo/info/before-your-tattoo": "/tatouage/info/avant-votre-session",
        "/tatouage/info/avant-votre-session": "/tattoo/info/before-your-tattoo",
        "/tattoo/info/aftercare": "/tatouage/info/soins-apres-tatouage",
        "/tatouage/info/soins-apres-tatouage": "/tattoo/info/aftercare",
        "/tattoo/info/policies": "/tatouage/info/politiques",
        "/tatouage/info/politiques": "/tattoo/info/policies",
        "/tattoo/info/your-tattoo-appointment": "/tatouage/info/votre-rendez-vous-tatouage",
        "/tatouage/info/votre-rendez-vous-tatouage": "/tattoo/info/your-tattoo-appointment"
      };

      const altLangPath = langMap[currentPath];
      if (altLangPath && !document.querySelector(".language-switcher")) {
        const switcher = document.createElement("a");
        switcher.href = altLangPath;
        switcher.className = "language-switcher";
        switcher.innerHTML = `
          <svg class="globe-icon" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
          ${lang === "fr" ? "EN" : "FR"}
        `;

        const headerRight = document.querySelector(".header-actions--right");
        if (headerRight) headerRight.appendChild(switcher);

        const mobileNavList = document.querySelector(".header-menu-nav-list");
        if (mobileNavList) {
          const wrapper = document.createElement("div");
          wrapper.className = "header-menu-nav-item";

          const mobileSwitcher = switcher.cloneNode(true);
          mobileSwitcher.classList.add("header-menu-nav-link");
          mobileSwitcher.style.display = "block";
          mobileSwitcher.style.textAlign = "right";
          mobileSwitcher.style.padding = "1rem";

          wrapper.appendChild(mobileSwitcher);
          mobileNavList.appendChild(wrapper);
        }
      }
    }

    applyLangClass();
    applyLanguageLogic();

    const observer = new MutationObserver(applyLanguageLogic);
    observer.observe(document.body, { childList: true, subtree: true });

    if (window.Squarespace && window.Squarespace.onPageLoad) {
      window.Squarespace.onPageLoad(() => {
        applyLangClass();
        applyLanguageLogic();
      });
    }
  } catch (e) {
    console.error("Language script error:", e);
  }
})();