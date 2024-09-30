
import type { Metadata } from "next";
import localFont from "next/font/local";
import "../public/globals.css";
import { NextUIProvider } from '@nextui-org/system';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ADMA | Professional Real Estate Photography in Bavaro, Punta Cana",
  description: "Fotos y videos profesionales para inmuebles, airbnb y hoteles.",
  openGraph: {
    title: "ADMA | Real Estate Photography",
    description: "Fotos y videos profesionales para inmuebles, airbnb y hoteles.",
    type: "website",
    url: "https://www.adma.com",
    siteName: "ADMA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <html lang="en" className="bg-gray-50">
        <NextUIProvider>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        {children}
      </body> </NextUIProvider>
    </html>
   
    
  );
}
