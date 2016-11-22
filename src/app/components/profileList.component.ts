import {Component, OnInit, Input} from '@angular/core';
import {ProfileService} from '../services/profile.service';

@Component({
  selector: 'profileList',
  templateUrl: './profileList.component.html',
  providers: [ProfileService]
})
export class ProfileList implements OnInit{
    private profiles;

    @Input()
    private limit: number;

    constructor(private profileService: ProfileService){
    }

    ngOnInit() {
        this.profiles = this.profileService.getProfiles();
    }

}
