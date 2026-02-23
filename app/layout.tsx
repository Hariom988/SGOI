import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SGOI | Home",
  description: "Aluminium Foil / Butter Paper Jumbo Rolls Manufacturer",
  icons: {
    icon: [{ url: "/favicon.ico", href: "/favicon.ico" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
