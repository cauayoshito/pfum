import Link from "next/link";
import { SITE } from "@/lib/site";

const NAV = [
  { href: "/collections/dream", label: "Dream Brand" },
  { href: "/collections/arabe", label: "Árabe" },
  { href: "/collections/originais", label: "Originais" },
  { href: "/collections/splash", label: "Body Splash" },
  { href: "/collections/lotion", label: "Body Lotion" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-ivory/75 border-b border-sand/70">
      <div className="container h-16 flex items-center justify-between">
        <Link href="/" className="font-bold">Jacque <span className="text-gold">Parfum</span></Link>
        <nav className="hidden md:flex gap-6">
          {NAV.map(i => <Link key={i.href} href={i.href} className="hover:text-gold-dark">{i.label}</Link>)}
        </nav>
        <div className="flex items-center gap-3">
          <a className="btn btn-secondary" target="_blank" href={SITE.whatsapp}>WhatsApp</a>
          <Link className="btn btn-primary" href="/collections">Comprar agora</Link>
        </div>
      </div>
    </header>
  );
}
