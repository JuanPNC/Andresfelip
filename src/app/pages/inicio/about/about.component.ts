import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  constructor(public router: Router) {}

  services = [
    {
      icon: 'industry',
      title: 'Manejo de Residuos Industriales',
      description: 'Gestión integral de residuos peligrosos y no peligrosos con técnicas especializadas y cumplimiento normativo.',
      route: '/services#industrial-waste'
    },
    {
      icon: 'fire-extinguisher',
      title: 'Limpieza de Desastres',
      description: 'Servicios de emergencia para limpieza y remediación después de incendios, inundaciones y otros desastres.',
      route: '/services#disaster-cleanup'
    },
    {
      icon: 'recycle',
      title: 'Reciclaje Industrial',
      description: 'Procesamiento y valorización de residuos para maximizar su aprovechamiento y minimizar el impacto ambiental.',
      route: '/services#recycling'
    }
  ];

  stats = [
    { value: '500+', label: 'Clientes Satisfechos' },
    { value: '98%', label: 'Tasa de Reciclaje' },
    { value: '24/7', label: 'Disponibilidad' }
  ];

  values = [
    {
      title: 'Sostenibilidad',
      description: 'Priorizamos prácticas que minimicen el impacto ambiental y promuevan la economía circular.'
    },
    {
      title: 'Seguridad',
      description: 'Cumplimos con los más altos estándares de seguridad para proteger a nuestros empleados y clientes.'
    },
    {
      title: 'Innovación',
      description: 'Invertimos en tecnología de vanguardia para mejorar continuamente nuestros procesos.'
    },
    {
      title: 'Compromiso',
      description: 'Estamos dedicados a superar las expectativas de nuestros clientes en cada proyecto.'
    }
  ];

  navigateToService(route: string) {
    this.router.navigateByUrl(route);
  }
}