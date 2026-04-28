'use strict';

// Function to open the modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
    }
}

// Function to close the modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

// Click handler for shelf items
function setupShelfItemClickHandlers() {
    const shelfItems = document.querySelectorAll('.shelf-item');
    shelfItems.forEach(item => {
        item.addEventListener('click', () => {
            const modalId = item.dataset.modalId;
            openModal(modalId);
        });
    });
}

// Initialize the click handlers when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', setupShelfItemClickHandlers);

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target == modal) {
            closeModal(modal.id);
        }
    });
};