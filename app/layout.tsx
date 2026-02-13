import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navBar";
import Footer from "./components/footer";
import favicon from "@/public/favicon.ico";
export const metadata: Metadata = {
  title: "SGOI | Home",
  description: "Aluminium Foil / Butter Paper Jumbo Rolls Manufacturer",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        href: "/favicon.ico",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
