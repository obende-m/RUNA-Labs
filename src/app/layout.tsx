import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ShaderBackground from "@/components/ui/ShaderBackground";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "RUNA LABS | Engineering Intelligence",
    template: "%s | RUNA LABS",
  },
  description:
    "RUNA LABS — a premium software engineering firm architecting the neural substrate for modern governance and global commerce. Custom websites, AI solutions, e-commerce, and enterprise platforms.",
  keywords: [
    "RUNA LABS",
    "software engineering",
    "AI solutions",
    "enterprise platforms",
    "web development",
    "digital transformation",
  ],
  openGraph: {
    title: "RUNA LABS | Engineering Intelligence",
    description:
      "Architecting the neural substrate for modern governance and global commerce.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} dark`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col font-[var(--font-body)] text-[16px] leading-[24px]">
        <ShaderBackground />
        <Navbar />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
