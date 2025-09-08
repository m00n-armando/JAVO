import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";
import Chatbot from "./components/Chatbot";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  style: "normal",
});

export const metadata: Metadata = {
  title: "JAVO - Java Volcano Odyssey",
  description: "Explore the beauty of Mount Ijen, Mount Bromo, and Tumpak Sewu Waterfall in East Java with JAVOTRIPS",
  openGraph: {
    images: "/favicon.png",
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
        <link rel="icon" href="/favicon.png" />
      </head>
      <body
        className={`${inter.className} aliased`}
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
