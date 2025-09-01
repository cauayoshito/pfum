import Link from "next/link";
export default function ProductCard({ id, name, subtitle, price }:{ id:string; name:string; subtitle?:string; price:number }){
  return (
    <Link href={`/product/${id}`} className="card hover:shadow-gold transition block">
      <div className="aspect-square rounded-xl bg-sand grid place-items-center text-ink/50">Foto</div>
      <div className="mt-3 flex items-start justify-between gap-3">
        <div>
          <h4 className="font-semibold">{name}</h4>
          {subtitle && <p className="text-sm text-ink/70">{subtitle}</p>}
        </div>
        <span className="font-semibold">R$ {price.toFixed(2).replace('.', ',')}</span>
      </div>
      <span className="btn btn-primary mt-3 w-full">Ver detalhes</span>
    </Link>
  )
}
