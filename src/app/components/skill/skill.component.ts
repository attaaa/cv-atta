import { Component, Input } from '@angular/core';
import { Skill } from '../../models/skill.model';
import { CommonModule } from '@angular/common';
import { SkillItemList } from './skill-item-list/skill-item-list.component';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [CommonModule, SkillItemList],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss',
})
export class SkillComponent {
  @Input() skills!: Skill[];
}
