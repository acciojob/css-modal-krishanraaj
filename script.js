// Get modal elements
const modal = document.getElementById("myModal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.querySelector(".close-modal");
const modalContent = document.querySelector(".modal-content");

// Open modal when button is clicked
openBtn.addEventListener("click", function() {
  modal.style.display = "block";
});

// Close modal when close button (×) is clicked
closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

// Stop propagation on modal-content to prevent closing when clicking inside
modalContent.addEventListener("click", function(event) {
  event.stopPropagation();
});

// Close modal when clicking on modal overlay
modal.addEventListener("click", function() {
  modal.style.display = "none";
});