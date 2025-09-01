import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request){
  try{
    const body = await req.json();
    if(!body?.nome || !body?.telefone){
      return NextResponse.json({ok:false, error:"dados inválidos"}, {status:400});
    }
    const transporter = process.env.SMTP_HOST ? nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: (process.env.SMTP_SECURE === 'true'),
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
    }) : null;

    if(transporter){
      await transporter.sendMail({
        from: `Site Jacque <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
        to: process.env.LEAD_TO || process.env.SMTP_FROM || process.env.SMTP_USER,
        subject: "Novo lead do site",
        html: `<h2>Novo lead Jacque Parfum</h2>
          <p><b>Nome:</b> ${body.nome}</p>
          <p><b>Telefone:</b> ${body.telefone}</p>
          <p><b>Mensagem:</b> ${body.mensagem || "-"}</p>
          <p><b>Origem:</b> ${body.origem || "site"}</p>`
      });
    }
    return NextResponse.json({ok:true});
  }catch(e:any){
    return NextResponse.json({ok:false, error:e?.message || 'erro'}, {status:500});
  }
}
