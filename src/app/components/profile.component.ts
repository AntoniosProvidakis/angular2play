import { Component, Input} from '@angular/core';

import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  animations: [
    trigger('enterView', [
      state('*', style({ transform: 'translateX(0)'})),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(200)
      ]),
      transition('* => void', [
        animate(200, style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class Profile {
  @Input() private firstname: string;
  @Input() private lastname: string;
  @Input() private email: string;
  @Input() private pic: string;

  constructor() {

  }
}