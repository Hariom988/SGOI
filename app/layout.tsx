import type { Metadata } from "next";
import "./globals.css";
<<<<<<< HEAD
import Navbar from "./components/navBar";
import Footer from "./components/footer";
import favicon from "@/public/favicon.ico";
=======

>>>>>>> dashboard
export const metadata: Metadata = {
  title: "SGOI | Home",
  description: "Aluminium Foil / Butter Paper Jumbo Rolls Manufacturer",
  icons: {
<<<<<<< HEAD
    icon: [
      {
        url: "/favicon.ico",
        href: "/favicon.ico",
      },
    ],
=======
    icon: [{ url: "/favicon.ico", href: "/favicon.ico" }],
>>>>>>> dashboard
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
=======
      <body>{children}</body>
>>>>>>> dashboard
    </html>
  );
}
