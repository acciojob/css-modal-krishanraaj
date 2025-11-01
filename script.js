// Get modal element
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

// Close modal when clicking outside of modal content
modal.addEventListener("click", function(event) {
  // Only close if the click is directly on the modal overlay, not on modal-content
  if (event.target === modal) {
    modal.style.display = "none";
  }
});