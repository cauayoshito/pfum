import Link from "next/link";
export default function CollectionCard({href, title, desc}:{href:string; title:string; desc:string}){
  return (
    <Link href={href} className="card hover:shadow-gold transition block">
      <div className="aspect-[4/3] rounded-xl bg-guava-light/40 grid place-items-center text-ink/50">Imagem</div>
      <h3 className="mt-3 text-lg font-semibold">{title}</h3>
      <p className="text-sm text-ink/70">{desc}</p>
    </Link>
  )
}
