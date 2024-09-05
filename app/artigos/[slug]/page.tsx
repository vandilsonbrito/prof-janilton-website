
import Navbar from "@/app/components/BlogNavBar/Navbar";
import ScrollToTop from "@/app/components/ScrollToTop/ScrollToTop";
import { client, urlFor } from "@/lib/sanity";
import { fullBlogData } from "@/utils/interafces";
import { Metadata } from "next";
import { PortableText } from "next-sanity";
import Head from "next/head";
import Image from "next/image";

export const revalidate = 30;

async function getData(slug: string) {
    const query = `
        *[_type == "article" && slug.current == '${slug}'] {
            "currentSlug": slug.current,
                title,
                smallDescription,
                content,
                titleImage

        }[0]
    `;
    const data = await client.fetch(query);
    return data;
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const data = await getData(params.slug);

    const url = `https://profjanilton.com.br/artigos/${params.slug}`;

    return {
        title: data.title,
        description: data.smallDescription,
        openGraph: {
            title: data.title,
            description: data.smallDescription,
            images: [
                {
                    url: 'https://asset.cloudinary.com/ds7cszkkx/434e2c7590e8a9d4038bed857aed81bc',
                    alt: 'Artigo de opinião',
                    width: 400,
                    height: 250
                }
            ],
            url: url,
            type: 'article',
        },
        alternates: {
            canonical: url,
        },
    }
}

export default async function BlogArticle({params}: {params: { slug: string}}) {
    const data: fullBlogData = await getData(params.slug)

    return (
        <main className="overflow-hidden" id="/top">
            <Head>
                {/* Estrutura de dados Schema.org */}
                <script type="application/ld+json">
                    {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": data.title,
                    "description": data.smallDescription,
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
            <Navbar/>
            <section className="max-w-4xl flex flex-col items-center  mx-auto px-6 sm:px-8 lg:px-4 py-12 ">
                <h1>
                    <span className="block text-base text-center text-primary font-semibold tracking-wide ">Professor Dr. Janilton de Lima Almeida</span>
                    <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">{data.title}</span>
                </h1>
                <Image
                    src={urlFor(data.titleImage).url()}
                    alt="image"
                    width="800"
                    height="800"
                    priority
                    className="rounded-lg mt-8 border"
                    />
                <section className="mt-8 lg:mt-16 prose prose-blue prose-h4:text-2xl prose-xl dark:prose-invert prose-li:marker:text-primary">
                    <PortableText value={data.content}/>
                </section>
            </section>
            <ScrollToTop/>
        </main>
    )
}
