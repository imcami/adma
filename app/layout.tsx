import type { Metadata } from "next";
import localFont from "next/font/local";
import "../public/globals.css";

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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full bg-gray-50`}
      >
        {children}
      </body>
    </html>
  );
}
