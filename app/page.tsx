"use client"

import type React from "react"

import Image from "next/image"
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Award,
  Users,
  Calendar,
  ArrowUpRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useState } from "react"
import emailjs from "@emailjs/browser"

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    setIsVisible(true)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    const form = e.currentTarget
    const formData = new FormData(form)

    // Configuración de EmailJS
    const templateParams = {
      from_name: formData.get("name"),
      from_email: formData.get("email"),
      phone: formData.get("phone"),
      project_type: formData.get("project_type"),
      message: formData.get("message"),
      referral_source: formData.get("referral_source"),
      to_email: "holatrazo@gmail.com",
    }

    try {
      // Enviar email a TRAZO
      await emailjs.send(
        "service_sfog3pq", // Tu Service ID
        "template_trazo_contact", // Tu Template ID
        {
          from_name: formData.get("name"),
          from_email: formData.get("email"),
          phone: formData.get("phone") || "No proporcionado",
          project_type: formData.get("project_type"),
          message: formData.get("message"),
          referral_source: formData.get("referral_source") || "No especificado",
          to_email: "holatrazo@gmail.com",
        },
        "o6p6P2595DrqtDRWW", // Tu Public Key
      )

      setSubmitStatus("success")
      form.reset()
    } catch (error) {
      console.error("Error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-cream overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-cream/95 backdrop-blur-xl border-b border-warm-beige/30 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="text-3xl font-extralight tracking-[0.2em] text-charcoal">TRAZO</div>
            <div className="hidden md:flex items-center space-x-12 text-sm font-light tracking-wide">
              <a href="#inicio" className="text-charcoal hover:text-teal transition-all duration-300 relative group">
                Inicio
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#estudio" className="text-charcoal hover:text-teal transition-all duration-300 relative group">
                Estudio
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#proyectos" className="text-charcoal hover:text-teal transition-all duration-300 relative group">
                Proyectos
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#contacto" className="text-charcoal hover:text-teal transition-all duration-300 relative group">
                Contacto
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with Parallax */}
        <div className="absolute inset-0 z-0" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
          <Image
            src="/images/hero-architecture.png"
            alt="Arquitectura moderna costera"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cream/80 via-cream/60 to-cream/90"></div>
        </div>

        {/* Geometric Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 border border-olive/30 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-teal/10 rotate-12"></div>
        <div className="absolute top-1/3 left-1/4 w-2 h-20 bg-olive/40"></div>

        <div
          className={`relative z-10 max-w-6xl mx-auto px-6 text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="space-y-12">
            <div className="space-y-8">
              <h1 className="text-8xl lg:text-9xl font-extralight text-charcoal leading-none tracking-wider">TRAZO</h1>
              <div className="flex items-center justify-center space-x-8">
                <div className="w-32 h-0.5 bg-olive"></div>
                <p className="text-2xl font-light text-teal tracking-[0.3em] uppercase">Arquitectura</p>
                <div className="w-32 h-0.5 bg-olive"></div>
              </div>
            </div>

            <p className="text-xl lg:text-2xl text-charcoal/80 font-light leading-relaxed max-w-4xl mx-auto">
              Creamos espacios únicos que abrazan la esencia costera de Mar del Plata,
              <br className="hidden lg:block" />
              fusionando <span className="text-teal font-medium">modernidad</span> y{" "}
              <span className="text-olive font-medium">calidez</span> en cada proyecto.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <Button className="bg-teal hover:bg-teal/90 text-cream px-12 py-6 text-lg font-light tracking-wide group transition-all duration-300 hover:scale-105">
                Explorar Proyectos
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-cream px-12 py-6 text-lg font-light tracking-wide transition-all duration-300 bg-transparent"
              >
                Conocer Estudio
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-charcoal/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-charcoal/30 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 bg-charcoal">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Proyectos Realizados", icon: Award },
              { number: "8", label: "Años de Experiencia", icon: Calendar },
              { number: "3", label: "Arquitectos Especialistas", icon: Users },
              { number: "100%", label: "Satisfacción Cliente", icon: ArrowUpRight },
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-4 group">
                <div className="w-16 h-16 bg-teal/20 rounded-full mx-auto flex items-center justify-center group-hover:bg-teal/30 transition-colors">
                  <stat.icon className="w-8 h-8 text-teal" />
                </div>
                <div className="text-4xl font-extralight text-cream">{stat.number}</div>
                <div className="text-cream/70 font-light text-sm tracking-wide uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="estudio" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-warm-beige/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="space-y-6">
                <div className="inline-block">
                  <h2 className="text-5xl lg:text-6xl font-extralight text-charcoal leading-tight">
                    Nuestro
                    <br />
                    <span className="text-teal">Estudio</span>
                  </h2>
                  <div className="w-24 h-1 bg-olive mt-4"></div>
                </div>
              </div>

              <div className="space-y-8 text-lg text-charcoal/80 font-light leading-relaxed">
                <p className="text-xl">
                  Ubicados en el corazón de <span className="text-teal font-medium">Mar del Plata</span>, TRAZO nace de
                  la pasión por crear arquitectura que dialogue con el paisaje costero y las necesidades contemporáneas.
                </p>
                <p>
                  Cada proyecto es una oportunidad de explorar nuevas formas de habitar, siempre con respeto por el
                  entorno y la funcionalidad. Creemos en el diseño como herramienta de transformación social y
                  ambiental.
                </p>
                <p>
                  Nuestro enfoque integral abarca desde la conceptualización hasta la materialización, garantizando
                  coherencia y calidad en cada etapa del proceso creativo.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-8">
                <div className="space-y-2">
                  <div className="text-3xl font-extralight text-teal">Diseño</div>
                  <div className="text-charcoal/60 font-light">Integral y funcional</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-extralight text-olive">Sustentable</div>
                  <div className="text-charcoal/60 font-light">Conciencia ambiental</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="aspect-square bg-teal/10 rounded-lg overflow-hidden group">
                    <Image
                      src="/modern-architectural-sketches.png"
                      alt="Bocetos arquitectónicos"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="aspect-[4/3] bg-olive/10 rounded-lg overflow-hidden group">
                    <Image
                      src="/coastal-building-detail.png"
                      alt="Detalle arquitectónico"
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className="space-y-6 pt-12">
                  <div className="aspect-[4/3] bg-warm-beige/40 rounded-lg overflow-hidden group">
                    <Image
                      src="/mar-del-plata-coast.png"
                      alt="Paisaje costero Mar del Plata"
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="aspect-square bg-charcoal/5 rounded-lg overflow-hidden group">
                    <Image
                      src="/natural-building-materials.png"
                      alt="Materiales arquitectónicos"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>

              {/* Floating Element */}
              <div className="absolute -top-8 -right-8 w-32 h-32 border-2 border-olive/20 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-warm-beige/30 to-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-20">
            <h2 className="text-5xl lg:text-6xl font-extralight text-charcoal">
              Nuestro <span className="text-teal">Equipo</span>
            </h2>
            <div className="w-24 h-1 bg-olive mx-auto"></div>
            <p className="text-xl text-charcoal/70 font-light max-w-3xl mx-auto leading-relaxed">
              Un equipo joven y apasionado que combina creatividad, experiencia y visión contemporánea
            </p>
          </div>

          {/* Team Photo */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="aspect-[16/10] bg-warm-beige/20 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/team-photo.jpg"
                alt="Equipo TRAZO - Agostina, Franco y Mateo"
                width={1000}
                height={625}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </div>

          {/* Team Story */}
          <div className="max-w-5xl mx-auto space-y-10 text-center mb-20">
            <div className="space-y-8 text-charcoal/80 font-light leading-relaxed">
              <p className="text-2xl font-light text-charcoal">
                Nace de la pasión compartida por el diseño y la arquitectura de{" "}
                <span className="text-teal font-medium">Agostina</span>,{" "}
                <span className="text-olive font-medium">Franco</span> y{" "}
                <span className="text-teal font-medium">Mateo</span>.
              </p>
              <p className="text-lg">
                Lo que comenzó como una idea entre hermanos y amigos, hoy se materializa en un estudio de Arquitectura
                comprometido con la excelencia y la innovación.
              </p>
              <p className="text-lg">
                Nuestra identidad se construye a partir del compromiso, la seriedad en nuestro trabajo y el desarrollo
                de proyectos integrales que armonicen imagen, función y entorno.
              </p>
              <div className="bg-teal/10 rounded-2xl p-8 mt-12">
                <p className="text-xl text-teal font-medium italic">
                  "Creemos en el diseño original como un sello propio y en la conciencia ambiental como un pilar
                  esencial de nuestra práctica."
                </p>
              </div>
            </div>
          </div>

          {/* Team Members */}
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                name: "Agostina",
                role: "Co-Fundadora & Arquitecta",
                description:
                  "Especializada en diseño integral y desarrollo de proyectos que armonizan función y estética costera.",
                color: "teal",
              },
              {
                name: "Franco",
                role: "Co-Fundador & Arquitecto",
                description:
                  "Enfocado en la innovación arquitectónica y el desarrollo de soluciones sustentables para el litoral.",
                color: "olive",
              },
              {
                name: "Mateo",
                role: "Co-Fundador & Arquitecto",
                description: "Experto en integración de diseño original con conciencia ambiental y materiales locales.",
                color: "teal",
              },
            ].map((member, index) => (
              <Card
                key={index}
                className="border-0 bg-white/50 hover:bg-white/80 transition-all duration-300 hover:shadow-xl group"
              >
                <CardContent className="p-8 text-center space-y-6">
                  <div
                    className={`w-20 h-20 bg-${member.color}/20 rounded-full mx-auto flex items-center justify-center group-hover:bg-${member.color}/30 transition-colors`}
                  >
                    <div className={`w-10 h-10 bg-${member.color} rounded-full`}></div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-light text-charcoal mb-2">{member.name}</h3>
                    <p className={`text-${member.color} font-light text-sm tracking-wide uppercase`}>{member.role}</p>
                  </div>
                  <p className="text-charcoal/70 font-light leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-6 bg-charcoal relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <Image src="/abstract-geometric-shapes.png" alt="Geometric pattern" fill className="object-cover" />
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center space-y-6 mb-20">
            <h2 className="text-5xl lg:text-6xl font-extralight text-cream">
              Nuestros <span className="text-teal">Servicios</span>
            </h2>
            <div className="w-24 h-1 bg-olive mx-auto"></div>
            <p className="text-xl text-cream/70 font-light max-w-3xl mx-auto leading-relaxed">
              Soluciones arquitectónicas integrales para cada necesidad
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Diseño Arquitectónico",
                description:
                  "Proyectos residenciales y comerciales que reflejan la identidad costera de Mar del Plata.",
                icon: "🏗️",
              },
              {
                title: "Interiorismo",
                description:
                  "Espacios interiores que conectan con el exterior, maximizando la luz natural y las vistas al mar.",
                icon: "🏠",
              },
              {
                title: "Consultoría Especializada",
                description: "Asesoramiento técnico y creativo en todas las fases del proyecto arquitectónico.",
                icon: "💡",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="border-0 bg-cream/10 hover:bg-cream/20 transition-all duration-300 group hover:scale-105"
              >
                <CardContent className="p-10 space-y-6 text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-light text-cream group-hover:text-teal transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-cream/70 font-light leading-relaxed">{service.description}</p>
                  <div className="pt-4">
                    <Button
                      variant="ghost"
                      className="text-teal hover:bg-teal/20 group-hover:translate-x-2 transition-all"
                    >
                      Saber más <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-20">
            <h2 className="text-5xl lg:text-6xl font-extralight text-charcoal">
              Proyectos <span className="text-teal">Destacados</span>
            </h2>
            <div className="w-24 h-1 bg-olive mx-auto"></div>
            <p className="text-xl text-charcoal/70 font-light max-w-3xl mx-auto leading-relaxed">
              Cada proyecto cuenta una historia única de diseño, funcionalidad y conexión con el entorno costero
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Featured Project */}
            <div className="lg:col-span-2">
              <div className="group cursor-pointer">
                <div className="aspect-[16/9] bg-warm-beige/20 rounded-2xl overflow-hidden mb-8 shadow-2xl">
                  <Image
                    src="/images/casa-costera-project.png"
                    alt="Casa Costera - Proyecto destacado"
                    width={1200}
                    height={675}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-teal rounded-full"></div>
                      <span className="text-sm text-charcoal/60 font-light tracking-wide uppercase">
                        Proyecto Destacado
                      </span>
                    </div>
                    <h3 className="text-3xl font-light text-charcoal">Casa Costera Moderna</h3>
                    <p className="text-charcoal/70 font-light leading-relaxed">
                      Una residencia que abraza el paisaje marítimo de Mar del Plata, integrando espacios abiertos con
                      vistas panorámicas al océano.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-charcoal/60 font-light">Ubicación</div>
                        <div className="text-charcoal font-medium">Mar del Plata</div>
                      </div>
                      <div>
                        <div className="text-charcoal/60 font-light">Año</div>
                        <div className="text-charcoal font-medium">2024</div>
                      </div>
                      <div>
                        <div className="text-charcoal/60 font-light">Superficie</div>
                        <div className="text-charcoal font-medium">280 m²</div>
                      </div>
                      <div>
                        <div className="text-charcoal/60 font-light">Tipo</div>
                        <div className="text-charcoal font-medium">Residencial</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Estudio Urbano Minimalista",
                location: "Centro, Mar del Plata",
                image: "/images/estudio-urbano-project.png",
                description: "Espacio de trabajo contemporáneo que maximiza la funcionalidad en el corazón urbano.",
              },
              {
                title: "Residencia Familiar Costera",
                location: "Playa Grande",
                image: "/images/residencia-familiar-project.png",
                description:
                  "Hogar familiar que celebra la vida costera con espacios amplios y conexión directa con la naturaleza.",
              },
            ].map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-[4/3] bg-warm-beige/20 rounded-xl overflow-hidden mb-6 shadow-xl">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={450}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-light text-charcoal group-hover:text-teal transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="h-5 w-5 text-charcoal/40 group-hover:text-teal group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                  <p className="text-sm text-charcoal/60 font-light">{project.location}</p>
                  <p className="text-charcoal/70 font-light text-sm leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button className="bg-teal hover:bg-teal/90 text-cream px-12 py-6 text-lg font-light tracking-wide group">
              Ver Todos los Proyectos
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-32 px-6 bg-gradient-to-br from-warm-beige/40 to-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-20">
            <h2 className="text-5xl lg:text-6xl font-extralight text-charcoal">
              Hablemos de tu <span className="text-teal">Proyecto</span>
            </h2>
            <div className="w-24 h-1 bg-olive mx-auto"></div>
            <p className="text-xl text-charcoal/70 font-light max-w-3xl mx-auto leading-relaxed">
              Estamos listos para transformar tus ideas en espacios únicos que reflejen tu visión
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20">
            <div className="space-y-12">
              <div className="space-y-8">
                <p className="text-lg text-charcoal/80 font-light leading-relaxed">
                  Cada proyecto comienza con una conversación. Nos encanta conocer tus ideas, necesidades y sueños para
                  crear juntos algo extraordinario.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start space-x-6 group">
                    <div className="w-12 h-12 bg-teal/20 rounded-full flex items-center justify-center group-hover:bg-teal/30 transition-colors">
                      <MapPin className="h-6 w-6 text-teal" />
                    </div>
                    <div className="space-y-2">
                      <div className="text-charcoal font-medium">Ubicación</div>
                      <div className="text-charcoal/70 font-light">
                        Mar del Plata, Buenos Aires
                        <br />
                        Argentina
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6 group">
                    <div className="w-12 h-12 bg-teal/20 rounded-full flex items-center justify-center group-hover:bg-teal/30 transition-colors">
                      <Phone className="h-6 w-6 text-teal" />
                    </div>
                    <div className="space-y-2">
                      <div className="text-charcoal font-medium">Teléfono</div>
                      <div className="text-charcoal/70 font-light">+54 223 XXX-XXXX</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6 group">
                    <div className="w-12 h-12 bg-teal/20 rounded-full flex items-center justify-center group-hover:bg-teal/30 transition-colors">
                      <Mail className="h-6 w-6 text-teal" />
                    </div>
                    <div className="space-y-2">
                      <div className="text-charcoal font-medium">Email</div>
                      <div className="text-charcoal/70 font-light">Holatrazo@gmail.com</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="text-charcoal font-medium">Síguenos</div>
                <div className="flex space-x-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-12 h-12 text-teal hover:bg-teal/20 hover:scale-110 transition-all"
                  >
                    <Instagram className="h-6 w-6" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-12 h-12 text-teal hover:bg-teal/20 hover:scale-110 transition-all"
                  >
                    <Linkedin className="h-6 w-6" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-10 shadow-2xl">
              {/* EmailJS Form */}
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="text-sm font-medium text-charcoal tracking-wide">Nombre</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full p-4 bg-cream/50 border border-warm-beige rounded-lg focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-medium text-charcoal tracking-wide">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full p-4 bg-cream/50 border border-warm-beige rounded-lg focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-medium text-charcoal tracking-wide">Teléfono</label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full p-4 bg-cream/50 border border-warm-beige rounded-lg focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all"
                    placeholder="+54 223 XXX-XXXX"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-medium text-charcoal tracking-wide">Tipo de Proyecto</label>
                  <select
                    name="project_type"
                    required
                    className="w-full p-4 bg-cream/50 border border-warm-beige rounded-lg focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="🏠 Residencial">🏠 Residencial</option>
                    <option value="🏢 Comercial">🏢 Comercial</option>
                    <option value="🎨 Interiorismo">🎨 Interiorismo</option>
                    <option value="💡 Consultoría">💡 Consultoría</option>
                    <option value="🔧 Remodelación">🔧 Remodelación</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-medium text-charcoal tracking-wide">Mensaje</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="w-full p-4 bg-cream/50 border border-warm-beige rounded-lg focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 resize-none transition-all"
                    placeholder="Cuéntanos sobre tu proyecto, ubicación, presupuesto estimado y cualquier detalle importante..."
                  ></textarea>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-medium text-charcoal tracking-wide">¿Cómo nos conociste?</label>
                  <select
                    name="referral_source"
                    className="w-full p-4 bg-cream/50 border border-warm-beige rounded-lg focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="Google">Google</option>
                    <option value="Instagram">Instagram</option>
                    <option value="Recomendación">Recomendación</option>
                    <option value="LinkedIn">LinkedIn</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-teal hover:bg-teal/90 disabled:bg-teal/50 text-cream py-4 text-lg font-light tracking-wide hover:scale-105 disabled:hover:scale-100 transition-all rounded-lg flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-cream mr-3"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar Mensaje
                      <ArrowRight className="ml-3 h-5 w-5" />
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                    <p className="text-green-800 font-medium">¡Mensaje enviado correctamente!</p>
                    <p className="text-green-600 text-sm mt-1">Te contactaremos pronto.</p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
                    <p className="text-red-800 font-medium">Error al enviar el mensaje</p>
                    <p className="text-red-600 text-sm mt-1">
                      Por favor, intenta nuevamente o contáctanos directamente.
                    </p>
                  </div>
                )}

                <p className="text-xs text-charcoal/60 text-center">
                  Al enviar este formulario, aceptas que TRAZO se ponga en contacto contigo para discutir tu proyecto.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-charcoal">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <div className="text-4xl font-extralight tracking-[0.3em] text-cream">TRAZO</div>
            <div className="w-24 h-0.5 bg-teal mx-auto"></div>
            <p className="text-cream/60 font-light text-lg">Estudio de Arquitectura • Mar del Plata, Argentina</p>
            <p className="text-cream/40 font-light text-sm">© 2024 TRAZO. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
