import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { HeroComponent } from "./hero/hero.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { AboutComponent } from './about/about.component';

@Component({
  selector: 'app-inicio',
  imports: [NavbarComponent, HeroComponent, FooterComponent, AboutComponent],
  templateUrl: './inicio.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InicioComponent { }
