import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";
import Chatbot from "./components/Chatbot";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JAVO - Java Volcano Odyssey",
  description: "Explore the beauty of Mount Ijen, Mount Bromo, and Tumpak Sewu Waterfall in East Java with JAVOTRIPS",
  openGraph: {
    images: "https://i.imgur.com/VMbrjBm.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://i.imgur.com/VMbrjBm.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          {children}
          <Chatbot />
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  );
}
