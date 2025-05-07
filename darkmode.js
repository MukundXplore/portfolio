const darkModeToggle = document.getElementById('toggle-dark-mode');

// Check local storage for dark mode preference
const savedDarkMode = localStorage.getItem('darkMode');
if (savedDarkMode === 'enabled') {
        document.body.classList.add('dark-mode');
        darkModeToggle.src = 'light_mode.png';
}

// Toggle dark mode and save preference to local storage
darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        darkModeToggle.src = document.body.classList.contains('dark-mode') 
                ? 'light_mode.png' 
                : 'dark_mode.png';

        if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('darkMode', 'enabled');
        } else {
                localStorage.setItem('darkMode', 'disabled');
        }
});      
        
