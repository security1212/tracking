// Authentication credentials
const VALID_USERNAME = 'babatunde20';
const VALID_PASSWORD = 'babatunde@20';

// DOM Elements
const loginModal = document.getElementById('loginModal');
const adminPanel = document.getElementById('adminPanel');
const searchIcon = document.querySelector('.user-icon');
const loginBtn = document.getElementById('loginBtn');
const closeModal = document.getElementById('closeModal');
const closeAdmin = document.getElementById('closeAdmin');
const saveChanges = document.getElementById('saveChanges');

// Load saved data from localStorage on page load
document.addEventListener('DOMContentLoaded', () => {
  loadSavedData();
  loadSavedImage();
});

// Show login modal when search icon is clicked
searchIcon.addEventListener('click', () => {
  loginModal.style.display = 'block';
});

// Close login modal
closeModal.addEventListener('click', () => {
  loginModal.style.display = 'none';
});

// Close admin panel
closeAdmin.addEventListener('click', () => {
  adminPanel.style.display = 'none';
});

// Handle login
loginBtn.addEventListener('click', () => {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === VALID_USERNAME && password === VALID_PASSWORD) {
    loginModal.style.display = 'none';
    adminPanel.style.display = 'block';
    // Clear login form
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    // Load current values into admin inputs
    loadCurrentValuesIntoAdmin();
  } else {
    alert('Invalid credentials. Please try again.');
  }
});

// Load current values into admin panel inputs
function loadCurrentValuesIntoAdmin() {
  document.getElementById('adminDay').value = document.getElementById('displayDay').textContent;
  document.getElementById('adminTime').value = document.getElementById('displayTime').textContent;
  document.getElementById('adminEstimateStart').value = document.getElementById('displayEstimateStart').textContent;
  document.getElementById('adminEstimateEnd').value = document.getElementById('displayEstimateEnd').textContent;
  document.getElementById('fromLocation').value = document.getElementById('displayFromLocation').textContent;
  document.getElementById('fromDate').value = document.getElementById('displayFromDate').textContent;
  document.getElementById('currentLocation').value = document.getElementById('displayCurrentLocation').textContent;
  document.getElementById('currentDate').value = document.getElementById('displayCurrentDate').textContent;
  document.getElementById('toLocation').value = document.getElementById('displayToLocation').textContent;
  document.getElementById('toDate').value = document.getElementById('displayToDate').textContent;
}

// Handle image upload with preview
document.getElementById('packageImage').addEventListener('change', function(e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const imageData = e.target.result;
      
      // Preview image in admin panel
      const preview = document.getElementById('imagePreview');
      preview.innerHTML = `<img src="${imageData}" alt="Package">`;
      
      // Update image in main interface
      const display = document.getElementById('packageImageDisplay');
      display.innerHTML = `<img src="${imageData}" alt="Package">`;

      // Save image to localStorage
      localStorage.setItem('packageImage', imageData);
    };
    reader.readAsDataURL(file);
  }
});

// Load saved image on page load
function loadSavedImage() {
  const savedImage = localStorage.getItem('packageImage');
  if (savedImage) {
    const preview = document.getElementById('imagePreview');
    const display = document.getElementById('packageImageDisplay');
    preview.innerHTML = `<img src="${savedImage}" alt="Package">`;
    display.innerHTML = `<img src="${savedImage}" alt="Package">`;
  }
}

// Save changes from admin panel
saveChanges.addEventListener('click', () => {
  const data = {
    day: document.getElementById('adminDay').value,
    time: document.getElementById('adminTime').value,
    estimateStart: document.getElementById('adminEstimateStart').value,
    estimateEnd: document.getElementById('adminEstimateEnd').value,
    fromLocation: document.getElementById('fromLocation').value,
    fromDate: document.getElementById('fromDate').value,
    currentLocation: document.getElementById('currentLocation').value,
    currentDate: document.getElementById('currentDate').value,
    toLocation: document.getElementById('toLocation').value,
    toDate: document.getElementById('toDate').value
  };

  // Update display and save to localStorage
  updateDisplay(data);
  localStorage.setItem('trackingData', JSON.stringify(data));

  // Show success message and close admin panel
  alert('Changes saved successfully!');
  adminPanel.style.display = 'none';
});

// Update display with new data
function updateDisplay(data) {
  document.getElementById('displayDay').textContent = data.day || document.getElementById('displayDay').textContent;
  document.getElementById('displayTime').textContent = data.time || document.getElementById('displayTime').textContent;
  document.getElementById('displayEstimateStart').textContent = data.estimateStart || document.getElementById('displayEstimateStart').textContent;
  document.getElementById('displayEstimateEnd').textContent = data.estimateEnd || document.getElementById('displayEstimateEnd').textContent;
  document.getElementById('displayFromLocation').textContent = data.fromLocation || document.getElementById('displayFromLocation').textContent;
  document.getElementById('displayFromDate').textContent = data.fromDate || document.getElementById('displayFromDate').textContent;
  document.getElementById('displayCurrentLocation').textContent = data.currentLocation || document.getElementById('displayCurrentLocation').textContent;
  document.getElementById('displayCurrentDate').textContent = data.currentDate || document.getElementById('displayCurrentDate').textContent;
  document.getElementById('displayToLocation').textContent = data.toLocation || document.getElementById('displayToLocation').textContent;
  document.getElementById('displayToDate').textContent = data.toDate || document.getElementById('displayToDate').textContent;
}

// Load saved data from localStorage
function loadSavedData() {
  const savedData = localStorage.getItem('trackingData');
  if (savedData) {
    const data = JSON.parse(savedData);
    updateDisplay(data);
  }
}

// Email form submission
document.querySelector('.submit-btn').addEventListener('click', function() {
  const email = document.getElementById('emailInput').value;
  if (email) {
    alert('Thank you! You will receive updates about this shipment.');
    document.getElementById('emailInput').value = '';
  } else {
    alert('Please enter a valid email address.');
  }
});

// Copy tracking number with animation
document.querySelector('.copy-btn').addEventListener('click', function() {
  const trackingNumber = '123456789';
  navigator.clipboard.writeText(trackingNumber).then(() => {
    this.style.transform = 'scale(1.2)';
    setTimeout(() => {
      this.style.transform = 'scale(1)';
    }, 200);
    alert('Tracking number copied to clipboard!');
  });
});

// Toggle delivery options with animation
document.querySelector('.options-btn').addEventListener('click', function() {
  const arrow = this.querySelector('.arrow');
  arrow.style.transition = 'transform 0.3s ease';
  
  if (arrow.textContent === '▼') {
    arrow.style.transform = 'rotate(180deg)';
    arrow.textContent = '▲';
  } else {
    arrow.style.transform = 'rotate(0deg)';
    arrow.textContent = '▼';
  }
});