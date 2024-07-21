import { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => 
    // Load initial state from localStorage if available
    localStorage.getItem('dark-mode') === 'true' || false
  );

  useEffect(() => {
    // Apply dark mode class based on state
    document.documentElement.classList.toggle('dark', isDarkMode);
    // Save the dark mode preference in localStorage
    localStorage.setItem('dark-mode', isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="bg-gray-800 text-white p-2 rounded-lg shadow-md dark:bg-gray-200 dark:text-gray-800"
    >
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;
