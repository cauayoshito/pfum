export default function Section({ title, children, subtitle }:{title:string; children:React.ReactNode; subtitle?:string}){
  return (
    <section className="container py-12">
      <h2 className="h2">{title}</h2>
      {subtitle && <p className="mt-1 text-ink/70">{subtitle}</p>}
      <div className="mt-6">{children}</div>
    </section>
  )
}
