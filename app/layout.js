import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
export const metadata = {
  title: "Frontend Test",
  description: "Challenge Technique",
};

import { NavigationBar } from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import HeroSection from "./components/HeroSection.jsx";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <style>
          
        </style>
      </head>
      <body className="bg-light">
        <div className="circle-1"></div>
        <div className="circle-2"></div>
        <ThemeProvider>
          <NavigationBar />
          <div className="mb-5 ">
                     <HeroSection />
                  </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
