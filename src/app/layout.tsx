import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rupsha Debnath | AI & Machine Learning Portfolio",
  description:
    "AI and Machine Learning student focused on Explainable AI, Healthcare AI, Cloud Security Analytics, Retrieval-Augmented Generation, and Computer Vision.",
  keywords: ["AI", "Machine Learning", "Explainable AI", "Healthcare AI", "Cloud Security", "RAG", "Computer Vision", "Portfolio"],
  authors: [{ name: "Rupsha Debnath" }],
  openGraph: {
    title: "Rupsha Debnath | AI & Machine Learning Portfolio",
    description: "Building intelligent systems across healthcare, security, and trustworthy AI.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
