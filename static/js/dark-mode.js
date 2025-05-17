// Dark mode toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.querySelector('.theme-toggle');
  
  // Check for saved theme preference or use OS preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('theme');
  
  // If we have a saved theme, use that. Otherwise, use the OS preference
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  } else {
    const initialTheme = prefersDark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', initialTheme);
    localStorage.setItem('theme', initialTheme);
  }
  
  // Listen for toggle click
  themeToggle.addEventListener('click', function() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
}); 