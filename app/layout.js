import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
export const metadata = {
  title: "Frontend Test",
  description: "Challenge Technique",
};

import { NavigationBar } from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className="bg-light">
        <ThemeProvider>
          <NavigationBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
