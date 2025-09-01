import { SITE } from "@/lib/site";
export default function sitemap(){
  const base = SITE.url;
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now },
    { url: `${base}/collections`, lastModified: now },
    { url: `${base}/collections/dream`, lastModified: now },
    { url: `${base}/collections/arabe`, lastModified: now },
    { url: `${base}/collections/originais`, lastModified: now },
    { url: `${base}/collections/splash`, lastModified: now },
    { url: `${base}/collections/lotion`, lastModified: now },
  ];
}
