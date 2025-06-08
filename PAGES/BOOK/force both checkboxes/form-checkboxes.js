
document.addEventListener("DOMContentLoaded", function () {
  if (!window.location.pathname.startsWith("/tattoo/")) return;

  const observer = new MutationObserver(() => {
    const checkboxes = document.querySelectorAll(
      'input[type="checkbox"][value="I have read and understand the studio policies"], input[type="checkbox"][value="I understand that a 20$ deposit will be required to confirm my appointment or claim a flash"]'
    );

    const submitButton = document.querySelector('form button[type="submit"]');

    if (checkboxes.length === 2 && submitButton) {
      const fieldset = checkboxes[0].closest("fieldset");
      const titleDiv = fieldset.querySelector(".title");

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

          errorEl.textContent = "Required";
        } else if (errorEl) {
          errorEl.remove();
        }
      });

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
