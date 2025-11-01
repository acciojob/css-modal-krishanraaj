const modal = document.getElementById('myModal');
const openBtn = document.getElementById('openModal');
const closeBtn = document.querySelector('.close-modal');

// Open modal
openBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

// Close when clicking on X
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// ✅ Close when clicking outside modal-content (Cypress safe)
window.addEventListener('click', (event) => {
  if (event.target.classList.contains('modal')) {
    modal.style.display = 'none';
  }
});
