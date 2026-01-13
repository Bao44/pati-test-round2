import type { Metadata } from "next";
import { Nunito, Lora } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Sculptique",
  description: "A landing page clone project for Sculptique.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} ${lora.variable} mx-auto w-full max-w-7xl px-3`}
      >
        {children}
      </body>
    </html>
  );
}
