import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navBar";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "SGOI",
  description: "Aluminium Foil / Butter Paper Jumbo Rolls Manufacturer",
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
