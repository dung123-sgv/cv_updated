/*
  Custom JavaScript to add interactivity to the CV webpage.

  1. Reveals contact details (phone, email, etc.) only when a visitor
     submits a valid email address.  This demonstrates input validation
     with a simple regular expression.
  2. Allows the user to hide or show the entire career section via a
     toggle button.
  3. Expands and collapses project descriptions when project cards are
     clicked (project chapter feature).
*/

document.addEventListener("DOMContentLoaded", () => {
  // Elements for email validation and personal info reveal
  const submitButton = document.getElementById("submitButton");
  const emailInput = document.getElementById("Email");
  const emailError = document.getElementById("emailError");
  const signPanel = document.querySelector(".sign");
  const infoPanel = document.getElementById("Info");

  // Regular expression to validate an email address
  function isValidEmail(email) {
    // Matches most common email formats (username@domain.ext)
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/;
    return regex.test(email);
  }

  // When the visitor clicks the submit button, validate the email
  submitButton.addEventListener("click", () => {
    const value = emailInput.value.trim();
    // Remove previous error state, if any
    emailInput.classList.remove("is-invalid");
    emailError.classList.add("d-none");
    // Check for a valid email address
    if (isValidEmail(value)) {
      // Hide the sign‑in form and reveal the personal information
      signPanel.classList.add("d-none");
      infoPanel.classList.remove("d-none");
    } else {
      // Mark the input as invalid and show an error message
      emailInput.classList.add("is-invalid");
      emailError.classList.remove("d-none");
    }
  });

  // Toggle visibility of the career details section
  const toggleCareerBtn = document.getElementById("toggle-career-btn");
  const careerDetails = document.getElementById("career-details");
  toggleCareerBtn.addEventListener("click", () => {
    // Toggle the 'd-none' class to hide/show the details
    careerDetails.classList.toggle("d-none");
    // Update button text to reflect the new state
    if (careerDetails.classList.contains("d-none")) {
      toggleCareerBtn.textContent = "Hiển thị thông tin nghề nghiệp";
    } else {
      toggleCareerBtn.textContent = "Ẩn/Hiện thông tin nghề nghiệp";
    }
  });

  // Toggle project details on card click
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((card) => {
    card.addEventListener("click", () => {
      const details = card.querySelector(".project-details");
      if (details) {
        details.classList.toggle("d-none");
      }
    });
  });
});

//Hiển thị thay đổi view less - view more khi nhấn nút để mở rộng cửa sổ
document.addEventListener("DOMContentLoaded", function () {
  const titles = document.querySelectorAll("#viewMoreBtn");

  titles.forEach((title) => {
    title.addEventListener("click", function () {
      const button = this;
      if (button.getAttribute("aria-expanded") === "true") {
        button.textContent = "View Less";
      } else {
        button.textContent = "View More";
      }
    });
  });
});
