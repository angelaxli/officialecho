import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";

// Configure the Inter font for body text
const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter', // CSS variable
  display: 'swap',
});

// Configure the Lora font for headings
const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora', // CSS variable
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Echo - Every Voice is a Legacy",
  description: "Record, preserve, and explore real stories, memories, and life wisdom.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${lora.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
