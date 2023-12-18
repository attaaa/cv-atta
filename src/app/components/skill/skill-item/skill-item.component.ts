import { Component, Input } from '@angular/core';
import { Skill } from '../../../models/skill.model';

@Component({
  selector: 'app-skill-item',
  standalone: true,
  templateUrl: './skill-item.component.html',
})
export class SkillItem {
  @Input() skill?: Skill;
  @Input() isActive?: Boolean;
}
