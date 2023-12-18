import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { SkillItem } from '../skill-item/skill-item.component';
import { Skill } from '../../../models/skill.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skill-item-list',
  standalone: true,
  imports: [SkillItem, CommonModule],
  templateUrl: './skill-item-list.component.html',
  styleUrl: './skill-item-list.component.scss',
})
export class SkillItemList implements AfterViewInit, OnInit {
  @Input() skills!: Skill[];

  @ViewChild('parentEl') parentElRef!: ElementRef<HTMLDivElement>;

  skillsActive!: Boolean[];
  currActiveSkill = 0;

  ngOnInit(): void {
    // this.skillsActive = this.skills.map((_, idx) => idx === 0);
    // console.log(this.skillsActive);
  }

  ngAfterViewInit(): void {
    // console.log(this.parentEl.nativeElement.querySelectorAll('.skill-item')[0]);
    this.arrangeItemSkill();
  }

  arrangeItemSkill(): void {
    const parentElem: HTMLDivElement = this.parentElRef.nativeElement;
    const skillElemList: NodeListOf<HTMLDivElement> =
      parentElem.querySelectorAll('.skill-item');

    let angleIncrement = 2 * Math.PI * (-1 / 4);

    const animate = () => {
      for (let index = 0; index < skillElemList.length; index++) {
        const skillElem = skillElemList[index];

        const angle =
          (2 * Math.PI * index) / skillElemList.length + angleIncrement;

        const x =
          parentElem.offsetWidth / 2 +
          (parentElem.offsetWidth / 2) * Math.cos(angle);
        const y =
          parentElem.offsetHeight / 2 +
          (parentElem.offsetHeight / 2) * Math.sin(angle);

        skillElem.style.left = `${-1 * (skillElem.offsetWidth / 2) + x}px`;
        skillElem.style.top = `${-1 * (skillElem.offsetHeight / 2) + y}px`;
      }
    };

    animate();

    // setInterval(() => {
    //   animate();
    //   angleIncrement += 0.002;
    // }, 1);
  }

  setSkillActive(id: number): void {
    this.currActiveSkill = id;
  }
}
