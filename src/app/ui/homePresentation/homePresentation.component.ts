import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition, query, stagger
} from '@angular/animations';
import {LocalizationService} from "../../services/localization/localization.service";

@Component({
  selector: 'app-home-presentation',
  templateUrl: './homePresentation.component.html',
  styleUrls: ['./homePresentation.component.css'],
  animations: [
    trigger('myAwesomeAnimation', [
      state('small', style({
        transform: 'scale(1)',
      })),
      state('large', style({
        transform: 'scale(1.05)',
      })),
      transition('small => large', animate('300ms ease-in')),
      transition('large => small', animate('300ms ease-out')),
    ]),
  ]
})

export class HomePresentationComponent implements OnInit {

  //images = ['images/slider-1.jpg','images/slider-2.jpg','images/slider-3.jpg'];

  images = [
    'images/slider-1.jpg',
    'images/slider-3.png',
    // 'images/c1.jpeg',
    // 'images/c2.jpeg',
    // 'images/c3.jpeg',
    // 'images/c4.jpeg',
    // 'images/c5.jpeg',
    // 'images/c6.jpeg',
    // 'images/c7.jpeg',
    // 'images/c8.jpeg',se poate si asta ?
    // 'images/big-data-banner.jpg',
  ];

  bkImageUrl= this.images[0];
  timeoutId=null;
  imageIndex = 1;
  counter=0;

  constructor(public localizationService: LocalizationService)
  {
    this.timeoutId = setInterval(() => {
      // console.log('hello');

      this.bkImageUrl = this.images[this.imageIndex];
      this.imageIndex ++;
      if(this.imageIndex === this.images.length)
      {
        this.imageIndex = 0;
      }
      this.counter++;
      this.state = (this.state === 'small' ? 'large' : 'small');
      setTimeout(() => {
        this.state = (this.state === 'small' ? 'large' : 'small');
        if(this.counter<2)
        {
          clearTimeout(this.timeoutId);
        }
      }, 300);


    }, 5000);
  }

  state: string = 'small';

  // animateMe() {
  //   this.state = (this.state === 'small' ? 'large' : 'small');
  // }s

  ngOnInit() {
  }

}
