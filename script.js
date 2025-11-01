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

// Prevent clicks on modal content from closing the modal
modalContent.addEventListener("click", function(event) {
  event.stopPropagation();
});

// Close modal when clicking on the modal overlay (outside modal-content)
modal.addEventListener("click", function(event) {
  modal.style.display = "none";
});