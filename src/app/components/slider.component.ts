import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'slider',
  styleUrls: ['./slider.component.css'],
  templateUrl: './slider.component.html'
})
export class Slider implements OnInit{
    @Input() private min = 0;
    @Input() private max = 10;
    @Input() private currentValue = 7;

    // @Output() limitChanged = new EventEmitter<number>(); // way 2

    constructor(){
    }

    changeCurrentValue(e){
      this.currentValue = e.target.value;
      // this.limitChanged.emit(e.target.value); // way2
    }

    ngOnInit(){
    }
    
}
