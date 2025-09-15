import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { AboutComponent } from './About/About.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-servicios',
  imports: [NavbarComponent, AboutComponent, FooterComponent],
  templateUrl: './servicios.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiciosComponent { }
