import type { Metadata } from "next";
import "@/app/globals.css";
import Navbar from "@/app/components/navBar";
import Footer from "@/app/components/footer";

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
