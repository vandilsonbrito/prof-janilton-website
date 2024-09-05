import Header from "./components/Header/Header";
import Convencimento from "./components/ConvinceSection/ConvinceSection";
import Sobre from './components/AboutSection/AboutSection';
import Canal from './components/ChannelSection/ChannelSection';
import Contato from './components/ContactSection/ContactSection';
import Footer from "./components/Footer/Footer";
import ArticleCTASection from "./components/ArticleCTASection/ArticleCTASection";
import dynamic from 'next/dynamic';
import Head from "next/head";
import { Metadata } from "next";
import Banner from "./components/Banner/Banner";


export const metadata: Metadata = {
    title: 'Professor Dr. Janilton de Lima Almeida.',
    description: 'O Professor Janilton é um especialista na arte de dar aulas criativas, pesquisa educacional e inovação. É um professor de Geografia com mais de vinte e cinco anos de atuação com Mestrado em Ensino de Ciências e Doutorado em Ciências.',
    alternates: {
      canonical: 'https://profjanilton.com.br',
    },
    openGraph: {
      title: 'Professor Dr. Janilton de Lima Almeida - Professor de Geografia e Iniciação Científica.',
      description: 'O Professor Janilton é um especialista na arte de dar aulas criativas, pesquisa educacional e inovação.',
      images: [
        {
          url: 'https://asset.cloudinary.com/ds7cszkkx/434e2c7590e8a9d4038bed857aed81bc',
          alt: 'Professor Dr. Janilton de Lima Almeida',
          width: 400,
          height: 250
        }
      ],
      url: 'https://profjanilton.com.br/',
      type: 'website',
    },
    
};


export default function Home() {

    
    const Convencimento = dynamic(() => import('./components/ConvinceSection/ConvinceSection'), {
      ssr: true, 
      loading: () => <p>Loading...</p>
    });
    const Contato = dynamic(() => import('./components/ContactSection/ContactSection'), {
      ssr: true, 
      loading: () => <p>Loading...</p>
    });
    const Gallery = dynamic(() => import('./components/GallerySection/Gallery'), {
      ssr: false, // Desativa SSR se o componente não for necessário para SEO
      loading: () => <p>Loading...</p>
    });
    

    return (
      <main className="w-full h-full ">
          <Head>
              <link rel="amphtml" href="https://profjanilton.com.br?page=amp" />
              {/* Estrutura de dados Schema.org */}
              <script type="application/ld+json">
                  {JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Website",
                  "headline": 'Home page - Website Professor Doutro Janilton de Lima Almeida',
                  "description": 'O Professor Janilton é um especialista na arte de dar aulas criativas, pesquisa educacional e inovação. Posssui Mestrado e Doutorado e trabalha como professor de Geografia há mais 25 anos',
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

          <Header/>
          <div className="overflow-hidden flex flex-col justify-center items-center">
            <Banner/>
            <Convencimento/>
            <Sobre/>
            <ArticleCTASection/>
            <Canal/>
            <Gallery/>
            <Contato/>
            <Footer/>
          </div>
      </main>
    )
}


