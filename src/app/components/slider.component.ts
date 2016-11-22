import {Component, Input} from '@angular/core';

@Component({
  selector: 'slider',
  styleUrls: ['./slider.component.css'],
  templateUrl: './slider.component.html'
})
export class Slider {
    @Input() private min = 0;
    @Input() private max = 10;
    @Input() private currentValue = 7;

    constructor(){
    }

    changeCurrentValue(e){
      this.currentValue = e.target.value;
    }
}
