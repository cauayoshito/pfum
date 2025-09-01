import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS } from "@/data/products";

const META: Record<string, {title: string; desc: string; key: any}> = {
  dream: { title: "Dream Brand Collection", desc: "Elegância sem esforço — assinaturas modernas.", key: 'dream' },
  arabe: { title: "Coleção Árabe", desc: "Intensidade com oud, âmbar e especiarias.", key: 'arabe' },
  originais: { title: "Originais", desc: "Criações autorais com identidade própria.", key: 'originais' },
  splash: { title: "Body Splash", desc: "Frescor leve para o dia a dia.", key: 'splash' },
  lotion: { title: "Body Lotion", desc: "Hidratação aveludada e perfumada.", key: 'lotion' },
};

export default function CollectionPage({ params }:{ params:{ slug:string }}){
  const meta = META[params.slug] ?? { title: "Coleção", desc: "", key: params.slug };
  const list = PRODUCTS.filter(p => p.collection === meta.key);
  return (
    <>
      <Header/>
      <Section title={meta.title} subtitle={meta.desc}>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {list.map(p => (
            <ProductCard key={p.id} id={p.id} name={p.name} subtitle={p.family} price={p.price} />
          ))}
        </div>
      </Section>
      <Footer/>
    </>
  )
}
