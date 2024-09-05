import HeaderOutter from "../components/Header/HeaderOutter";
import Footer from "../components/Footer/Footer";
import Head from "next/head";
import { Metadata } from "next";
import AboutPageClient from "../components/AboutPageClient/AboutPageClient";

export const metadata: Metadata = {
    title: 'Conheça o Professor Dr. Janilton de Lima Almeida.',
    description: 'Olá, eu sou o professor Janilton Almeida. Com uma sólida formação acadêmica incluindo Mestrado e Doutorado, além de mais de duas décadas de experiência no ensino, estou comprometido com a promoção da educação e o desenvolvimento integral dos estudantes.',
    alternates: {
      canonical: 'https://profjanilton.com.br/sobre',
    },
    openGraph: {
      title: 'Conheça o Professor Dr. Janilton de Lima Almeida.',
      description: 'Olá, eu sou o professor Janilton Almeida. Com uma sólida formação acadêmica e mais de duas décadas de experiência no ensino, estou comprometido com a promoção da educação e o desenvolvimento integral dos estudantes.',
      images: [
        {
          url: 'https://asset.cloudinary.com/ds7cszkkx/434e2c7590e8a9d4038bed857aed81bc',
          alt: 'Professor Dr. Janilton de Lima Almeida',
          width: 400,
          height: 250
        }
      ],
      url: 'https://profjanilton.com.br/sobre/',
      type: 'website',
    }
};

export default function Sobre() {

  return (
    <main className="overflow-x-hidden">
      <Head>
          <link rel="amphtml" href="https://profjanilton.com.br/sobre?page=amp" />
          {/* Estrutura de dados Schema.org */}
          <script type="application/ld+json">
              {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Website",
              "headline": 'Página Sobre Mim - Website Professor Doutro Janilton de Lima Almeida',
              "description": 'Olá, eu sou o professor Janilton Almeida. Com uma sólida formação acadêmica e mais de duas décadas de experiência no ensino, estou comprometido com a promoção da educação e o desenvolvimento integral dos estudantes.',
              "image": 'https://asset.cloudinary.com/ds7cszkkx/434e2c7590e8a9d4038bed857aed81bc',
              "author": {
                  "@type": "Person",
                  "name": "Professor Dr. Janilton de Lima Almeida"
              },
              "datePublished": "2023-12-04",
              "publisher": {
                  "@type": "Organization",
                  "name": "profjanilton.com.br"
              }
              })}
            </script>
      </Head>
      <HeaderOutter/>
      <AboutPageClient/>
      <Footer/>
    </main>
  )
}
