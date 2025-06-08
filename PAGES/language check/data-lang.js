
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a[href="/tattoo"]').forEach(link => {
      link.setAttribute("data-lang", "en");
    });
    document.querySelectorAll('a[href="/tatouage"]').forEach(link => {
      link.setAttribute("data-lang", "fr");
    });
  });