// services.component.ts
import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  @ViewChild('aboutContainer') aboutContainer!: ElementRef;

  services = [
    {
      id: 'total-waste-management',
      title: 'Total Waste Management (TWM)',
      description: 'Gestión integral de residuos que incluye recolección, transporte, tratamiento y disposición final de todos los tipos de residuos industriales, garantizando el cumplimiento normativo y la máxima eficiencia.',
      image: 'https://images.unsplash.com/photo-1589923188937-cb64779f4abe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: 'trash-alt',
      subtitle: 'Ofrecemos un único proveedor para todos sus residuos, garantizando gestión licenciada, responsable y económicamente viable.',
      process: [
        {
          title: 'Evaluación Inicial',
          description: 'Análisis completo de los residuos generados por su empresa y diseño de un plan personalizado.'
        },
        {
          title: 'Recolección y Transporte',
          description: 'Logística especializada para la recolección y transporte seguro de todos los tipos de residuos.'
        },
        {
          title: 'Clasificación y Procesamiento',
          description: 'Separación de materiales aprovechables y preparación para su valorización o disposición final.'
        },
        {
          title: 'Gestión Documental',
          description: 'Entrega de certificados y documentación necesaria para el cumplimiento normativo.'
        }
      ],
      benefits: [
        'Un solo proveedor para múltiples servicios',
        'Ahorro en costos logísticos',
        'Manejo responsable de residuos aprovechables',
        'Inclusión en procesos de economía circular'
      ],
      results: [
        'Cumplimiento normativo garantizado',
        'Reducción de impactos ambientales',
        'Generación de ingresos por materiales valorizables',
        'Protección de marca y reputación corporativa'
      ]
    },
    {
      id: 'valorizacion-excedentes',
      title: 'Valorización de Excedentes Industriales',
      description: 'Identificación, clasificación y comercialización de excedentes industriales y materias primas para maximizar su valor económico y reducir el impacto ambiental.',
      image: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: 'recycle',
      subtitle: 'Transformamos sus residuos en recursos valiosos mediante procesos de valorización especializados.',
      process: [
        {
          title: 'Caracterización de Materiales',
          description: 'Identificación y clasificación de excedentes con potencial de valorización.'
        },
        {
          title: 'Evaluación de Mercado',
          description: 'Análisis de oportunidades comerciales para los materiales valorizables.'
        },
        {
          title: 'Preparación y Acondicionamiento',
          description: 'Procesamiento de materiales para cumplir con especificaciones de mercado.'
        },
        {
          title: 'Comercialización y Entrega',
          description: 'Gestión de venta y logística de entrega a clientes interesados.'
        }
      ],
      benefits: [
        'Generación de ingresos por materiales considerados como residuos',
        'Reducción de costos de disposición final',
        'Contribución a la economía circular',
        'Minimización del impacto ambiental'
      ],
      results: [
        'Maximización del valor económico de excedentes',
        'Reducción de volumen de residuos enviados a disposición final',
        'Cumplimiento de metas de sostenibilidad corporativa',
        'Fortalecimiento de imagen verde empresarial'
      ]
    },
    {
      id: 'remediacion-suelos',
      title: 'Remediación de Suelos',
      description: 'Técnicas avanzadas para la recuperación de suelos contaminados mediante procesos físico-químicos y biológicos, restaurando su calidad y aptitud para uso industrial o natural.',
      image: 'https://images.unsplash.com/photo-1581578021517-5d8ad8597852?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: 'leaf',
      subtitle: 'Expertos en recuperación de sitios contaminados, respaldados por la Ley de Pasivos Ambientales.',
      process: [
        {
          title: 'Diagnóstico y Caracterización',
          description: 'Evaluación inicial del sitio y determinación del tipo y nivel de contaminación.'
        },
        {
          title: 'Diseño del Plan de Remedación',
          description: 'Desarrollo de estrategias específicas según el tipo de contaminante y condiciones del terreno.'
        },
        {
          title: 'Ejecución de Técnicas de Remedación',
          description: 'Aplicación de métodos físico-químicos, biológicos o térmicos según requerimientos.'
        },
        {
          title: 'Monitoreo y Verificación',
          description: 'Seguimiento continuo y validación de la efectividad del proceso de remediación.'
        }
      ],
      benefits: [
        'Cumplimiento de la Ley de Pasivos Ambientales (Ley 2327 de 2023)',
        'Recuperación de terrenos para uso productivo',
        'Mitigación de riesgos para la salud y el ambiente',
        'Valorización de propiedades contaminadas'
      ],
      results: [
        'Suelos restaurados a condiciones aptas para uso definido',
        'Cumplimiento de normativas ambientales vigentes',
        'Eliminación de pasivos ambientales corporativos',
        'Habilitación de terrenos para proyectos de desarrollo'
      ]
    },
    {
      id: 'atencion-emergencias',
      title: 'Atención de Emergencias',
      description: 'Servicio 24/7 para la contención y remediación de emergencias ambientales como incendios, derrames químicos e inundaciones, minimizando impactos y riesgos.',
      image: 'https://images.unsplash.com/photo-1593113630400-ea4288922497?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: 'exclamation-triangle',
      subtitle: 'Respuesta inmediata las 24 horas para contener y remediar emergencias ambientales.',
      process: [
        {
          title: 'Evaluación Inmediata',
          description: 'Desplazamiento rápido al sitio para evaluar la magnitud de la emergencia.'
        },
        {
          title: 'Contención Primaria',
          description: 'Implementación de medidas para evitar la propagación del incidente.'
        },
        {
          title: 'Manejo de Materiales Peligrosos',
          description: 'Recolección y gestión segura de sustancias derramadas o contaminadas.'
        },
        {
          title: 'Limpieza y Restauración',
          description: 'Decontaminación del área afectada y restablecimiento de condiciones normales.'
        }
      ],
      benefits: [
        'Respuesta inmediata 24/7/365',
        'Personal especializado en manejo de emergencias',
        'Equipos y materiales para contención y remediación',
        'Coordinación con autoridades y ajustadores de seguros'
      ],
      results: [
        'Minimización de impactos ambientales',
        'Reducción de lucro cesante para las empresas',
        'Cumplimiento de protocolos de emergencia',
        'Documentación completa para reclamaciones de seguros'
      ]
    },
    {
      id: 'desmontes-industriales',
      title: 'Desmontes Industriales',
      description: 'Desmantelamiento seguro y eficiente de instalaciones industriales con recuperación de materiales valorizables y gestión adecuada de residuos peligrosos.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: 'hard-hat',
      subtitle: 'Desmontamos, retiramos y aprovechamos estructuras, maquinarias y activos productivos.',
      process: [
        {
          title: 'Planificación y Evaluación',
          description: 'Análisis de la instalación y desarrollo de plan de desmontaje seguro.'
        },
        {
          title: 'Desmantelamiento Controlado',
          description: 'Ejecución de desmontaje con técnicas especializadas y personal certificado.'
        },
        {
          title: 'Separación y Clasificación',
          description: 'Identificación de materiales aprovechables, reciclables y peligrosos.'
        },
        {
          title: 'Gestión Integral de Residuos',
          description: 'Manejo adecuado de todos los materiales resultantes del desmonte.'
        }
      ],
      benefits: [
        'Personal certificado en trabajos de alturas y en caliente',
        'Recuperación de espacios en plantas productivas',
        'Aprovechamiento de materiales valorizables',
        'Gestión ambientalmente responsable de residuos'
      ],
      results: [
        'Espacios liberados para nuevos proyectos',
        'Valorización de activos en desuso',
        'Cumplimiento de normativas de desmantelamiento',
        'Minimización de residuos enviados a disposición final'
      ]
    },
    {
      id: 'destruccion-marca',
      title: 'Protección de Marca',
      description: 'Servicio confidencial y seguro para la destrucción de productos no conformes, excedentes de inventario y materiales con marca, garantizando la trazabilidad completa.',
      image: 'https://images.unsplash.com/photo-1577702312572-5bb9328a7f1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: 'shield-alt',
      subtitle: 'Destrucción certificada de productos fuera de especificación para evitar su comercialización no autorizada.',
      process: [
        {
          title: 'Recepción y Registro',
          description: 'Documentación inicial y registro detallado de los productos a destruir.'
        },
        {
          title: 'Proceso de Destrucción',
          description: 'Aplicación de métodos de destrucción según el tipo de producto (trituración, compactación, incineración, etc.).'
        },
        {
          title: 'Certificación del Proceso',
          description: 'Generación de actas y certificados de destrucción con evidencia fotográfica/videográfica.'
        },
        {
          title: 'Gestión de Residuos',
          description: 'Manejo ambientalmente responsable de los materiales resultantes de la destrucción.'
        }
      ],
      benefits: [
        'Protección contra la falsificación y comercio ilegal',
        'Confidencialidad absoluta del proceso',
        'Trazabilidad completa desde origen hasta disposición final',
        'Certificación para fines legales y de auditoría'
      ],
      results: [
        'Protección de la imagen y valor de marca',
        'Cumplimiento de políticas de calidad y garantía',
        'Prevención de responsabilidades legales',
        'Manejo ambientalmente responsable de productos destruidos'
      ]
    },
    {
      id: 'limpieza-tanques',
      title: 'Limpieza de Tanques',
      description: 'Limpieza especializada de tanques de combustibles y químicos con manejo adecuado de residuos, cumpliendo los más altos estándares de seguridad y normativa ambiental.',
      image: 'https://images.unsplash.com/photo-1612815154852-4c97f58a2f6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: 'fill-drip',
      subtitle: 'LA LIMPIEZA DE TANQUES INCLUYE LA DISPOSICIÓN CORRECTA DE LOS RESIDUOS Y SU TRATAMIENTO, CUMPLIENDO LA NORMATIVA NACIONAL Y LOS REQUERIMIENTOS DEL CLIENTE.',
      process: [
        {
          title: 'Decomisionado y Aislamiento',
          description: 'Recepción del tanque fuera de servicio. Colocación de placas ciegas en entradas/salidas para aislamiento seguro.'
        },
        {
          title: 'Bombeo de Semisólidos',
          description: 'Extracción del remanente líquido/semisólido. Uso de bombas y camiones cisterna de presión-vacío. Posible uso de ISO tanques como pulmón.'
        },
        {
          title: 'Apertura de Ventana o Manhole',
          description: 'Mejora de ventilación e ingreso de equipos. Posibilidad de hidrocorte adicional según altura de sólidos.'
        },
        {
          title: 'Extracción de Lodos',
          description: 'Ventilación e inertización antes del ingreso. Remoción manual y por bombeo con equipos antiexplosivos. Trabajo en espacios confinados con EPP, aire asistido y seguridad con relevo.'
        },
        {
          title: 'Hidrolavado de Piso y Paredes',
          description: 'Limpieza interna con agua a presión (250 kg/cm²). Uso de tensioactivos biodegradables aprobados. Cepillado manual si es necesario.'
        },
        {
          title: 'Hidrolavado de Techo y Finalización',
          description: 'Lavado completo de la parte superior. Secado, retiro de residuos, inspección y entrega final al cliente.'
        }
      ],
      benefits: [
        'Control de atmósfera (% O₂ > 19,5 y explosividad = 0 LIE)',
        'Uso obligatorio de EPP especializado',
        'Protocolos para espacios confinados',
        'Supervisión continua y relevo de personal'
      ],
      results: [
        'Tanque libre de residuos y sedimentos',
        'Mayor seguridad y vida útil del activo',
        'Cumplimiento normativo y ambiental',
        'Preparación para inspecciones o modificaciones'
      ]
    }
  ];

  scrollToService(serviceId: string) {
    const element = document.getElementById(serviceId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}