const modal = document.getElementById('myModal');
const openBtn = document.getElementById('openModal');
const closeBtn = document.querySelector('.close-modal');

// Open modal
openBtn.onclick = () => {
  modal.style.display = 'block';
};

// Close via close button
closeBtn.onclick = () => {
  modal.style.display = 'none';
};

// Close when clicking outside modal content
window.onclick = (event) => {
  if (event.target === modal && modal.style.display === 'block') {
    modal.style.display = 'none';
  }
};
