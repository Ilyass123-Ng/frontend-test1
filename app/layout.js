import "./globals.css";

export const metadata = {
  title: "Frontend Test",
  description: "Challenge Technique",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}
