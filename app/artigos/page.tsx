import Image from "next/image";
import { client, urlFor } from "../../lib/sanity";
import { articleData, simpleBlogCard } from "@/utils/interafces";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import Link from "next/link";
import HeaderOutter from "../components/Header/HeaderOutter";
import Footer from "../components/Footer/Footer";
import { useEffect, useState } from "react";
import Head from "next/head";
import { Metadata } from "next";

export const revalidate = 30;

async function getData() {
  const query = `
  *[_type == 'article'] {
    title,
      smallDescription,
      "currentSlug": slug.current,
      titleImage
  }`;
  const data = await client.fetch(query);
  return data;
};

export const metadata: Metadata = {
    title: 'Acompanhe os artigos de opinião do Professor Dr. Janilton de Lima Almeida.',
    description: 'Compartilho experiências, reflexões e insights ligados a prática pedagógica, iniciação científica e ensino de geografia.',
    alternates: {
      canonical: 'https://profjanilton.com.br/artigos',
    },
    openGraph: {
      title: 'Acompanhe os artigos de opinião do Professor Dr. Janilton de Lima Almeida.',
      description: 'Compartilho experiências, reflexões e insights ligados a prática pedagógica, iniciação científica e ensino de geografia.',
      images: [
        {
          url: 'https://asset.cloudinary.com/ds7cszkkx/434e2c7590e8a9d4038bed857aed81bc',
          alt: 'Artigo de opinião',
          width: 400,
          height: 250
        }
      ],
      url: 'https://profjanilton.com.br/artigos/',
      type: 'website',
    }
};


export default async function BlogMenu() {

  
  const data: simpleBlogCard[] = await getData();

  return (
    <main >
      <Head><link rel="amphtml" href="https://profjanilton.com.br/artigos?page=amp" /></Head>
      <HeaderOutter/>
      <section className="max-w-3xl mx-auto px-4 py-5" style={{ minHeight: 'calc(100dvh - 80px)' }}>
          <h1 className="text-center text-xl md:text-3xl font-medium py-4">Artigos de Opinião</h1>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 items-center my-10 gap-5">
              {
                data.map((post, index) => (
                  <Card key={index} className="shadow-xl flex flex-col justify-center items-center">
                      <Image
                        src={urlFor(post.titleImage).url()}
                        alt="image"
                        width={500}
                        height={500}
                        className="rounded-t-lg h-[200px] object-cover"
                        />
                        <CardContent className="mt-5">
                            <h3 className="text-lg font-semibold line-clamp-2">{post.title}</h3>
                            <p className="text-sm line-clamp-3 mt-2 text-gray-600 dark:text-gray-300">{post.smallDescription}</p>
                            <Button asChild className="w-full mt-7 text-[1.1rem] font-semibold">
                                <Link href={`/artigos/${post.currentSlug}`}>Ler Artigo</Link>
                            </Button>
                        </CardContent>
                  </Card>
                ))
              }
          </div>
      </section>
      <Footer/>
    </main>
  );
}
