const modal = document.getElementById('myModal');
const openBtn = document.getElementById('openModal');
const closeBtn = document.querySelector('.close-modal');

// Open modal
openBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

// Close modal using close button
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal when clicking outside the content box
modal.addEventListener('click', (event) => {
  // if the clicked element is the modal background itself
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
