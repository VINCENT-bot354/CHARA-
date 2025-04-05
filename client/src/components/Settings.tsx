import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Settings as SettingsIcon } from 'lucide-react';

type Theme = 'light' | 'dark';
type FontSize = 'small' | 'medium' | 'large';

const Settings: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme');
    return (savedTheme as Theme) || 'light';
  });
  
  const [fontSize, setFontSize] = useState<FontSize>(() => {
    const savedFontSize = localStorage.getItem('fontSize');
    return (savedFontSize as FontSize) || 'medium';
  });

  // Update theme in DOM
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark-mode', theme === 'dark');
  }, [theme]);

  // Update font size in DOM
  useEffect(() => {
    localStorage.setItem('fontSize', fontSize);
    document.documentElement.setAttribute('data-font-size', fontSize);
  }, [fontSize]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const handleFontSizeChange = (value: string) => {
    setFontSize(value as FontSize);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <SettingsIcon className="h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="grid gap-2">
            <Label htmlFor="theme">Theme</Label>
            <div className="flex items-center gap-4">
              <Button
                variant={theme === 'light' ? 'default' : 'outline'}
                onClick={() => setTheme('light')}
                className="w-24"
              >
                Light
              </Button>
              <Button
                variant={theme === 'dark' ? 'default' : 'outline'}
                onClick={() => setTheme('dark')}
                className="w-24"
              >
                Dark
              </Button>
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="fontSize">Font Size</Label>
            <RadioGroup 
              value={fontSize} 
              onValueChange={handleFontSizeChange}
              className="flex gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="small" id="small" />
                <Label htmlFor="small">Small</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="medium" id="medium" />
                <Label htmlFor="medium">Medium</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="large" id="large" />
                <Label htmlFor="large">Large</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Settings;