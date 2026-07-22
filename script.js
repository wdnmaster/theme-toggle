const themeButton = document.querySelector('#theme-toggle-btn');
const bodyElement = document.querySelector('body');

themeButton.addEventListener('click', () => {
  bodyElement.classList.toggle('dark-mode');

  const isDarkMode = bodyElement.classList.contains('dark-mode');

  if (isDarkMode) {
    themeButton.textContent = 'Switch to Light Mode';
  } else {
    themeButton.textContent = 'Switch to Dark Mode';
  }
});