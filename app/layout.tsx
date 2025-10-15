import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Product Management",
  icons: {
    icon: "public/futuristic-modern-techno-product-management-vector-logo-template_679601-173.jpg",
    shortcut: "public/futuristic-modern-techno-product-management-vector-logo-template_679601-173.jpg",
    apple: "public/futuristic-modern-techno-product-management-vector-logo-template_679601-173.jpg",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
