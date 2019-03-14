import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss'],
  animations: [
  trigger('listStagger', [
    transition('* <=> *', [
      query(
        ':enter',
        [
          style({ opacity: 0, transform: 'translateY(-15px)' }),
          stagger(
            '50ms',
            animate(
              '550ms ease-out',
              style({ opacity: 1, transform: 'translateY(0px)' })
            )
          )
        ],
        { optional: true }
      ),
      query(':leave', animate('50ms', style({ opacity: 0 })), {
        optional: true
      })
    ])
  ])
]
})

export class AllComponent implements OnInit {
  news = [];
  constructor(private _newsservice: NewsService) { }

  ngOnInit() {
    this.getAllNews();
  }

  getAllNews(){
    let observable = this._newsservice.getAllNews();
    observable.subscribe( data => {
      this.news = data['articles'];
      console.log(data);
    });
  }



}
