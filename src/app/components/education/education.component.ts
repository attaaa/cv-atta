import { Component, Input } from '@angular/core';
import { Education } from '../../models/education.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class EducationComponent {
  @Input() educations!: Education[];

  listColor = ['#286F6C', '#EEC049', '#F26440'];

  formatDate(date: Date | null): string {
    if (!date) return 'Now';
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
