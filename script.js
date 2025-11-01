// Get modal element
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

// Close modal when clicking outside of modal content
modal.addEventListener("click", function(event) {
  // Check if click is on modal overlay (not on modal-content or its children)
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Additional handler to ensure clicks outside modal-content close the modal
window.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});