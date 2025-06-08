document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  if (!header) return;

  const updateLogo = () => {
    const isDarkHeader = header.classList.contains("bright-inverse");

    // Determine current language from path
    const lang = /^\/tatouage(\/|$)/.test(window.location.pathname) ? "fr" : "en";
    const homepageHref = lang === "fr" ? "/tatouage" : "/tattoo";

    // Update logo image and link
    const logos = document.querySelectorAll('img[alt="MAUVAISAIR"]');
    logos.forEach((logo) => {
      logo.src = isDarkHeader
        ? "https://images.squarespace-cdn.com/content/65a936b90ca5da4a763ea868/0ff37783-d106-4fb3-be10-61f54bdebb98/MAUVAISAIR+TATTOO+STUDIO+IN+CHIBOUGAMAU+-+LOGO+-+FULL+WHITE.png?content-type=image%2Fpng"
        : "https://images.squarespace-cdn.com/content/65a936b90ca5da4a763ea868/33fbf982-98c0-40d8-855a-444a36bbbff5/MAUVAISAIR+TATTOO+STUDIO+IN+CHIBOUGAMAU+-+LOGO+-+FULL+BLACK.png?content-type=image%2Fpng";

      const logoLink = logo.closest("a");
      if (logoLink && logoLink.getAttribute("href") !== homepageHref) {
        logoLink.setAttribute("href", homepageHref);
      }
    });
  };

  // Observe header changes (theme & AJAX loads)
  const observer = new MutationObserver(updateLogo);
  observer.observe(header, {
    attributes: true,
    attributeFilter: ["class"],
    childList: true,
    subtree: true
  });

  // Run immediately
  updateLogo();

  // Also run on AJAX page transitions
  if (window.Squarespace && window.Squarespace.onPageLoad) {
    window.Squarespace.onPageLoad(updateLogo);
  }
});
