  // Function to open the modal
  function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('hidden');
  }

  // Function to close the modal
  function closeModal(modal) {
    modal.classList.add('hidden');
  }

  // Add click events to images
  document.getElementById('image1').onclick = function() {
    openModal('modal1');
  }
  document.getElementById('image2').onclick = function() {
    openModal('modal2');
  }
  document.getElementById('image3').onclick = function() {
    openModal('modal3');
  }
  document.getElementById('image4').onclick = function() {
    openModal('modal4');
  }
  document.getElementById('image29').onclick = function() {
    openModal('modal29');
  }


  // Add close functionality to all modal close buttons
  const closeButtons = document.querySelectorAll('.close-modal');
  closeButtons.forEach(button => {
    button.onclick = function() {
      const modal = button.closest('.fixed');
      closeModal(modal);
    }
  });

  // Optional: Close modal if user clicks outside the modal content
  window.onclick = function(event) {
    const modals = document.querySelectorAll('.fixed');
    modals.forEach(modal => {
      if (event.target == modal) {
        closeModal(modal);
      }
    });
  }