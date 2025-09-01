'use client';
import { SITE } from "@/lib/site";
import { useState } from "react";

export default function Hero(){
  const [nome,setNome]=useState('');
  const [tel,setTel]=useState('');
  const [msg,setMsg]=useState('');
  const [ok,setOk]=useState<string|null>(null);
  const [loading,setLoading]=useState(false);

  async function enviar(){
    setLoading(true); setOk(null);
    try{
      const r=await fetch('/api/lead',{method:'POST',headers:{'Content-Type':'application/json'},
        body:JSON.stringify({nome:nome.trim(), telefone:tel.trim(), mensagem:msg.trim(), origem:'form_hero'})});
      const j=await r.json();
      setOk(j.ok? 'Recebemos seus dados. Vamos falar com você no Whats!': 'Erro ao enviar. Tente novamente.');
      if(j.ok){ setNome(''); setTel(''); setMsg(''); }
    }catch(e){ setOk('Erro ao enviar.'); }
    finally{ setLoading(false); }
  }

  return (
    <section className="relative isolate overflow-hidden bg-gold-fade">
      <div className="container grid md:grid-cols-2 gap-10 py-16">
        <div className="flex flex-col justify-center">
          <h1 className="h1">Perfumes que transformam momentos em memórias</h1>
          <p className="mt-3 text-ink/80">
            Luxo acessível com fixação marcante. Descubra Dream Brand, Árabe, Originais, Body Splash e Body Lotion.
          </p>
          <div className="mt-6 flex gap-3">
            <a className="btn btn-primary" href="/collections">Comprar agora</a>
            <a className="btn btn-secondary" href={SITE.whatsapp} target="_blank">Falar no WhatsApp</a>
          </div>

          <form className="mt-6 grid sm:grid-cols-3 gap-3" onSubmit={(e)=>{e.preventDefault();enviar();}}>
            <input required className="border rounded-xl px-3 py-3" placeholder="Seu nome"
                   value={nome} onChange={e=>setNome(e.target.value)} />
            <input required className="border rounded-xl px-3 py-3" placeholder="WhatsApp (71 99225-8349)"
                   value={tel} onChange={e=>setTel(e.target.value)} />
            <button disabled={loading} className="btn btn-primary">{loading?'Enviando...':'Quero ajuda pra escolher'}</button>
            <textarea className="sm:col-span-3 border rounded-xl px-3 py-3" placeholder="Conte como prefere seu aroma (opcional)"
                      value={msg} onChange={e=>setMsg(e.target.value)} />
            {ok && <p className="sm:col-span-3 text-sm text-ink/70">{ok}</p>}
          </form>

          <div className="mt-6 flex flex-wrap gap-2 text-sm">
            <span className="badge">Envio para todo o Brasil</span>
            <span className="badge">Pagamento seguro</span>
            <span className="badge">Troca fácil em 7 dias</span>
          </div>
        </div>
        <div className="rounded-3xl bg-guava-mist p-4 shadow-soft">
          <div className="aspect-[4/3] rounded-2xl bg-white grid place-items-center text-ink/40"><span>Imagem do Hero</span></div>
        </div>
      </div>
    </section>
  )
}
