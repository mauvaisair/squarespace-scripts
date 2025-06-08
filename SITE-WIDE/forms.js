document.addEventListener("DOMContentLoaded", function () {
  function commonFormTweaks() {
    // Replace (required) with *
    document.querySelectorAll('.description.required').forEach(el => {
      if (el.textContent.trim() === "(required)") {
        el.textContent = "*";
      }
    });
  }

  function translateFrenchFormElements() {
    document.querySelectorAll('.caption-text').forEach(el => {
      if (el.textContent.trim() === "First Name") el.textContent = "Prénom";
      if (el.textContent.trim() === "Last Name") el.textContent = "Nom de famille";
    });

    document.querySelectorAll('select').forEach(select => {
      const firstOption = select.querySelector('option');
      if (firstOption && firstOption.textContent.trim() === "Select an option") {
        firstOption.textContent = "Choisir une option";
      }
    });

    document.querySelectorAll('span.fs-unmask').forEach(el => {
      if (el.textContent.trim() === "Add a File") {
        el.textContent = "Joindre une image";
      }
    });

    document.querySelectorAll('.form-field-error').forEach(el => {
      if (el.innerHTML.includes("Form submission failed")) {
        el.innerHTML = "L'envoi du formulaire a échoué. Veuillez remplir tous les champs marqués *";
      }
    });

    document.querySelectorAll('p.form-field-error').forEach(el => {
      if (el.textContent.trim().toLowerCase().includes("is required")) {
        el.textContent = "Requis";
      }
    });
  }

  function translateEnglishFormElements() {
    document.querySelectorAll('.form-field-error').forEach(el => {
      if (el.innerHTML.includes("Form submission failed")) {
        el.innerHTML = "The form submission has failed. Please fill out all fields marked with *";
      }
    });

    document.querySelectorAll('p.form-field-error').forEach(el => {
      if (el.textContent.trim().toLowerCase().includes("is required")) {
        el.textContent = "Required";
      }
    });
  }

  // Init logic
  commonFormTweaks();
  if (window.location.pathname.startsWith("/tatouage/")) {
    translateFrenchFormElements();
  } else if (window.location.pathname.startsWith("/tattoo/")) {
    translateEnglishFormElements();
  }

  const observer = new MutationObserver(() => {
    commonFormTweaks();
    if (window.location.pathname.startsWith("/tatouage/")) {
      translateFrenchFormElements();
    } else if (window.location.pathname.startsWith("/tattoo/")) {
      translateEnglishFormElements();
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
});
