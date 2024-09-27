'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import useMedia from 'use-media';
import Image from 'next/image';
import Janilton from '../../../public/hero-image.webp';
import JaniltonMobile from '../../../public/hero-image-mobile.webp';


export default function AboutPageClient() {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 1000,
    });
  }, []);

  const isMobile = useMedia({ maxWidth: '800px' });

  return (
    <div className="w-full h-full bg-white px-5 pb-14 font-Montserrat flex flex-col items-center sm:px-12 xl:px-24 text-black my-10 overflow-hidden" id='/sobre'>
        
        <div className="xl:gap-24">
          <div className="w-full flex justify-center ">
            <h2 className="uppercase font-semibold text-3xl md:text-5xl xl:mt-8 lg:mb-10 xl:ml-56" data-aos="fade-left">Sobre mim</h2>
          </div>
          <div className="w-full h-full flex flex-col xl:flex-row items-center  gap-10 ">
              <div className="w-[140%] 2xl:w-[130%] h-full flex justify-center xl:self-start xl:mt-2 xl:pl-5" >
                    <Image 
                    src={isMobile ? JaniltonMobile : Janilton} 
                    width={700}
                    height={700}
                    alt="Imagem do Professor Janilton" 
                    className='w-[190px] h-[245px] lg:w-[280px] lg:h-[330px] rounded-md my-6 sm:my-10 xl:my-0 flex ' 
                    data-aos="fade-right"/>
              </div>
              <div className="flex flex-col gap-5 text-lg md:text-xl lg:text-lg md:-px-10 xl:-pr-10 xl:pl-10" data-aos="fade-left">
                  <p className=''>Olá, eu sou o professor Janilton Almeida! Com uma sólida formação acadêmica e mais de duas décadas de experiência no ensino, estou comprometido com a promoção da educação e o desenvolvimento integral dos estudantes. Minha trajetória acadêmica abrange diversas áreas do conhecimento.
                  </p>
                  <p>Sou graduado em Geografia, Ciências Biológicas e Pedagogia, o que me permite uma perspectiva multidisciplinar e interdisciplinar que enriquece minha prática pedagógica.</p>
                  <p className=''>Além disso, obtive especializações em Mídias na Educação, Formação Socioeconômica do Brasil e Gestão Ambiental e Desenvolvimento Sustentável. Atualmente, estou avançando em minha jornada acadêmica como Doutorando em Ciências, com um mestrado em Ensino de Ciências.</p>
                  <p className=''>Há mais de 25 anos, atuo como professor de Geografia e em coordenações de ensino e formação de professores. E atualmente estou na coordenação do Núcleo de Apoio Pedagógico da Secretaria de Educação do Município de Ibiassucê, Bahia.</p>
                  <p>Nessa função, desempenho uma jornada criativa de trabalho como pedagogo na rede de ensino do município em que resido, aplicando estratégias inovadoras para aprimorar o processo de ensino-aprendizagem. Acredito que a coordenação pedagógica desempenha um papel fundamental no apoio aos professores e na melhoria constante do ambiente educacional.</p>
                  <p>Além disso, tenho dedicado minha paixão pelo ensino à orientação de projetos de Iniciação Científica com estudantes do ensino médio. Trabalho para desenvolver habilidades de pesquisa nesses jovens, incentivando-os a elaborar projetos relacionados aos problemas do cotidiano, da escola e da comunidade.</p>
                  <p>Essa experiência tem como objetivo capacitá-los a se tornarem verdadeiros pesquisadores, capazes de analisar questões relevantes e propor soluções significativas.</p>
                  <p>Minha abordagem pedagógica é centrada no estudante e na aprendizagem ativa. Acredito no poder das metodologias criativas, interativas e ativas para engajar os alunos e tornar o processo educativo mais dinâmico e eficaz. Minhas aulas tanto de Geografia como de Iniciação Científica são desenvolvidas na perspectiva da problematização fazendo com que os estudantes elaborem projetos de pesquisas contribuindo para estimular o pensamento crítico, a resolução de problemas e a participação ativa dos estudantes, preparando-os para os desafios do mundo real.</p>
                  <p>É uma honra compartilhar minha paixão pelo conhecimento e pelo ensino com todos aqueles que buscam desenvolver uma prática pedagógica criativa, que estejam dispostos a aprender, trocar experiências e crescer.</p>
                  <p>Estou sempre em busca de novas maneiras de melhorar a experiência educacional e contribuir para o desenvolvimento de indivíduos preparados para enfrentar os desafios do presente e do futuro.</p>
                  <p>Seja bem-vindo ao meu mundo de conhecimento, aprendizado e descobertas. Estou ansioso para compartilhar essa jornada educacional com você. Vamos nessa!</p>
              </div>
          </div>
        </div>
      </div>
  );
}
