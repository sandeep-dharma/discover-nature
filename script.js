// Function to scroll to the Cards section when the 'Learn More' button is clicked.
function scrollToCards() {
  // Get the element representing the cards section using its ID("cards-content).
  const cardsContent = document.getElementById("cards-content");
  // Scroll the cards section into view with smooth scrolling and aligned to the start of the viewport.
  cardsContent.scrollIntoView({
    block: "start", // To align the top of the cards section to the top of the viewport.
    behavior: "smooth", // To ensure the scroll is smooth.
  });
}

// Function to scroll to the top of the page
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Detect scroll position and show the Page Up button when near the footer
window.addEventListener("scroll", function () {
  const footer = document.querySelector(".footer-section");
  const pageUpButton = document.querySelector(".page-up-button");
  // Get the position of the footer relative to the viewport
  const footerPosition = footer.getBoundingClientRect().top;
  // If the footer is in view (less than 500px from the bottom of the viewport)
  if (footerPosition <= window.innerHeight) {
    pageUpButton.classList.add("visible"); // Show the Page Up button
  } else {
    pageUpButton.classList.remove("visible"); // Hide the Page Up button
  }
});
