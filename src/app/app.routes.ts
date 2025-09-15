import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactosComponent } from './pages/contactos/contactos.component';



export const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/home', 
    pathMatch: 'full' 
  },
  { 
    path: 'home', 
    component: InicioComponent,
    data: { title: 'Inicio' }
  },
  { 
    path: 'servicios', 
    component: ServiciosComponent, // Nota: va a Servicios
    data: { title: 'Servicios' }
  },
  { 
    path: 'nosotros', 
    component: NosotrosComponent, // Nota: va a Nosotros
    data: { title: 'Nosotros' }
  },
  { 
    path: 'contacto', 
    component: ContactosComponent,
    data: { title: 'Contacto' }
  },
  { 
    path: '**', 
    redirectTo: '/home' 
  }
];