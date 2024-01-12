import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  headerText = 'Samuel Adetula.';
  headerDesc =
    'I am a Product designer based in Earth with experience in seamless user interface and experience designs across all devices for any target audience. Providing solutions through design to improve lives is my goal.';

  headerImage = '/assets/Home page assets/Space ship.svg';
  headerImageDescription = 'spaceship';

  ngOnInit(): void {}
}
