document.addEventListener("DOMContentLoaded", function () {
  // Email validation and info reveal
  const submitButton = document.getElementById("submitButton");
  const emailInput = document.getElementById("Email");
  const emailError = document.getElementById("emailError");
  const signPanel = document.querySelector(".sign");
  const infoPanel = document.getElementById("Info");
  function isValidEmail(email) {
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/;
    return regex.test(email);
  }
  submitButton.addEventListener("click", function () {
    const value = emailInput.value.trim();
    emailInput.classList.remove("is-invalid");
    emailError.classList.add("d-none");
    if (isValidEmail(value)) {
      signPanel.classList.add("d-none");
      infoPanel.classList.remove("d-none");
    } else {
      emailInput.classList.add("is-invalid");
      emailError.classList.remove("d-none");
    }
  });
  // Toggle individual career cards
  const careerButtons = document.querySelectorAll(
    "#career .career-card .view-more-btn"
  );
  careerButtons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      const card = this.closest(".career-card");
      const isExpanded = card.classList.toggle("expanded");
      this.setAttribute("aria-expanded", isExpanded);
      this.textContent = isExpanded ? "View Less" : "View More";
    });
  });

  // Toggle project card details on click
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((card) => {
    card.addEventListener("click", function () {
      const details = this.querySelector(".project-details");
      if (details) {
        details.classList.toggle("d-none");
      }
    });
  });
});
