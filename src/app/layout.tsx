import type { Metadata } from "next";
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s - MindCanvas",
    default: "MindCanvas",
  },
  description: "",
  keywords: [
    "",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}> 
      <Header />
        <div className="flex flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
