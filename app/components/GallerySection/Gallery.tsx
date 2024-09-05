'use client'
import imgGallery0 from '../../../public/imgs-gallery/foto0.webp';
import imgGallery1 from '../../../public/imgs-gallery/foto1.webp';
import imgGallery2 from '../../../public/imgs-gallery/foto3.webp';
import imgGallery3 from '../../../public/imgs-gallery/foto2.webp';
import imgGallery4 from '../../../public/imgs-gallery/foto4.webp';
import imgGallery5 from '../../../public/imgs-gallery/foto5.webp';
import imgGallery6 from '../../../public/imgs-gallery/foto6.webp';
import imgGallery7 from '../../../public/imgs-gallery/foto7.webp';
import imgGallery8 from '../../../public/imgs-gallery/foto8.webp';
import imgGallery9 from '../../../public/imgs-gallery/foto9.webp';
import imgGallery10 from '../../../public/imgs-gallery/foto10.webp';
import imgGallery11 from '../../../public/imgs-gallery/foto11.webp';
import imgGallery12 from '../../../public/imgs-gallery/foto12.webp';
import imgGallery13 from '../../../public/imgs-gallery/foto13.webp';
import imgGallery14 from '../../../public/imgs-gallery/foto14.webp';
import imgGallery15 from '../../../public/imgs-gallery/foto15.webp';
import imgGallery16 from '../../../public/imgs-gallery/foto16.webp';
import imgGallery17 from '../../../public/imgs-gallery/foto17.webp';
import imgGallery18 from '../../../public/imgs-gallery/foto18.webp';
import imgGallery19 from '../../../public/imgs-gallery/foto19.webp';
import imgGallery20 from '../../../public/imgs-gallery/foto20.webp';
import imgGallery21 from '../../../public/imgs-gallery/foto21.webp';

import AOS from 'aos';
import { useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useMedia from 'use-media';

const IMAGES = [imgGallery0, imgGallery1, imgGallery2, imgGallery3, imgGallery4, imgGallery5, imgGallery6, imgGallery7, imgGallery8, imgGallery9, imgGallery10, imgGallery11, imgGallery12, imgGallery13, imgGallery14, imgGallery15, imgGallery16, imgGallery17, imgGallery18, imgGallery19, imgGallery20,imgGallery21 ];

export default function Gallery() {

    useEffect(() => {
        AOS.init({
          duration: 1000,
        })
      }, []);
      const isMobile = useMedia({ maxWidth: '800px' });

      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: false,
        autoplaySpeed: 3000,
        cssEase: "linear",
        slidesToShow: isMobile ? 1 : 3,
        slidesToScroll: isMobile ? 1 : 3,
        responsive: [
            {
              breakpoint: 1100,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 580,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };

    function LazyLoadedImage({ src, alt, className }: {src: StaticImageData, alt: string, className: string}) {
        return <Image className={className} src={src} alt={alt} loading="lazy" />;
    }

    return (
      <section className="w-full max-w-[90rem] h-full hidden md:block bg-white pt-16 pb-20 lg:py-20 px-8 lg:px-16 xl:px-20 overflow-hidden">
          <h3 className='text-lg md:text-2xl font-semibold uppercase text-center mb-14 leading-relaxed'  data-aos="fade-left">um pouco da minha vida profissional descrita em fotografias </h3>

          <div className="w-[100%] h-full hidden md:block shadow-2xl p-7 bg-main-blue rounded-md">
              <Slider
                  {...settings}
                  className="w-[100%] h-full lg:flex lg:flex-row lg:justify-center lg:items-center  border-[3px] border-white rounded-lg opacity-90 "
                  data-aos="fade-left"
                  >
                      {
                          IMAGES.length > 0 ? (
                          IMAGES?.map((image, index) => (
                              <LazyLoadedImage
                                  key={index}
                                  className='w-[371px] h-[371px] aspect-square bg-cover'
                                  src={image}
                                  alt="Professor Janilton trabalhando"
                                  />
                          ))
                          )
                          :
                          (
                              <p>Erro ao carregar imagens.</p>
                          )
                      }
              </Slider>
          </div>
          <p className='mt-5 text-center'>Deslize para ver mais</p>
      </section>
    )
}
