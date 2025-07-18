"use client"
import Link from "next/link"
import { CheckCircle, ArrowLeft, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function GraciasPage() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center space-y-12">
        {/* Success Icon */}
        <div className="flex justify-center">
          <div className="w-24 h-24 bg-teal/20 rounded-full flex items-center justify-center">
            <CheckCircle className="w-12 h-12 text-teal" />
          </div>
        </div>

        {/* Main Message */}
        <div className="space-y-6">
          <div className="text-4xl font-extralight tracking-[0.2em] text-charcoal">TRAZO</div>
          <div className="w-24 h-1 bg-olive mx-auto"></div>

          <h1 className="text-4xl lg:text-5xl font-extralight text-charcoal leading-tight">
            ¡Gracias por <span className="text-teal">contactarnos</span>!
          </h1>

          <p className="text-xl text-charcoal/80 font-light leading-relaxed max-w-xl mx-auto">
            Hemos recibido tu mensaje correctamente. Nuestro equipo lo revisará y te contactaremos pronto para conversar
            sobre tu proyecto.
          </p>
        </div>

        {/* Next Steps */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 space-y-6">
          <h2 className="text-2xl font-light text-charcoal">¿Qué sigue?</h2>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-teal/20 rounded-full flex items-center justify-center">
                  <span className="text-teal font-medium text-sm">1</span>
                </div>
                <span className="text-charcoal font-medium">Revisión del proyecto</span>
              </div>
              <p className="text-charcoal/70 text-sm ml-11">Analizaremos tu solicitud en detalle</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-teal/20 rounded-full flex items-center justify-center">
                  <span className="text-teal font-medium text-sm">2</span>
                </div>
                <span className="text-charcoal font-medium">Contacto inicial</span>
              </div>
              <p className="text-charcoal/70 text-sm ml-11">Te contactaremos en 24-48 horas</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-teal/20 rounded-full flex items-center justify-center">
                  <span className="text-teal font-medium text-sm">3</span>
                </div>
                <span className="text-charcoal font-medium">Reunión inicial</span>
              </div>
              <p className="text-charcoal/70 text-sm ml-11">Programaremos una cita para conocer tu visión</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-teal/20 rounded-full flex items-center justify-center">
                  <span className="text-teal font-medium text-sm">4</span>
                </div>
                <span className="text-charcoal font-medium">Propuesta personalizada</span>
              </div>
              <p className="text-charcoal/70 text-sm ml-11">Desarrollaremos una solución única para ti</p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <p className="text-charcoal/70 font-light">
            Si tienes alguna pregunta urgente, no dudes en contactarnos directamente:
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-teal" />
              <span className="text-charcoal font-medium">Holatrazo@gmail.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-teal" />
              <span className="text-charcoal font-medium">+54 223 XXX-XXXX</span>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="pt-8">
          <Link href="/">
            <Button className="bg-teal hover:bg-teal/90 text-cream px-8 py-3 font-light tracking-wide group">
              <ArrowLeft className="mr-3 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
              Volver al Inicio
            </Button>
          </Link>
        </div>

        {/* Footer */}
        <div className="pt-12 border-t border-warm-beige/30">
          <p className="text-charcoal/40 font-light text-sm">© 2024 TRAZO Arquitectura • Mar del Plata, Argentina</p>
        </div>
      </div>
    </div>
  )
}
