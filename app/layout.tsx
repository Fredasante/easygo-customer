import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/navbar/Header";
import Footer from "@/components/footer/Footer";
import VendorBanner from "@/components/register/VendorBanner";
import { Providers } from "./Provider";
import { Toaster } from "sonner";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Easygo",
  description: "Easygo is an e-commerce platform for buying and selling goods.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased`}>
        <Providers>
          <Header />
          {children}
          <Toaster visibleToasts={1} position="top-right" richColors />
          <VendorBanner />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
