import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fun',
  standalone: false,
  templateUrl: './fun.component.html',
  styleUrl: './fun.component.scss'
})
export class FunComponent implements OnInit {
  headerText = 'Fun side of me.';
  headerDesc =
    'I enjoy football (soccer) and consider myself a football enthusiast. In my free time, I indulge in watching movies, listening to music, and engaging in various board games like chess, monopoly, and scrabble. I also find pleasure in playing console games. Occasionally, after work, I socialise with friends at a bar over a glass. During holidays, I cherish adventurous trips with family or friends. One of my aspirations is to journey into space someday.';

  headerImage = '/assets/Fun page assets/Camera.svg';
  headerImageDescription = 'camera';

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
