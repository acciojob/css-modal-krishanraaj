const modal = document.getElementById("myModal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.querySelector(".close-modal");

// Open modal
openBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

// Close modal when clicking on close button
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when clicking outside of modal-content
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
