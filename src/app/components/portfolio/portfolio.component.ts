import { Component, Input } from '@angular/core';
import { Portfolio } from '../../models/portfolio.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  @Input() portfolios!: Portfolio[];
}
