import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Your Name — AI & Machine Learning",
  description:
    "Computer Science student specialising in AI and Machine Learning. Passionate about Healthcare AI, Computer Vision, and Explainable AI. Open to internships and research opportunities.",
  keywords: ["AI", "Machine Learning", "Deep Learning", "Computer Vision", "Healthcare AI", "Explainable AI", "Portfolio"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Your Name — AI & Machine Learning Portfolio",
    description: "Building intelligent systems that make an impact. Open to internships and research opportunities.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${dmSerif.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
