import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

// --- configuración dinámica según entorno ----------------
const OWNER_EMAIL = process.env.RESEND_OWNER_EMAIL ?? "marangonii.abril@gmail.com"
const VERIFIED_FROM = process.env.RESEND_FROM // ej. "TRAZO <contacto@tudominio.com>"
const IS_SANDBOX = !VERIFIED_FROM // si no hay dominio verificado → sandbox

// en sandbox SOLO podemos enviar al correo del propietario
const FROM_ADDRESS = IS_SANDBOX ? "onboarding@resend.dev" : VERIFIED_FROM!
const RECIPIENTS = IS_SANDBOX ? [OWNER_EMAIL] : ["Holatrazo@gmail.com"]

export async function POST(request: NextRequest) {
  try {
    const { name, email, projectType, message } = await request.json()

    // Validate required fields
    if (!name || !email || !projectType || !message) {
      return NextResponse.json({ error: "Todos los campos son requeridos" }, { status: 400 })
    }

    // Send email to TRAZO
    const { data, error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: RECIPIENTS,
      subject: `Nuevo contacto desde la web - ${projectType}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f3f2f3;">
          <div style="background-color: white; padding: 40px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #212f35; font-size: 32px; font-weight: 300; letter-spacing: 0.2em; margin: 0;">TRAZO</h1>
              <div style="width: 60px; height: 2px; background-color: #b4a66d; margin: 10px auto;"></div>
              <p style="color: #3d555b; font-size: 16px; margin: 0;">Nuevo mensaje desde la web</p>
            </div>
            
            <div style="background-color: #f8f9fa; padding: 30px; border-radius: 8px; margin-bottom: 20px;">
              <h2 style="color: #212f35; font-size: 20px; margin-bottom: 20px; font-weight: 400;">Información del Cliente</h2>
              
              <div style="margin-bottom: 15px;">
                <strong style="color: #3d555b;">Nombre:</strong>
                <span style="color: #212f35; margin-left: 10px;">${name}</span>
              </div>
              
              <div style="margin-bottom: 15px;">
                <strong style="color: #3d555b;">Email:</strong>
                <span style="color: #212f35; margin-left: 10px;">${email}</span>
              </div>
              
              <div style="margin-bottom: 15px;">
                <strong style="color: #3d555b;">Tipo de Proyecto:</strong>
                <span style="color: #212f35; margin-left: 10px; background-color: #3d555b; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; text-transform: uppercase;">${projectType}</span>
              </div>
            </div>
            
            <div style="background-color: #f8f9fa; padding: 30px; border-radius: 8px;">
              <h3 style="color: #212f35; font-size: 18px; margin-bottom: 15px; font-weight: 400;">Mensaje del Cliente</h3>
              <div style="background-color: white; padding: 20px; border-radius: 6px; border-left: 4px solid #3d555b;">
                <p style="color: #212f35; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ded7cd;">
              <p style="color: #666; font-size: 14px; margin: 0;">
                Este mensaje fue enviado desde el formulario de contacto de <strong>trazoarq.com</strong>
              </p>
              <p style="color: #666; font-size: 12px; margin: 10px 0 0 0;">
                Fecha: ${new Date().toLocaleDateString("es-AR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error("Error sending email:", error)
      return NextResponse.json({ error: "Error al enviar el email" }, { status: 500 })
    }

    // Send confirmation email to the client
    await resend.emails.send({
      from: FROM_ADDRESS,
      to: [email],
      subject: "Gracias por contactarnos - TRAZO Arquitectura",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f3f2f3;">
          <div style="background-color: white; padding: 40px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #212f35; font-size: 32px; font-weight: 300; letter-spacing: 0.2em; margin: 0;">TRAZO</h1>
              <div style="width: 60px; height: 2px; background-color: #b4a66d; margin: 10px auto;"></div>
              <p style="color: #3d555b; font-size: 16px; margin: 0;">Estudio de Arquitectura</p>
            </div>
            
            <div style="text-align: center; margin-bottom: 30px;">
              <h2 style="color: #212f35; font-size: 24px; margin-bottom: 15px; font-weight: 400;">¡Gracias por contactarnos!</h2>
              <p style="color: #666; font-size: 16px; line-height: 1.6;">
                Hola <strong>${name}</strong>,<br><br>
                Hemos recibido tu mensaje sobre tu proyecto de <strong>${projectType}</strong>. 
                Nuestro equipo lo revisará y te contactaremos pronto para conversar sobre tu visión.
              </p>
            </div>
            
            <div style="background-color: #f8f9fa; padding: 25px; border-radius: 8px; margin-bottom: 25px;">
              <h3 style="color: #3d555b; font-size: 16px; margin-bottom: 15px; font-weight: 500;">¿Qué sigue?</h3>
              <ul style="color: #666; line-height: 1.8; padding-left: 20px;">
                <li>Revisaremos tu proyecto en detalle</li>
                <li>Te contactaremos en las próximas 24-48 horas</li>
                <li>Programaremos una reunión para conocer más sobre tu visión</li>
                <li>Desarrollaremos una propuesta personalizada</li>
              </ul>
            </div>
            
            <div style="text-align: center; background-color: #3d555b; color: white; padding: 20px; border-radius: 8px;">
              <p style="margin: 0; font-size: 14px;">
                <strong>TRAZO Arquitectura</strong><br>
                Mar del Plata, Buenos Aires<br>
                Holatrazo@gmail.com
              </p>
            </div>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error in contact API:", error)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
