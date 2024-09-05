import { createClient } from "next-sanity";
import imageUrlBuilder  from "@sanity/image-url";

export const client = createClient({
    apiVersion: '2024-08-20',
    dataset: 'production',
    projectId: 'xrafv1q9',
    useCdn: false
})

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
    return builder.image(source);
}