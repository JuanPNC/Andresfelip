import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Slide {
  image: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent implements OnInit {
  currentSlideIndex = 0;
  
  // Datos del carrusel
  slides: Slide[] = [
    {
      image: 'assets/img2.jpg',
      title: 'Somos los mejores en nuestro campo',
      description: 'Ofrecemos soluciones modernas para ayudarte a impulsar tu negocio.',
      buttonText: 'Comenzar ahora',
      buttonLink: '#'
    },
    {
      image: 'assets/img3.jpg',
      title: 'Innovación constante',
      description: 'Siempre a la vanguardia con las últimas tecnologías del mercado.',
      buttonText: 'Descubrir más',
      buttonLink: '#'
    },
    {
      image: 'assets/img4.jpg',
      title: 'Resultados comprobados',
      description: 'Miles de clientes satisfechos confían en nuestros servicios.',
      buttonText: 'Ver casos de éxito',
      buttonLink: '#'
    }
  ];

  nextSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  }

  prevSlide(): void {
    this.currentSlideIndex = this.currentSlideIndex === 0 
      ? this.slides.length - 1 
      : this.currentSlideIndex - 1;
  }

  goToSlide(index: number): void {
    this.currentSlideIndex = index;
  }

  // Cambio automático de diapositivas
  ngOnInit(): void {
    setInterval(() => {
      this.nextSlide();
    }, 5000); // Cambia cada 5 segundos
  }
}