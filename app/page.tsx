import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import CollectionCard from "@/components/CollectionCard";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { PRODUCTS } from "@/data/products";
import { SITE } from "@/lib/site";

export default function HomePage(){
  const best = PRODUCTS.slice(0,4);
  const ld = { "@context":"https://schema.org", "@type":"CosmeticsStore", "name":"Jacque Parfum", "url": SITE.url, "openingHours":"Mo-Sa 09:00-18:00" };
  return (
    <>
      <Header/>
      <Hero/>
      <Section title="Mais vendidos" subtitle="Os favoritos da nossa comunidade.">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {best.map(p => <ProductCard key={p.id} id={p.id} name={p.name} subtitle={p.family} price={p.price}/>)}
        </div>
      </Section>
      <Section title="Nossas coleções" subtitle="Escolha a sua forma de perfumar.">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <CollectionCard href="/collections/dream" title="Dream Brand" desc="Curadoria sensorial com assinatura moderna."/>
          <CollectionCard href="/collections/arabe" title="Árabe" desc="Oud, âmbar e especiarias para presença."/>
          <CollectionCard href="/collections/originais" title="Originais" desc="Criações autorais com identidade."/>
          <CollectionCard href="/collections/splash" title="Body Splash" desc="Leve, fresco e aconchegante."/>
          <CollectionCard href="/collections/lotion" title="Body Lotion" desc="Hidratação aveludada para camadas."/>
        </div>
      </Section>
      <Footer/>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(ld)}}/>
    </>
  )
}
