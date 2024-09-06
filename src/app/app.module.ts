import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginandregistrationComponent } from './components/loginandregistration/loginandregistration.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginandregistrationComponent,
    PagenotfoundComponent,
    LandingpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
