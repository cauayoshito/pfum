import "./globals.css";
import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Jacque Parfum — Perfumes e Body Care que viram memória",
  description: "Perfumes femininos, masculinos e unissex com alta fixação. Body splash e body lotion para camadas perfeitas. Envio para todo o Brasil.",
  metadataBase: new URL(SITE.url),
  openGraph: {
    title: "Jacque Parfum — Perfumes e Body Care que viram memória",
    description: "Perfumes e body care com alta fixação.",
    url: SITE.url,
    siteName: SITE.name,
    images: ["/og.jpg"],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="min-h-screen flex flex-col">{children}</div>
      </body>
    </html>
  );
}
