//your JS code here. If required.
const modal = document.getElementById('myModal');
const openBtn = document.getElementById('openModal');
const closeBtn = document.querySelector('.close-modal');

// Open modal
openBtn.onclick = function() {
  modal.style.display = 'flex';
};

// Close modal when clicking the close button
closeBtn.onclick = function() {
  modal.style.display = 'none';
};

// Close modal when clicking outside the modal-content
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};
