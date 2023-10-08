import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer";
import ActiveSection from "@/context/activeSection";

const popin = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300"],
  variable: "--font-popin",
});

export const metadata: Metadata = {
  title: "Abel's portfolio",
  description: "it is latest portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className="bg-gray-50 min-h-screen">
        <ActiveSection>
          <div className="fixed top-20 left-32 rounded-full w-[500px] h-[500px] bg-red-600/20 blur-3xl z-[-100]" />
          <Header />
          {children}
          <Footer />
        </ActiveSection>
      </body>
    </html>
  );
}
