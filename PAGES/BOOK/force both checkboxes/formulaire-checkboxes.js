
document.addEventListener("DOMContentLoaded", function () {
  if (!window.location.pathname.startsWith("/tatouage/")) return;

  const observer = new MutationObserver(() => {
    const checkboxes = document.querySelectorAll(
      'input[type="checkbox"][value="J\'ai lu et je comprends les politiques du studio"], input[type="checkbox"][value="Je comprends qu\'un dépôt de 20$ sera requis pour confirmer mon rendez-vous ou réserver mon flash"]'
    );

    const submitButton = document.querySelector('form button[type="submit"]');

    if (checkboxes.length === 2 && submitButton) {
      const fieldset = checkboxes[0].closest("fieldset");
      const titleDiv = fieldset.querySelector(".title");

      // Clean up previous listener just in case
      submitButton.addEventListener("click", function (e) {
        const allChecked = Array.from(checkboxes).every(cb => cb.checked);
        let errorEl = fieldset.querySelector("#policy-error");

        if (!allChecked) {
          e.preventDefault();

          if (!errorEl) {
            errorEl = document.createElement("p");
            errorEl.className = "form-field-error";
            errorEl.id = "policy-error";
            titleDiv.insertAdjacentElement("afterend", errorEl);
          }

          errorEl.textContent = "Requis";
        } else if (errorEl) {
          errorEl.remove();
        }
      });

      // Optional: live feedback
      checkboxes.forEach(cb => {
        cb.addEventListener("change", () => {
          const allChecked = Array.from(checkboxes).every(cb => cb.checked);
          const errorEl = fieldset.querySelector("#policy-error");
          if (allChecked && errorEl) {
            errorEl.remove();
          }
        });
      });
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
});
