// theme-toggle.js

// Get the theme toggle checkbox
const themeToggle = document.getElementById('theme-toggle');

// Check for saved theme in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.body.classList.add(savedTheme);
  themeToggle.checked = savedTheme === 'dark-theme';
}

// Add event listener to toggle theme
themeToggle.addEventListener('change', () => {
  if (themeToggle.checked) {
    document.body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light-theme');
  }
});
