import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sign In – MyApp",
  description: "Sign in to your MyApp account"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

