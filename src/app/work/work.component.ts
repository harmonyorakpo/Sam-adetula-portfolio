import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  standalone: false,
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss'
})
export class WorkComponent {
  headerText = 'Work Experience';
  headerDesc =
    'Throughout my career, I\'ve gained experience across diverse industries including FinTech, EduTech, E-commerce, and HealthTech. I\'ve led design teams and I have followed, collaborated with developers to ensure seamless translation of pixel-perfect designs. Working closely with stakeholders and product managers,I\'ve strived to harmonise business objectives with user-centric design, facilitating a bridge between the two realms.';

  headerImage = '/assets/Work page assets/Work experience page assets/Ring.svg';
  headerImageDescription = 'Ring';


}
