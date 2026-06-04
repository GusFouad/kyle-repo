import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Login | MyApp",
  description: "Secure login page with JWT authentication",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

