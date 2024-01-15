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

  cardContent = [
    {
      title: 'Skills',
      description:
        'Mobile and Web app design, Reponsive web design, User-Centric Design, User Research and Interviews, Competitve Analysis, Synthesizing Insights, Advanced Prototyping, Wireframing, Usability Testing.',
      image: '/assets/Home page assets/Skills image.svg',
      imageDescription: 'Skills image',
    },
    {
      title: 'Tools',
      description:
        'I use Figma and Adobe XD for Interface design, for User Interview and Testing, I use Maze. To fuel inspiration, I explore other live products (App or web) as well as platforms like Awwwards, Behance, Dribbble, and Google.',
      image: '/assets/Home page assets/Tools image.svg',
      imageDescription: 'Tools image',
    },
    {
      title: 'Education',
      description:
        "I hold a bachelor's degree in Electrical Electronics Engineering, and Google UX Design Certificate from Coursera. Additionally, I've obtained UX and UI Design certificates from platforms such as Udemy and Udacity.",
      image: '/assets/Home page assets/Edu icon.png',
      imageDescription: 'Education image',
    },
  ];
}
