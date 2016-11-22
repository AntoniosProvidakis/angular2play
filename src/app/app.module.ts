import { NgModule } from '@angular/core'
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { Slider } from './components/slider.component';
import { ProfileList } from './components/profileList.component';
import { Profile } from './components/profile.component';

import {ProfileService} from './services/profile.service';


@NgModule({
  declarations: [
    AppComponent,
    Slider,
    ProfileList,
    Profile
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ProfileService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
