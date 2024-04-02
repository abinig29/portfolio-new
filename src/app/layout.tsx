import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer";
import ActiveSection from "@/context/activeSection";
import { Toaster } from "react-hot-toast";
import { siteConfig } from "@/config/site";


const popin = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300"],
  variable: "--font-popin",
});

// export const metadata: Metadata = {
//   title: "Abel's portfolio",
//   description: "it is latest portfolio",
// };
export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Portfolio",
    "React",
    "Nodejs",
  ],
  authors: [
    {
      name: "Abel nigus",
      url: siteConfig.url,
    },
  ],
  creator: "Abel Nigus",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: `${siteConfig.url}/portfolio.png`,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className="bg-gray-50 min-h-screen">
        <Toaster position='top-center' />
        <ActiveSection>
          {/* <div className="absolute hidden sm:block top-0 left-12 rounded-full w-[500px] h-[500px] bg-red-600/90  z-[-100]" /> */}
          {/* <div className="absolute hidden sm:block bottom-6 right-12 rounded-full w-[100px] h-[100px] bg-red-600/90  z-[-100]" /> */}
          {/* <div className="absolute hidden sm:block top-20 left-12 blur-3xl rounded-full w-[300px] h-[300px] bg-gray-200/20  z-[-100]" /> */}

          <Header />
          {children}
          <Footer />
        </ActiveSection>
      </body>
    </html>
  );
}
