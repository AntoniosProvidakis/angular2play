import {Component} from '@angular/core';

// Add the RxJS Observable operators.
import './components/rxjs-operators';


@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    private sliderMaxValue = 10;
    private sliderCurrentValue = 1;
}
