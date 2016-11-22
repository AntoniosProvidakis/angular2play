import {Component, Input} from '@angular/core';


@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class Profile {
    @Input() private firstname: string;
    @Input() private lastname: string;
    @Input() private email: string;
    @Input() private pic: string;

    constructor(){
        
    }
}
