/*-*-*-*-*-*-*-*-*-*-*-*-*-*-* BACK TO TOP BUTTON *-*-*-*-*-*-*-*-*-*-*-*-*-*-*/

/*                    back-to-top.html     back-to-top.css                    */



document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("back-to-top");

  window.addEventListener("scroll", () => {
    btn.classList.toggle("hidden", window.scrollY <= 300);
  });

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
