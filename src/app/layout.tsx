import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Raleway } from "next/font/google";
import Footer from "@/components/footer";

const raleway = Raleway();

export const metadata: Metadata = {
  title: "Alex Owens",
  description: "Alex Owens Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${raleway.className}`}
      >
        <div className="min-h-screen flex flex-col items-center bg-black relative overflow-hidden">
          <Navbar />
          <main className="items-center w-full flex flex-col flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
