import { SITE } from "@/lib/site";

export default function Footer(){
  return (
    <footer className="mt-16 border-t border-sand/70">
      <div className="container py-10 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <h4 className="font-semibold">Jacque Parfum</h4>
          <p className="mt-2 text-ink/70">Perfumes e body care com alta fixação e conforto.</p>
        </div>
        <div>
          <h4 className="font-semibold">Atendimento</h4>
          <ul className="mt-2 space-y-2">
            <li><a className="link" href={SITE.whatsapp} target="_blank">WhatsApp</a></li>
            <li><a className="link" href={`https://instagram.com/${SITE.instagram}`} target="_blank">Instagram</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Políticas</h4>
          <ul className="mt-2 space-y-2">
            <li>Envio para todo o Brasil</li>
            <li>Pagamento seguro</li>
            <li>Troca fácil em 7 dias</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-sand/70 py-4 text-center text-xs text-ink/60">
        © {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.
      </div>
    </footer>
  )
}
