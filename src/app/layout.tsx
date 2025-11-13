import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ["latin"],
  variable: '--font-poppins',
  display: 'swap',
});

const inter = Inter({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "VyomGarud | Advanced UAV Systems",
  description: "Military-grade drone systems with precision engineering and advanced autonomy for critical defense operations",
  keywords: "UAV, drones, military systems, autonomous flight, precision engineering, defense technology, surveillance systems",
  authors: [{ name: "VyomGarud" }],
  openGraph: {
    title: "VyomGarud | Advanced UAV Systems",
    description: "Military-grade drone systems with precision engineering and advanced autonomy",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} ${inter.variable} font-poppins antialiased bg-charcoal text-white`}>
        {children}
      </body>
    </html>
  );
}