import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-contactos',
  imports: [NavbarComponent],
  templateUrl: './contactos.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactosComponent { }
