const modal = document.getElementById('myModal');
const openBtn = document.getElementById('openModal');
const closeBtn = document.querySelector('.close-modal');

// Open modal
openBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

// Close via close button
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close when clicking outside modal-content
document.addEventListener('click', (event) => {
  const modalContent = document.querySelector('.modal-content');
  // If modal is open and the click is not inside modal-content or open button
  if (
    modal.style.display === 'block' &&
    !modalContent.contains(event.target) &&
    event.target !== openBtn
  ) {
    modal.style.display = 'none';
  }
});
