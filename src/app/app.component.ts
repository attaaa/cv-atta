import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillComponent } from './components/skill/skill.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

import { dataUser } from './data/data-user';
import 'cal-sans';
import '@fontsource/poppins';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeroComponent,
    HeaderComponent,
    ExperienceComponent,
    EducationComponent,
    SkillComponent,
    PortfolioComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'cv-atta';
  dataUser = dataUser;
}
