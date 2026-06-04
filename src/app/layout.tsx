import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kyle | Full-Stack Developer",
  description: "Personal about me page — Full-Stack Developer & Designer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-white antialiased font-sans">{children}</body>
    </html>
  );
}

