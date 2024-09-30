import type { Metadata } from "next";
import Header from "@/components/dashboard/header/page";
import Footer from "@/components/footer/page";
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
interface LayoutProps {
    readonly children: React.ReactNode
}

const DashboardLayout = ({ children }: LayoutProps) =>  {
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
export default DashboardLayout
