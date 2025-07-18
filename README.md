# TRAZO - Estudio de Arquitectura

Sitio web oficial del estudio de arquitectura TRAZO, especializado en diseño costero moderno en Mar del Plata, Argentina.

## 🏗️ Características

- **Diseño Responsivo**: Optimizado para todos los dispositivos
- **Animaciones Suaves**: Efectos parallax y transiciones elegantes
- **Formulario de Contacto**: Integración con EmailJS para consultas
- **SEO Optimizado**: Metadatos y estructura optimizada para buscadores
- **Performance**: Carga rápida y optimizada

## 🚀 Tecnologías

- **Next.js 14**: Framework de React con App Router
- **TypeScript**: Tipado estático para mayor robustez
- **Tailwind CSS**: Framework de CSS utilitario
- **shadcn/ui**: Componentes de UI modernos
- **EmailJS**: Servicio de envío de emails
- **Lucide React**: Iconos modernos

## 📦 Instalación

1. Clona el repositorio:
\`\`\`bash
git clone https://github.com/tu-usuario/trazo-arquitectura.git
cd trazo-arquitectura
\`\`\`

2. Instala las dependencias:
\`\`\`bash
npm install
\`\`\`

3. Ejecuta el servidor de desarrollo:
\`\`\`bash
npm run dev
\`\`\`

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🎨 Paleta de Colores

- **Cream**: `#f3f2f3` - Color de fondo principal
- **Warm Beige**: `#ded7cd` - Tonos cálidos
- **Olive**: `#b4a66d` - Acentos dorados
- **Teal**: `#3d555b` - Color principal de marca
- **Charcoal**: `#212f35` - Textos y elementos oscuros

## 📧 Configuración de EmailJS

Para que el formulario de contacto funcione, necesitas configurar EmailJS:

1. Crea una cuenta en [EmailJS](https://www.emailjs.com/)
2. Configura un servicio de email (Gmail recomendado)
3. Crea un template de email
4. Actualiza las credenciales en `app/page.tsx`:
   - `service_sfog3pq`: Tu Service ID
   - `template_trazo_contact`: Tu Template ID
   - `o6p6P2595DrqtDRWW`: Tu Public Key

## 🚀 Despliegue

El sitio está configurado para desplegarse automáticamente en Vercel:

1. Conecta tu repositorio de GitHub con Vercel
2. Las variables de entorno se configuran automáticamente
3. Cada push a `main` despliega automáticamente

## 📱 Secciones del Sitio

- **Hero**: Presentación principal con parallax
- **Estadísticas**: Números clave del estudio
- **Sobre Nosotros**: Historia y filosofía del estudio
- **Equipo**: Presentación de Agostina, Franco y Mateo
- **Servicios**: Servicios ofrecidos por el estudio
- **Proyectos**: Portfolio de trabajos destacados
- **Contacto**: Formulario y información de contacto

## 🎯 SEO y Performance

- Metadatos optimizados para SEO
- Imágenes optimizadas con Next.js Image
- Lazy loading automático
- Core Web Vitals optimizados
- Sitemap automático

## 📄 Licencia

© 2024 TRAZO Arquitectura. Todos los derechos reservados.

## 🤝 Contacto

- **Email**: holatrazo@gmail.com
- **Ubicación**: Mar del Plata, Buenos Aires, Argentina
- **Website**: [trazo-arquitectura.vercel.app](https://trazo-arquitectura.vercel.app)
