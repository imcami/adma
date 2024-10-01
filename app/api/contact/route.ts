
import { NextResponse } from "next/server";
import { Resend } from 'resend';

// const resend = new Resend('re_GtmiiBu2_NTWfYBDPMV1eLox111sppzu1');

const resend = new Resend('re_i9c5nzDt_8eBDxq8mxAEHrtRjk7V5ApsC');

export async function POST(req: Request) {
    try {
     const { name, email, message } = await req.json();

     const data = await resend.emails.send({
         from: 'onboarding@resend.dev',
         to:  'adma.reph@gmail.com' , 
         subject: 'ADMA WEBSITE',
         text: `Nombre: ${name} \nEmail: ${email}\nMensaje: ${message}/n date: ${new Date().toISOString()}`,            
        });

       
        return NextResponse.json({ status: 'success', message: 'Correo enviado correctamente.', data });
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        return NextResponse.json({ status: 'error', message: 'No se pudo enviar el correo.' });
    }
}
