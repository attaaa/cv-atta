import { Component, Input, OnInit } from '@angular/core';

import { Experience } from '../../models/experience.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent implements OnInit {
  @Input() experiences!: Experience[];

  listColor = ['#286F6C', '#EEC049', '#F26440'];

  showDetails: boolean[] = [];

  ngOnInit(): void {
    this.showDetails = this.showDetails.map(showDetail => false);
  }

  toggleDetails(index: number) {
    this.showDetails[index] = !this.showDetails[index];
  }

  formatDate(date: Date): string {
    const listMonth = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const month = date.getMonth();
    const year = date.getFullYear();
    return `${listMonth[month]} ${year}`;
  }
}
