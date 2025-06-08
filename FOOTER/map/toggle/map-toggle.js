document.addEventListener("DOMContentLoaded", function () {
  const toggleIcon = document.querySelector("#map-toggle-icon");
  const mapSection = document.querySelector(".footer-map-section");

  if (toggleIcon && mapSection) {
    mapSection.classList.remove("visible");
    toggleIcon.style.cursor = "pointer";

    toggleIcon.addEventListener("click", () => {
      const willShow = !mapSection.classList.contains("visible");
      mapSection.classList.toggle("visible");

      if (willShow) {
        setTimeout(() => {
          mapSection.scrollIntoView({ behavior: "smooth", block: "end" });
        }, 400);
      }
    });
  }
});
