import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "About Me | Alex Rivera",
  description: "Personal about me page for Alex Rivera — Full-Stack Developer & Designer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-white antialiased">{children}</body>
    </html>
  );
}

