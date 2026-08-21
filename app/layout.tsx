import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ofertas Exclusivas | TechPromos & ModaAchadinhos",
  description: "Entre nos nossos grupos gratuitos e receba as melhores promoções de tecnologia e moda no WhatsApp.",
  icons: { icon: "/tech-promos.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={geist.variable}>{children}</body>
    </html>
  );
}
