import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import AppBar from "./components/AppBar";
import Footer from "./components/Footer";

const futura = localFont({
  src: "./fonts/Futura.ttf",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Bethive AI",
  description: "Smarter Football Betting with AI Precision",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${futura.className} antialiased`}>
        <AppBar />
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: "#333",
              color: "#fff",
            },
          }}
        />
        <main
          className="flex flex-col items-center"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#4A5568 #2D3748",
          }}
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
