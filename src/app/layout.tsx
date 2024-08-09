import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vueware — Digital Intelligence",
  description: "We provide companies with tailored software solutions.",
  openGraph: {
    type: "website",
    url: "https://vueware.io",
    title: "Vueware — Digital Intelligence",
    description: "We provide companies with tailored software solutions.",
    images: [
      "https://avatars.githubusercontent.com/u/177398386?s=400&u=808f178a3117508ca26a5f434e0dc81ad26b89b2&v=4",
    ],
  },
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
