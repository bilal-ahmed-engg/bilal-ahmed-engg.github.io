import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bilal Ahmed Siddique | Full Stack Developer",
  description: "Results-driven Full Stack Node.js Developer portfolio featuring interactive 3D elements and project details.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${firaCode.variable} antialiased bg-black text-gray-200 selection:bg-neon-blue/40 selection:text-white transition-colors duration-500`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
