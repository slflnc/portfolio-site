import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Alfie Lancaster - Data Systems & Automation",
  description: "Digital Portfolio showcasing Data Systems & Automation work.",
  icons: {
    icon: "/icon.png", 
    shortcut: "/icon.png",
  },
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
     
      <body className={`${poppins.className} min-h-screen flex flex-col bg-mainblue antialiased`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}