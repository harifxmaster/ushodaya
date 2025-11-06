// src/lib/image.ts
import { client } from "@/lib/client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

export function urlFor(source: object) {
  return builder.image(source);
}
