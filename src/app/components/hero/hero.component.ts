import { Component } from '@angular/core';
import { dataUser } from '../../data/data-user';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  readonly dataUser = dataUser;
}
