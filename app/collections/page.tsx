import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Link from "next/link";

export default function CollectionsPage(){
  const items = [
    { href: "/collections/dream", title: "Dream Brand", desc: "Curadoria sensorial com assinatura moderna." },
    { href: "/collections/arabe", title: "Árabe", desc: "Oud, âmbar e especiarias para presença." },
    { href: "/collections/originais", title: "Originais", desc: "Criações autorais com identidade." },
    { href: "/collections/splash", title: "Body Splash", desc: "Leve, fresco e aconchegante." },
    { href: "/collections/lotion", title: "Body Lotion", desc: "Hidratação aveludada para camadas." },
  ];
  return (
    <>
      <Header/>
      <Section title="Coleções">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {items.map(i => (
            <div key={i.href} className="card">
              <div className="aspect-[4/3] rounded-xl bg-sand grid place-items-center text-ink/50">Imagem</div>
              <h3 className="mt-3 font-semibold">{i.title}</h3>
              <p className="text-sm text-ink/70">{i.desc}</p>
              <Link className="btn btn-primary mt-3" href={i.href}>Ver produtos</Link>
            </div>
          ))}
        </div>
      </Section>
      <Footer/>
    </>
  )
}
