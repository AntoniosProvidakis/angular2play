import {Component} from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    private sliderMaxValue = 10;
    private sliderCurrentValue = 1;
}