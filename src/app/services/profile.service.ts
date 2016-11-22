import { Injectable } from '@angular/core';

// import { Profile } from '../components/profile.component';

@Injectable()
export class ProfileService {
  getProfiles() {
    return [
      {
        firstname: "Antonis",
        lastname: "Providakis",
        email: "asd@adff.com",
        pic: "https://randomuser.me/api/portraits/men/83.jpg"
      },{
        firstname: "Mitsos",
        lastname: "Mamra",
        email: "mitsakos@gmail.com",
        pic: "https://randomuser.me/api/portraits/men/83.jpg"
      },{
        firstname: "Kwna",
        lastname: "Pit",
        email: "kwna@yahoo.com",
        pic: "https://randomuser.me/api/portraits/men/83.jpg"
      }];
  }
}