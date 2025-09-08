import type { Metadata } from "next";
import { GeistSans, GeistMono } from "geist/font";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";
import Chatbot from "./components/Chatbot";
import { Analytics } from "@vercel/analytics/next";

const geistSans = GeistSans;

const geistMono = GeistMono;

export const metadata: Metadata = {
  title: "JAVO - Java Volcano Odyssey",
  description: "Explore the beauty of Mount Ijen, Mount Bromo, and Tumpak Sewu Waterfall in East Java with JAVOTRIPS",
  icons: {
    icon: "/favicon.png",
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
