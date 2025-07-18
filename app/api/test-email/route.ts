import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function GET() {
  try {
    const { data, error } = await resend.emails.send({
      from: "TRAZO Test <onboarding@resend.dev>",
      to: ["Holatrazo@gmail.com"],
      subject: "🧪 Test de configuración - TRAZO",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f3f2f3;">
          <div style="background-color: white; padding: 30px; border-radius: 10px;">
            <h1 style="color: #212f35; text-align: center;">TRAZO</h1>
            <p>✅ La configuración de emails está funcionando correctamente!</p>
            <p>Fecha: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
    })

    if (error) {
      return NextResponse.json({ error: error }, { status: 500 })
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 })
  }
}
