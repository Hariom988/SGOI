import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
