import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";
import { GlobalProvider } from "./components/GlobalProviderMenuIsOpen/MenuIsOpen";
import Head from "next/head";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  charset: 'UTF-8',
  robots: 'index, follow',
  googleSiteVerification: '451ac4M4RlnKucto2im0QhUM0ZI-nmb1gFi8cSPyIxw',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
        <body className={montserrat.className}>
          <GlobalProvider>
              {children}
          </GlobalProvider>
        </body>
    </html>
  );
}
