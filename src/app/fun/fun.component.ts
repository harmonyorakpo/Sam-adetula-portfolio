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
      quote:
        '"Power resides where men believe it resides"',
      image: '/assets/Fun page assets/Lord Varys of Lys.svg',
      authorName: 'Lord Varys of Lys.',
    },
    {
      quote:
        '"We come in peace for all mankind"',
      image: '/assets/Fun page assets/Neil Armstrong.svg',
      authorName: 'Neil Armstrong',
    },
    {
      quote:
       '"You have to fight and work hard to reach your dreams"',
      image: '/assets/Fun page assets/Lionel Messi.svg',
      authorName: 'Lionel Messi',
    },
  ];
}
