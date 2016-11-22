import { Component, OnInit, Input } from '@angular/core';
import { ProfileService } from '../services/profile.service';

@Component({
    selector: 'profileList',
    templateUrl: './profileList.component.html',
    providers: [ProfileService],
})
export class ProfileList implements OnInit {
    private profiles = [];
    private errorMessage: string;


    @Input()
    private limit: number;

    constructor(private profileService: ProfileService) {
    }

    ngOnInit() {
        this.getProfiles();
    }

    getProfiles() {
        this.profileService.getProfiles()
            .subscribe(
            profiles => this.profiles = profiles,
            error => this.errorMessage = <any>error);
    }
}