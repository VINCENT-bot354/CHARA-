import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add custom styles that match the design reference
const style = document.createElement('style');
style.textContent = `
  :root {
    --primary: 33 60% 36%;
    --secondary: 46 68% 52%;
    --accent: 120 100% 20%;
    --background: 0 0% 96%;
    --foreground: 0 0% 20%;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background-color: hsl(var(--background));
    color: hsl(var(--foreground));
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', serif;
  }
`;
document.head.appendChild(style);

createRoot(document.getElementById("root")!).render(<App />);
