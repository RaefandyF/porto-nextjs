import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AOSInit from "@/app/component/AOSInit";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata : Metadata = {
  title: "Raefandy Fadila | Software Engineer",
  description:
    "Portofolio Raefandy Fadila, seorang software engineer dengan fokus pada web development dan aplikasi mobile.",
  keywords: [
    "Raefandy Fadila",
    "Raefandy Fadila Portfolio",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "React",
    "Next.js",
    "Portofolio",
    "Portofolio Raefandy",
    "Raefandy Golang",
    "Raefandy Frontend Developer",
    "Raefandy Backend Developer",
    "Raefandy React",
    "Raefandy Next.js",
    "Raefandy Fadila Golang",
    "Raefandy Fadila Frontend Developer",
    "Raefandy Fadila Backend Developer",
    "Raefandy Fadila React",
    "Raefandy Fadila Next.js",
    "Portofolio Software Engineer",
    "Software Engineer Portofolio",
  ],
  authors: [
    { name: "Raefandy Fadila", url: "https://raefandyfadila.vercel.app" },
  ],
  openGraph: {
    title: "Raefandy Fadila | Software Engineer",
    description:
      "Lihat karya dan pengalaman Raefandy Fadila dalam membangun aplikasi web dan mobile.",
    url: "https://raefandyfadila.vercel.app",
    siteName: "Raefandy Fadila",
    images: [
      {
        url: "https://raefandyfadila.vercel.app/og-image-2.jpg",
        width: 1200,
        height: 653,
        alt: "Raefandy Fadila Portfolio Preview",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://raefandyfadila.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AOSInit />
        {children}
      </body>
    </html>
  );
}
