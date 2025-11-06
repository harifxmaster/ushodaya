import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "l3wo94jm", // replace with your Sanity project ID
  dataset: "production",  // replace with your dataset name
  apiVersion: "2023-01-01", // current Sanity API version
  useCdn: true, // `true` = use cached CDN, `false` = fresh data
});
