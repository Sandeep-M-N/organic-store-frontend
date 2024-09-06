import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
=======
import { LoginandregistrationComponent } from './components/loginandregistration/loginandregistration.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
>>>>>>> eca698c6b8c8dc2a6eb108328aa5812f74ea9c1b

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
=======
    LoginandregistrationComponent,
    PagenotfoundComponent,
>>>>>>> eca698c6b8c8dc2a6eb108328aa5812f74ea9c1b
    LandingpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
