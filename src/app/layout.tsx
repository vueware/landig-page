import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vueware - Digital Intelligence",
  description:
    "The word combines vue, meaning vision and insight, with ware, representing software. Vueware provides companies with software that delivers deep insights, enabling them to focus on their core strengths and excel in what they do best. As a no-nonsense company, we are straightforward and honor our commitments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={font.className}>{children}</body>
    </html>
  );
}
