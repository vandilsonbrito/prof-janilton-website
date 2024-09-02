import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";
import { GlobalProvider } from "./components/GlobalProviderMenuIsOpen/MenuIsOpen";
import Head from "next/head";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prof. Janilton Almeida",
  description: "Professor Doutor Janilton Almeida de Lima",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="robots" content="index, follow"/>
          <meta name="google-site-verification" content="451ac4M4RlnKucto2im0QhUM0ZI-nmb1gFi8cSPyIxw" />  
        </Head>
        <body className={montserrat.className}>
          <GlobalProvider>
            {children}
          </GlobalProvider>
        </body>
    </html>
  );
}
