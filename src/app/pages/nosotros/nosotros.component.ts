import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-nosotros',
  imports: [NavbarComponent, AboutComponent, FooterComponent],
  templateUrl: './nosotros.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NosotrosComponent { }
