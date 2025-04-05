import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark';
type FontSize = 'small' | 'medium' | 'large';

interface SettingsContextType {
  theme: Theme;
  fontSize: FontSize;
  toggleTheme: () => void;
  setFontSize: (size: FontSize) => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize from localStorage or use defaults
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme');
    return (savedTheme as Theme) || 'light';
  });
  
  const [fontSize, setFontSize] = useState<FontSize>(() => {
    const savedFontSize = localStorage.getItem('fontSize');
    return (savedFontSize as FontSize) || 'medium';
  });

  // Update localStorage when settings change
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark-mode', theme === 'dark');
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('fontSize', fontSize);
    document.documentElement.setAttribute('data-font-size', fontSize);
  }, [fontSize]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <SettingsContext.Provider value={{ 
      theme, 
      fontSize, 
      toggleTheme, 
      setFontSize 
    }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = (): SettingsContextType => {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};