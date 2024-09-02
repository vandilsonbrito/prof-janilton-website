import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Convencimento from "./components/WinningSection/WinningSection";
import Sobre from './components/AboutSection/AboutSection';
import Canal from './components/ChannelSection/ChannelSection';
import Contato from './components/ContactSection/ContactSection';
import Footer from "./components/Footer/Footer";
import Gallery from "./components/GallerySection/Gallery";
import ArticleCTASection from "./components/ArticleCTASection/ArticleCTASection";

export default function Home() {
  return (
    <main className="w-full h-full ">
        {/* <Helmet>
          <title>Professor Dr. Janilton Almeida. Aprenda a dar aulas criativas.</title>
          <meta name="description" content="O Professor Janilton é um especialista na arte de dar aulas criativas, pesquisa educacional e inovação. É um professor de Geografia com mais de vinte e cinco anos de atuação com Mestrado em Ensino de Ciências e Doutorado em Ciências."/>
          <link rel="canonical" href="https://profjanilton.com.br" />
        </Helmet> */}
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
