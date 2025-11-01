export const metadata = {
  title: "Image Prompt: Private Jet over Old Japanese Village",
  description: "Copy-ready, production-quality prompt for image generation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/globals.css" />
        {children}
      </body>
    </html>
  );
}
