import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kyle — Developer, Creator & Problem Solver",
  description:
    "Personal landing page for Kyle — a passionate developer and creative thinker building meaningful digital experiences.",
  openGraph: {
    title: "Kyle — Developer, Creator & Problem Solver",
    description:
      "Explore Kyle's work, skills, and story. Building the future one line of code at a time.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}

