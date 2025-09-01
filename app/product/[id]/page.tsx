import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import { PRODUCTS } from "@/data/products";
import { SITE } from "@/lib/site";

export default function ProductPage({ params }:{ params:{id:string}}){
  const p = PRODUCTS.find(x => x.id === params.id);
  if(!p) return <div className="container py-16">Produto não encontrado.</div>;

  const wa = `${SITE.whatsapp}?text=${encodeURIComponent(`Olá! Quero ${p.name} (${p.volume ?? ""}).`)}`;
  const ld = {
    "@context":"https://schema.org",
    "@type":"Product",
    name: p.name,
    brand: "Jacque Parfum",
    description: `${p.family ?? ""} ${p.volume ? "• "+p.volume : ""}`.trim(),
    offers: { "@type":"Offer", price: p.price, priceCurrency: "BRL", availability: "https://schema.org/InStock", url: `${SITE.url}/product/${p.id}` },
    aggregateRating: p.rating ? { "@type":"AggregateRating", ratingValue: p.rating, reviewCount: 12 } : undefined
  };

  return (
    <>
      <Header/>
      <Section title={p.name} subtitle={`${p.family ?? ""} ${p.volume ? "• "+p.volume : ""}`}>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="aspect-square rounded-2xl bg-sand" />
          <div>
            <div className="text-2xl font-semibold">R$ {p.price.toFixed(2).replace('.', ',')}</div>
            <ul className="mt-3 text-ink/80 space-y-2 text-sm">
              <li>Alta fixação e presença equilibrada</li>
              <li>Pirâmide em camadas (topo/coração/fundo)</li>
              <li>Combina com Body Lotion/Splash (layering)</li>
              <li>Envio BR • Pagamento seguro • Troca 7 dias</li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a className="btn btn-primary" href={wa} target="_blank">Comprar no Whats</a>
              <a className="btn btn-secondary" href="/collections">Ver mais</a>
            </div>
          </div>
        </div>
      </Section>
      <Footer/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(ld)}}/>
    </>
  )
}
