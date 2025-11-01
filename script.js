// Get modal elements
const modal = document.getElementById("myModal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.querySelector(".close-modal");

// Open modal when button is clicked
openBtn.addEventListener("click", function() {
  modal.style.display = "block";
});

// Close modal when close button (×) is clicked
closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

// Close modal when clicking anywhere on the modal element
modal.addEventListener("click", function(event) {
  // Only close if clicking directly on the modal background, not its children
  if (event.target.classList.contains("modal")) {
    modal.style.display = "none";
  }
});